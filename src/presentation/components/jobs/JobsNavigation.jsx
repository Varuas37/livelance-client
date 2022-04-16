import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../styling/jobsNavigationStyle.css";

const JobsNavigation = (props) => {
	return (
		<div className="mt-10 items-baseline ">
			{/* space-x-4 */}
			<ul className="max-w-5xl flex justify-end space-x-8">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "selected m-1 px-4 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-full font-bold text-sm leading-loose cursor-pointer " : "nonSelected"
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
							isActive ? "selected m-1 px-4 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-full font-bold text-sm leading-loose cursor-pointer " : "nonSelected"
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
							isActive ? "selected m-1 px-4 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-full font-bold text-sm leading-loose cursor-pointer " : "nonSelected"
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
							isActive ? "selected m-1 px-4 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-full font-bold text-sm leading-loose cursor-pointer " : "nonSelected"
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
							isActive ? "selected m-1 px-4 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-full font-bold text-sm leading-loose cursor-pointer " : "nonSelected"
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
