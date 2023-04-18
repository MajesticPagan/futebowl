const useGroupBy = (array, key) => {
	let groups = {};

	for (let { [key]: _key, ...fields } of array) {
		groups[_key] = groups[_key] || [];
		groups[_key].push({ ...fields });
	}

	return Object.entries(groups).map((group) => ({
		key: group[0],
		items: group[1],
	}));
};

export default useGroupBy;
