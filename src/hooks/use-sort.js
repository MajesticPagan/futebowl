import { useState } from "react";

const useSort = (config, data) => {
	// Definir states
	const [sortBy, setSortBy] = useState(null);
	const [sortOrder, setSortOrder] = useState(null);

	const setSortColumn = (label) => {
		if (sortBy && label !== sortBy) {
			setSortOrder("asc");
			setSortBy(label);
			return;
		}

		if (sortOrder === null) {
			setSortBy(label);
			setSortOrder("asc");
		} else if (sortOrder === "asc") {
			setSortBy(label);
			setSortOrder("desc");
		} else if (sortOrder === "desc") {
			setSortBy(null);
			setSortOrder(null);
		}
	};

	let sortedData = data;

	if (sortOrder && sortBy) {
		const { sortValue } = config.find((column) => column.label === sortBy);
		sortedData = [...data].sort((a, b) => {
			const valueA = sortValue(a);
			const valueB = sortValue(b);

			const order = sortOrder === "asc" ? 1 : -1;

			if (typeof valueA === "string") {
				return valueA.localeCompare(valueB) * order;
			} else {
				return (valueA - valueB) * order;
			}
		});
	}

	return { sortBy, sortOrder, sortedData, setSortColumn };
};

export default useSort;