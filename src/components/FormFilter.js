import React, { Component } from "react";
import { Form } from "react-bootstrap";

class FormFilter extends Component {
	render() {
		return (
			<div>
				<Form.Select
					aria-label="Default select example"
					onChange={(e) => {
						this.props.handleSelectHorns(e);
					}}
				>
					<option value="all">Select All HornedBeasts</option>
					<option value="1">Select HornedBeasts with 1 Horns</option>
					<option value="2">Select HornedBeasts with 2 Horns</option>
					<option value="3">Select HornedBeasts with 3 Horns</option>
					<option value="100">Select HornedBeasts with 100 Horns</option>
				</Form.Select>
			</div>
		);
	}
}

export default FormFilter;
