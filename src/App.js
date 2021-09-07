import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: "",
			description: "",
			image_url: "",
			// raislikes: 0,
		};
	}

	// increaseLike = () => {
	// 	this.setState({
	// 		raislikes: this.state.raislikes + 1,
	// 	});
	// };
	handleClose = () => {
		this.setState({
			showModal: false,
		});
	};

	handleOpen = (title, description, image_url) => {
		this.setState({
			showModal: true,
			title: title,
			description: description,
			image_url: image_url,
		});
	};
	render() {
		return (
			<>
				<Header />

				<Main
					handleOpen={this.handleOpen}
					raislikes={this.props.raislikes}
					increaseLike={this.increaseLike}
				/>
				<SelectedBeast
					handleClose={this.handleClose}
					showModal={this.state.showModal}
					title={this.state.title}
					description={this.state.description}
					image_url={this.state.image_url}
					raislikes={this.props.raislikes}
				/>
				<Footer />
			</>
		);
	}
}

export default App;
