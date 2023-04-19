import { Outlet } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import Sidebar from "../components/Sidebar";

const Layout = () => {
	return (
		<div className="relative min-h-full">
			<Sidebar />
			<div className="p-4 sm:p-7 lg:ml-64 text-gray-500 dark:text-gray-400" id="main">
				<Outlet />
				<small className="fixed right-3 bottom-3 text-center text-xs lowercase flex justify-center items-center">
					<FaHeart className="text-red-400 mr-2" /> Made by Fernando
				</small>
			</div>
		</div>
	);
};

export default Layout;
