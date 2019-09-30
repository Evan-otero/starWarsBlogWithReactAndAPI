import React from "react";
import Proptypes from "prop-types";

export const Card = props => {
	return (
		<div className="col-md-3">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.echo}</h5>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	echo: Proptypes.object
};
