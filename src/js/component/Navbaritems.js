import React from "react";
import Proptypes from "prop-types";

export const Navbaritems = props => {
	return (
		<li className="navbarli">{props.bravo} alpha omega ruby sapphire</li>
	);
};
Navbaritems.propTypes = {
	bravo: Proptypes.string
};
