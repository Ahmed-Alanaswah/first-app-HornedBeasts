import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

class HornedBeasts extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { raislikes: 0 };
	// }
	// increaseLike = () => {
	// 	this.setState({
	// 		raislikes: this.state.raislikes + 1,
	// 	});
	// };

	getHandleOpen = () => {
		let title = this.props.title;
		let description = this.props.description;
		let raislikes = this.props.raislikes;
		let image_url = this.props.image_url;
		this.props.handleOpen(title, description, image_url, raislikes);
	};

	render() {
		return (
			<>
				<Col>
					<Card
						className="text-center"
						style={{ width: "18rem", margin: "10px auto" }}
					>
						<Card.Img
							variant="top"
							style={{ height: "200px", objectFit: "cover" }}
							onClick={this.props.increaseLike}
							src={this.props.image_url}
							alt={this.props.keyword}
						/>
						<Card.Body
							style={{
								height: "235px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<Card.Title>{this.props.title}</Card.Title>
							<Card.Text>
								{this.props.description}
								<br />
								<i className="bi bi-suit-heart-fill"></i>:{this.props.raislikes}
							</Card.Text>
							<Button onClick={this.getHandleOpen} variant="primary">
								Go somewhere
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</>
		);
	}
}

export default HornedBeasts;
