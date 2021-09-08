import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";

export class Main extends Component {
	render() {
		return (
			<div className="row">
				{this.props.filterData.map((img) => {
					return (
						<HornedBeasts
							handleOpen={this.props.handleOpen}
							increaseLike={this.props.increaseLike}
							title={img.title}
							image_url={img.image_url}
							description={img.description}
							keyword={img.keyword}
							horns={img.horns}
							raislikes={this.props.raislikes}
						/>
					);
				})}
			</div>
		);
	}
}

export default Main;
