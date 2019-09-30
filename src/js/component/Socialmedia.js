import React from "react";
import Proptypes from "prop-types";

export const Socialmedia = props => {
	return (
		<li className="smimages">
			<img src={props.alpha} />
		</li>
	);
};
Socialmedia.propTypes = {
	alpha: Proptypes.string
};
