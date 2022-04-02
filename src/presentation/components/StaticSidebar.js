import React, { useEffect, useState } from "react";
import {
	BellIcon,
	HomeIcon,
	MenuAlt2Icon,
	XIcon,
	BriefcaseIcon,
	OfficeBuildingIcon,
	ArrowCircleDownIcon,
	ChatIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GetCategoryFields from "./categories/GetCategoryFields";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const StaticSidebar = () => {
	const [navigation, setNavigation] = useState([
		{ name: "Dashboard", href: "/home", icon: HomeIcon, current: false },
		{
			name: "My Jobs",
			href: "/myjobs/saved",
			icon: BriefcaseIcon,
			current: false,
		},
		{
			name: "Posted Jobs",
			href: "/postedjobs",
			icon: OfficeBuildingIcon,
			current: false,
		},
		{
			name: "Categories",
			href: "/categories",
			icon: ArrowCircleDownIcon,
			current: false,
		},
		{
			name: "Chats",

			// put your route below
			href: "/coolchat",
			icon: ChatIcon,
			current: false,
		},
	]);
	const user = useSelector((state) => state.authReducer.user);

	useEffect(() => {
		if (user && user.accountType === "freelancer") {
			setNavigation(
				navigation.filter(
					(each) =>
						each.name === "Dashboard" ||
						each.name === "Chats" ||
						each.name === "My Jobs"
				)
			);
		} else if (user && user.accountType === "employer") {
			setNavigation(
				navigation.filter(
					(each) =>
						each.name === "Dashboard" ||
						each.name === "Chats" ||
						each.name === "Posted Jobs"
				)
			);
		}
	}, [user]);

	return (
		<div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
			{/* Sidebar component, swap this element with another sidebar if you like */}
			<div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
				<div className="flex-shrink-0 px-4 flex items-center">
					<img
						className="h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
						alt="Workflow"
					/>
				</div>
				<div className="flex-grow mt-5 flex flex-col">
					<nav className="flex-1 px-2 pb-4 space-y-1">
						{navigation &&
							navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={classNames(
										item.current
											? "bg-gray-100 text-gray-900"
											: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
										"group rounded-md py-2 px-2 flex items-center text-sm font-medium"
									)}
								>
									<item.icon
										className={classNames(
											item.current
												? "text-gray-500"
												: "text-gray-400 group-hover:text-gray-500",
											"mr-3 flex-shrink-0 h-6 w-6"
										)}
										aria-hidden="true"
									/>
									{item.name}
								</Link>
							))}

						<GetCategoryFields />
					</nav>
				</div>
			</div>
		</div>
	);
};

export default StaticSidebar;
