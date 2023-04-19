import { useOutletContext } from "react-router-dom";
import { useGetCompetitionTransfersQuery } from "../../store/services/footballApi";
import useGroupBy from "../../hooks/use-groupby";

import { Error, Alert, Spinner, SortableTable } from "../../components";

const CompetitionTransfers = () => {
	const { compId } = useOutletContext();
	const { data, error, isFetching } = useGetCompetitionTransfersQuery(compId);

	if (isFetching) return <Spinner />;

	if (error) return <Error />;

	if (data?.length > 0) {
		const lists = useGroupBy(data, "transferType");

		const listsConfig = {
			"CONTRACT RENEWAL": [
				{
					label: "Data",
					render: (item) => item.transferDate,
				},
				{
					label: "Jogador",
					render: (item) => item.playerName,
					sortValue: (item) => item.playerName,
				},
				{
					label: "Posição",
					render: (item) => item.playerRole,
					sortValue: (item) => item.playerRole,
				},
				{
					label: "Descrição",
					render: (item) => item.renewal,
				},
			],
			"DONE DEAL": [
				{
					label: "Data",
					render: (item) => item.transferDate,
				},
				{
					label: "Jogador",
					render: (item) => item.playerName,
					sortValue: (item) => item.playerName,
				},
				{
					label: "Posição",
					render: (item) => item.playerRole,
					sortValue: (item) => item.playerRole,
				},
				{
					label: "Valor / Tipo",
					render: (item) => item.price,
				},
				{
					label: "Origem",
					render: (item) => item.oldClub,
				},
				{
					label: "Destino",
					render: (item) => item.newClub,
				},
			],
		};

		return (
			<>
				{lists.map(({ key: name, items }) => {
					const tableConfig = listsConfig[name];
					return (
						<div key={name} className="mb-4 sm:mb-7">
							<h3 className="text-2xl font-bold mb-4 sm:mb-7 text-gray-900 dark:text-white">{name}</h3>
							<SortableTable
								config={tableConfig}
								data={items}
								keyFn={(item) => item.playerName}
							/>
						</div>
					);
				})}
			</>
		);
	}

	return <Alert dark title="Não existem transferências a reportar." />;
};

export default CompetitionTransfers;
