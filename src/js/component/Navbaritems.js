import React from "react";
import Proptypes from "prop-types";

export const Navbaritems = props => {
	return (
		<li className="navbarli">{props.bravo}</li>
	);
};
Navbaritems.propTypes = {
	bravo: Proptypes.string
};
