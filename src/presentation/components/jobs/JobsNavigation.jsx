import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../styling/jobsNavigationStyle.css";

const JobsNavigation = (props) => {
	return (
		<div>
			<ul className="labNavList">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "selected" : "nonSelected"
						}
						id="labNavLink"
						to={`/myjobs/saved`}
					>
						Saved
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "selected" : "nonSelected"
						}
						id="labNavLink"
						to={`/myjobs/applied`}
					>
						Applied
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "selected" : "nonSelected"
						}
						id="labNavLink"
						to={`/myjobs/offers`}
					>
						Offers
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "selected" : "nonSelected"
						}
						id="labNavLink"
						to={`/myjobs/denied`}
					>
						Denied
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "selected" : "nonSelected"
						}
						id="labNavLink"
						to={`/myjobs/accepted`}
					>
						Accepted (By Both Parties)
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default JobsNavigation;
