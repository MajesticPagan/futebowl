import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGetCompetitionsQuery } from "../store/services/footballApi";

import { Error, Skeleton, Search, Alert, CompetitionCard } from "../components";
import { useState } from "react";

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
				<div className="p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded">
					<div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
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
