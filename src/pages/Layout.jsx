import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const Layout = () => {
	return (
		<div className="relative">
			<Sidebar />
			<div className="p-4 sm:p-7 lg:ml-64 text-white" id="main">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
