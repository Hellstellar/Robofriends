import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
	render(){
		return(
			<div>
				<h1 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">Hello world</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello;