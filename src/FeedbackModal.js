import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, } from 'reactstrap';
import MainImage from './screen.png'

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from './Utils/NewCropImage';
import html2canvas from 'html2canvas';

class FeedbackModal extends Component {
    constructor(props) {
        super(props);
        this.imagePreviewCanvasRef = React.createRef()
        this.state = {
            showReportModal: false,
            crop: {
            },
            croppedImage: '',
            showFeedbackModal: false
        };
        this.screenShotImage = '';
        this.imageRef = '';
        this.toggle = this.toggle.bind(this);
        this.handleOnCropChange = this.handleOnCropChange.bind(this);
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleOnCropComplete = this.handleOnCropComplete.bind(this);
        this.takeScreenShot = this.takeScreenShot.bind(this);

        
    }

    componentDidMount() {
        document.querySelector('#submit-feedback-btn').onclick = (e) => {
            this.takeScreenShot();
        };
    }

    toggle() {
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
    handleImageLoaded(image) {
        console.log("image", image)
    }

    handleOnCropComplete(crop, pixelCrop) {
        if (!crop || !crop.height || !crop.width) return
        // const canvasRef = this.imagePreviewCanvasRef.current
        getCroppedImg(this.imageRef, crop, pixelCrop).then((croppedImage) => {
            console.log(croppedImage);
            this.setState({ croppedImage: URL.createObjectURL(croppedImage) })
        })

    }
    takeScreenShot(){
        html2canvas(document.querySelector('body')).then((canvas) => {
            // document.body.appendChild(canvas);
            this.screenShotImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            this.setState({showFeedbackModal : true})
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
                                <Input type="textarea" name="text" id="exampleText" placeholder="Describe your issue or share your ideas" />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" />{'    '}
                                Include Scrrenshot
                            </FormGroup>
                            <hr />
                        </Form>
                        <div className='image'>
                            {/* <img src={Image} alt="logo" className="Image-demo" /> */}
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
                            {/* <canvas ref={this.imagePreviewCanvasRef}></canvas> */}
                        </div>
                        <div>
                            Go to the <a href="#">Legal help page</a> to request content changes for legel resons.Some <a href="#">account and system information</a> may be sent to google.We will use the information you give us to help address technical issues and to improve our services,subject to our <a href="#">Privacy policy</a> and <a href="#">Terms of Service</a>.
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Send</Button>
                        
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}



export default FeedbackModal;