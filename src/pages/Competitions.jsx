import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGetCompetitionsQuery } from "../store/services/footballApi";

import { Error, Skeleton, Card, Search, Alert } from "../components";
import { useState } from "react";

const CompetitionCard = ({ competition }) => {
	let competitionLink = `/competitions/${competition}`;

	return (
		<Card hover>
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-white truncate">
				<Link to={competitionLink}>{competition}</Link>
			</h5>
			<div className="flex items-center gap-3 mt-5">
				<div className="w-full inline-flex items-end rounded shadow" role="group">
					<Link
						to={`${competitionLink}`}
						className="grow md:grow-0 inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-l focus:z-10 focus:ring-2 bg-blue-600 border-blue-600 text-white hover:bg-blue-700 focus:ring-blue-800"
					>
						Vista Geral
						<FaLongArrowAltRight className="w-4 h-4 ml-2 fill-current" />
					</Link>
					<Link
						to={`${competitionLink}/results`}
						className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-r focus:z-10 focus:ring-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-700 focus:ring-blue-800"
					>
						Resultados
					</Link>
				</div>
			</div>
		</Card>
	);
};

const Competitions = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { data, error, isFetching } = useGetCompetitionsQuery();

	const handleOnSearch = (query) => {
		setSearchTerm((currentState) => query);
	};

	if (isFetching) {
		return (
			<Skeleton
				times={12}
				className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-7"
			>
				<div className="p-4 md:p-6 border border-gray-700 rounded shadow">
					<div className="h-3 rounded-full bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
					<div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
					<div className="h-2 rounded-full bg-gray-700"></div>
				</div>
			</Skeleton>
		);
	}

	if (error) return <Error />;

	let renderedComps = <Alert dark title="Não existem competições a mostrar." />;

	if (data) {
		let competitions = data?.replace("{", "").replace("}", "").split(",");

		competitions = competitions?.filter((comp) => comp.toLowerCase().trim().includes(searchTerm));

		renderedComps = (
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-7">
				{competitions?.map((comp, i) => (
					<CompetitionCard key={comp + i} competition={comp} />
				))}
			</div>
		);
	}

	return (
		<>
			<Search onSearch={handleOnSearch} />
			{renderedComps}
		</>
	);
};

export default Competitions;
