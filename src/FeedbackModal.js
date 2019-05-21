
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from './Utils/NewCropImage';
import html2canvas from 'html2canvas';
import axios from 'axios';

class FeedbackModal extends Component {
    constructor(props) {
        super(props);
        this.imagePreviewCanvasRef = React.createRef()
        this.state = {
            showReportModal: false,
            crop: {
            },
            croppedImage: '',
            showFeedbackModal: false,
            fields: {
                summary: '',
                description: '',
                coverPhoto: ''
            }
        };
        this.screenShotImage = '';
        this.imageRef = '';
        this.toggle = this.toggle.bind(this);
        this.handleOnCropChange = this.handleOnCropChange.bind(this);
        this.handleOnCropComplete = this.handleOnCropComplete.bind(this);
        this.takeScreenShot = this.takeScreenShot.bind(this);
        this.handleCropImage = this.handleCropImage.bind(this);

    }

    componentDidMount() {
        var name = document.getElementById("feedbackId").getAttribute("data-trigger");
        window.$(document).on('click', "." + name, (e) => {
            this.takeScreenShot();
        });
    }

    toggle() {
        this.setState(prevState => ({
            showFeedbackModal: !prevState.showFeedbackModal
        }));
    }

    handleSubmit = () => {
        const data = {
            summary: this.state.fields['summary'],
            description: this.state.fields['description'],
            coverPhoto: this.state.fields['coverPhoto'],
        }

        axios.post(`http://192.168.102.120/qa.api.itelbpo/api/issues`, data)
            .then(res => {
                const fields = res.data;
                this.setState({ fields });
            })

        this.setState(prevState => ({
            showFeedbackModal: !prevState.showFeedbackModal
        }));
    }

    handleOnCropChange(crop) {
        this.setState({
            crop: crop
        })
    }

    onImageLoaded = (image) => {
        this.imageRef = image;
    }

    handleOnCropComplete(crop, pixelCrop) {
        if (!crop || !crop.height || !crop.width) return
        // const canvasRef = this.imagePreviewCanvasRef.current
        getCroppedImg(this.imageRef, crop, pixelCrop).then((croppedImage) => {
            console.log(croppedImage);
            var reader = new FileReader();
            var self = this;
            reader.readAsDataURL(croppedImage);
            reader.onloadend = function () {
                self.handleCropImage(reader.result);
            }
            this.setState({ croppedImage: URL.createObjectURL(croppedImage) })
        })

    }

    handleCropImage(result) {
        this.state.fields.coverPhoto = result;
        console.log("new image", this.state.fields.coverPhoto);
    }

    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    takeScreenShot() {
        html2canvas(document.querySelector('body')).then((canvas) => {
            this.screenShotImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            this.setState({ showFeedbackModal: true })
        });
    }

    render() {
        return (
            <div>
                <Modal id="myModal" isOpen={this.state.showFeedbackModal} toggle={this.toggle} fade={false} style={{ width: "100%", display: "block", opacity: 1 }}>
                    <ModalHeader toggle={this.toggle}>Send Feedback</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="text" id="Text"
                                    placeholder="Please write summary"
                                    onChange={this.handleChange.bind(this, "summary")}
                                    value={this.state.fields["summary"]}
                                    style={{ marginBottom: "18px" }}
                                />
                                <Input type="textarea" name="text" id="exampleText"
                                    placeholder="Describe your issue or share your ideas"
                                    onChange={this.handleChange.bind(this, "description")}
                                    value={this.state.fields["description"]}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Input onClick={this.state.toInclude} onClick={() => this.setState({ toInclude: !this.state.toInclude })} type="checkbox" style={{ left: "0px" }} defaultChecked/>{'    '}
                                <span style={{ marginLeft: "10px" }}>Include Screenshot</span>
                            </FormGroup>
                            <hr />
                        </Form>
                        <div className='image'>
                            <ReactCrop
                                src={this.screenShotImage}
                                crop={this.state.crop}
                                onChange={this.handleOnCropChange}
                                onImageLoaded={this.onImageLoaded}
                                onComplete={this.handleOnCropComplete}
                                className="Image-demo"
                            />
                            <br />
                            <p>Crop image</p>
                            <img src={this.state.croppedImage} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>{' '}
                        <Button color="secondary" onClick={this.handleSubmit}>Send</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default FeedbackModal;

