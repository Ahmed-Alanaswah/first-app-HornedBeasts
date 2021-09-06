import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json';

export class Main extends Component {
   
    render() { 

        
        return (
            <div>
                {
                   Data.map(img => {
                    
                       return <HornedBeasts  title = {img.title}  image_url={img.image_url} description = {img.description} keyword = {img.keyword} likes = {this.props.raislikes} />
                   })
                }
            </div>
        )
    }
}

export default Main
