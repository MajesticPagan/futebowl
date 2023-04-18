import useSort from "../hooks/use-sort";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import Table from "./Table";

const getSortIcons = (label, sortBy, sortOrder) => {
	if (sortOrder === null || label !== sortBy) {
		return (
			<div>
				<FaSort />
			</div>
		);
	} else if (sortOrder === "asc") {
		return <FaSortUp />;
	} else if (sortOrder === "desc") {
		return <FaSortDown />;
	}
};

const SortableTable = (props) => {
	const { config, data } = props;

	const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
		config,
		data
	);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th
					scope="col"
					className="px-6 py-3 cursor-pointer hover:text-gray-300"
					onClick={() => setSortColumn(column.label)}
				>
					<div className="flex items-center justify-center gap-1">
						{column.label}
						{getSortIcons(column.label, sortBy, sortOrder)}
					</div>
				</th>
			),
		};
	});

	return <Table {...props} config={updatedConfig} data={sortedData} />;
};

export default SortableTable;
