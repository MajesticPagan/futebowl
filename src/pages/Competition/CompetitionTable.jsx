import { FaCircle } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { useGetCompetitionTableQuery } from "../../store/services/footballApi";

import { Error, Alert, Skeleton, SortableTable } from "../../components";

const CompetitionTable = () => {
	const { compId } = useOutletContext();
	const { data, error, isFetching } = useGetCompetitionTableQuery(compId);

	if (isFetching) {
		return (
			<Skeleton
				times={10}
				className="p-4 md:p-5 md:pt-0 border border-gray-200 dark:border-gray-700 rounded shadow space-y-5 divide-y divide-gray-200 dark:divide-gray-700"
			>
				<div className="flex items-center justify-between pt-5 gap-4">
					<FaCircle className="w-4 h-4 text-gray-400 dark:text-gray-500" />
					<div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-24 mr-auto"></div>
					<div className="h-2.5 bg-gray-50 dark:bg-gray-500 rounded-full w-10"></div>
					<div className="h-2.5 bg-gray-100 dark:bg-gray-600 rounded-full w-10"></div>
					<div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-10"></div>
					<div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-10"></div>
				</div>
			</Skeleton>
		);
	}

	if (error) return <Error />;

	if (data?.length > 0) {
		console.log(data);
		const config = [
			{
				label: "Posição",
				render: (item) => item.Position,
				sortValue: (item) => parseInt(item.Position),
			},
			{
				label: "Clube",
				render: (item) => (
					<div className="flex items-center gap-4 whitespace-nowrap text-gray-900 dark:text-white">
						<img
							className="w-6 h-6"
							src={item.SquadLogo}
							alt={`Emblema do ${item.Name}`}
						/>
						{item.Name}
					</div>
				),
				header: (col) => (
					<th scope="col" className="px-6 py-3 text-left">
						{col.label}
					</th>
				),
			},
			{
				label: "J",
				render: (item) => item.Played,
				sortValue: (item) => parseInt(item.Played),
			},
			{
				label: "V",
				render: (item) => item.Winned,
				sortValue: (item) => parseInt(item.Winned),
			},
			{
				label: "E",
				render: (item) => item.Tie,
				sortValue: (item) => parseInt(item.Tie),
			},
			{
				label: "D",
				render: (item) => item.Loosed,
				sortValue: (item) => parseInt(item.Loosed),
			},
			{
				label: "DG",
				render: (item) => item["Goal Difference"],
				sortValue: (item) => parseInt(item["Goal Difference"]),
			},
			{
				label: "Pts.",
				render: (item) => <strong className="text-white">{item.Points}</strong>,
				sortValue: (item) => parseInt(item.Points),
			},
		];

		return <SortableTable config={config} data={data} keyFn={(item) => `${item.Name}-${item.Points}`} />;
	}

	return <Alert dark title="Não existe uma classificação disponível para esta competição." />;
};

export default CompetitionTable;
