import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./components/Data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";
import FormFilter from "./components/FormFilter";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: "",
			description: "",
			image_url: "",
			Data: Data,
			filterData: [],
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

	handleOpen = (title, description, image_url, raislikes) => {
		this.setState({
			showModal: true,
			title: title,
			description: description,
			image_url: image_url,
		});
	};
	handleSelectHorns = (e) => {
		if (e.target.value === "1") {
			var filteredData = this.state.Data.filter((card) => {
				return card.horns == "1";
			});
		}
		if (e.target.value === "2") {
			var filteredData = this.state.Data.filter((card) => {
				return card.horns == "2";
			});
		}
		if (e.target.value === "3") {
			var filteredData = this.state.Data.filter((card) => {
				return card.horns == "3";
			});
		}
		if (e.target.value === "100") {
			var filteredData = this.state.Data.filter((card) => {
				return card.horns == "100";
			});
		}
		if (e.target.value === "all") {
			var filteredData = this.state.Data.filter((card) => {
				return card;
			});
		}
		this.setState({
			// ...this.state,
			filterData: filteredData,
		});
	};
	render() {
		return (
			<>
				<Header />
				<FormFilter handleSelectHorns={this.handleSelectHorns} />
				<h2>Total : {this.state.filterData.length}</h2>

				<Main
					handleOpen={this.handleOpen}
					// raislikes={this.props.raislikes}
					// increaseLike={this.increaseLike}
					Data={this.state.Data}
					filterData={this.state.filterData}
				/>
				<SelectedBeast
					handleClose={this.handleClose}
					showModal={this.state.showModal}
					title={this.state.title}
					description={this.state.description}
					image_url={this.state.image_url}
					filterData={this.state.filterData}
				/>
				<Footer />
			</>
		);
	}
}

export default App;
