import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import Data from "./Data.json";

export class Main extends Component {
	render() {
		return (
			<div className="row">
				{Data.map((img) => {
					return (
						<HornedBeasts
							handleOpen={this.props.handleOpen}
							increaseLike={this.props.increaseLike}
							title={img.title}
							image_url={img.image_url}
							description={img.description}
							keyword={img.keyword}
							raislikes={this.props.raislikes}
						/>
					);
				})}
			</div>
		);
	}
}

export default Main;
