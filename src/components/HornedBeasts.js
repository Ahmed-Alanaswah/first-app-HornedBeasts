import React, { Component } from 'react'

 class HornedBeasts extends Component {
    constructor(props){
        super(props);
        this.state ={raislikes:0};
      }
    increaseLike =()=> {
        this.setState({
            raislikes : this.state.raislikes +1
           })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h2>{this.props.likes}</h2>
                <h2>{this.state.raislikes}</h2>
                <img onClick={this.increaseLike} src={this.props.image_url} alt= {this.props.keyword} />
                <p>{this.props.description}</p>
    
            </div>
        )
    }
}

export default HornedBeasts
