import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { sidebarLinks } from "../assets/constants";

import Backdrop from "./Backdrop";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleButtonClick = () => {
		setIsSidebarOpen((currentState) => !currentState);
	};

	const handleBackdropClick = () => {
		setIsSidebarOpen(false);
	};

	return (
		<>
			<button
				aria-controls="default-sidebar"
				type="button"
				className="fixed top-3 right-3 z-40 inline-flex items-center p-2 text-sm text-gray-400 rounded lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
				onClick={handleButtonClick}
			>
				<span className="sr-only">Open sidebar</span>
				<FaBars className="w-6 h-6" />
			</button>

			<aside
				id="sidebar"
				className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
					isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
				} lg:translate-x-0`}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
					<ul className="space-y-2 font-medium">
						{sidebarLinks.map((item) => (
							<NavLink
								key={item.title}
								to={item.to}
								className="group flex items-center p-2 text-white rounded hover:bg-gray-700"
							>
								<item.icon className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" />
								<span className="ml-3 active:text-blue-500">{item.title}</span>
							</NavLink>
						))}
					</ul>
				</div>
			</aside>

			{isSidebarOpen && <Backdrop onClick={handleBackdropClick}/>}
		</>
	);
};

export default Sidebar;
