import {
	Outlet,
	useParams,
	NavLink,
	useNavigate,
} from "react-router-dom";

import { compLinks } from "../assets/constants";
import { FaChevronLeft } from "react-icons/fa";

const CompetitionDetails = () => {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<>
			<div>
				<button
					type="button"
					className="flex flex-wrap items-center text-sm text-gray-400 hover:text-gray-300"
					onClick={() => navigate("../")}
				>
					<FaChevronLeft className="w-3 h-3 mr-2" />
					Todas as competições
				</button>
				<h2 className="text-3xl font-bold mt-2">{params.compId}</h2>
			</div>
			<nav id="tabs" className="border-b border-gray-700 mt-5">
				<ul className="flex flex-wrap -mb-px text-sm lg:text-base text-center">
					{compLinks.map((item) => (
						<li className="mr-2" key={item.title}>
							<NavLink
								to={item.to}
								className="inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg text-gray-400 hover:text-gray-300 hover:border-gray-300"
							>
								<item.icon className="w-4 h-4 mr-2" />
								{item.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<div className="mt-7">
				<Outlet context={params} />
			</div>
		</>
	);
};

export default CompetitionDetails;
