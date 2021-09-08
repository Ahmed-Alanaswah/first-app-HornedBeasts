import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class SelectedBeast extends Component {
	render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.description}
					<br />
					<img
						src={this.props.image_url}
						style={{
							width: "100%",
							height: "300px",
							objectFit: "cover",
							margin: "20px auto",
						}}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default SelectedBeast;
