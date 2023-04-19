import { useOutletContext } from "react-router-dom";
import { useGetCompetitionFixturesQuery } from "../../store/services/footballApi";

import { Error, Spinner, Card, ResultCard } from "../../components";

const CompetitionFixtures = () => {
	const { compId } = useOutletContext();
	const { data, error, isFetching } = useGetCompetitionFixturesQuery(compId);

	if (isFetching) return <Spinner />;

	if (error) return <Error />;

	const fixtures = Object.entries(data[0])?.map((result) => ({
		title: result[0],
		matches: result[1],
	}));

	return (
		<>
			{fixtures?.map((item) => (
				<Card key={item?.title} className="mb-4 sm:mb-7">
					<h3 className="text-2xl font-bold mb-4 sm:mb- text-gray-900 dark:text-white">{item.title}</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-7">
						{item?.matches?.map((match, i) => (
							<ResultCard key={`${item?.title}-${i}`} match={match} />
						))}
					</div>
				</Card>
			))}
		</>
	);
};

export default CompetitionFixtures;
