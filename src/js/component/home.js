import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Socialmedia } from "./Socialmedia.js";
import { Navbaritems } from "./Navbaritems.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="header container-fluid">
					<div className="headertop row">
						<div className="socialmedialinks col-md-3">
							<ul style={{ display: "flex" }}>
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051258.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051243.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051280.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051262.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051248.svg" />
							</ul>
						</div>
						<div className="swlogo col-md-6">
							<img
								id="logo"
								src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG36.png"
							/>
						</div>
						<div className="utility col-md-3">
							<div className="searchbar" />
							<input />
							<div className="login">Log In // Sign Up </div>
						</div>
					</div>
					<div>
						<div className="navbar">
							<div className="navbaritems">
								<ul style={{ display: "flex" }}>
									<Navbaritems bravo="News + Blog" />
									<Navbaritems bravo="Video" />
									<Navbaritems bravo="Films" />
									<Navbaritems bravo="Series" />
									<Navbaritems bravo="Interactive" />
									<Navbaritems bravo="Community" />
									<Navbaritems bravo="Databank" />
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="content container">
					<div className="maincontent row">
						<div className="browsedatabank" />
						<div className="col-md-2 browse" />
						<div className="col-md-10 databank" />
					</div>
				</div>
			</div>
		);
	}
}
