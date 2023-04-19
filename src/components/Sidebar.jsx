import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";

import { sidebarLinks } from "../assets/constants";
import { toggleDarkMode } from "../store/slices/optionsSlice";

import Backdrop from "./Backdrop";
import Toggle from "./Toggle";

const Sidebar = () => {
	const dispatch = useDispatch();
	const { darkMode } = useSelector((state) => state.options);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		}
		return () => {
			document.documentElement.classList.remove("dark");
		};
	}, [darkMode]);

	const handleButtonClick = () => {
		setIsSidebarOpen((currentState) => !currentState);
	};

	const handleToggle = () => {
		dispatch(toggleDarkMode(!darkMode));
	};

	const handleBackdropClick = () => {
		setIsSidebarOpen(false);
	};

	return (
		<>
			<button
				aria-controls="default-sidebar"
				type="button"
				className="fixed top-3 right-3 z-40 inline-flex items-center p-2 text-sm text-gray-700 dark:text-gray-400 rounded lg:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
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
				<div className="flex flex-col gap-4 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						{sidebarLinks.map((item) => (
							<li key={item.title}>
								<NavLink
									to={item.to}
									className="group flex items-center p-2 rounded text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
								>
									<item.icon className="w-6 h-6 transition duration-75 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
									<span className="ml-3">{item.title}</span>
								</NavLink>
							</li>
						))}
					</ul>
					<div className="flex flex-col items-center gap-3 mt-auto px-3 py-4 rounded border border-gray-200 dark:border-gray-700">
						<p className="text-center text-sm dark:text-white">Definições</p>
						<Toggle onToggle={handleToggle} title="Modo escuro" />
					</div>
				</div>
			</aside>

			{isSidebarOpen && <Backdrop onClick={handleBackdropClick} />}
		</>
	);
};

export default Sidebar;
