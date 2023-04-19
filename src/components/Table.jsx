import { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Alert from "./Alert";

const Table = ({ config, data, keyFn, className }) => {
	const tableClassName = classNames(
		"relative overflow-x-auto rounded border border-gray-300 dark:border-gray-800 animate-slowfade",
		className
	);

	if (!data) return <Alert info title="Não existe informação disponível." />;

	const renderedHeadings = config.map((column) => {
		if (column.header) {
			return <Fragment key={column.label}>{column.header(column)}</Fragment>;
		}

		return (
			<th scope="col" className="px-6 py-3" key={column.label}>
				{column.label}
			</th>
		);
	});

	const renderedRows = data.map((row, i) => {
		const className = classNames("px-6 py-4 border-b bg-white dark:bg-gray-900 dark:border-gray-700", {
			"bg-gray-50 dark:bg-gray-800": i & 1,
		});

		return (
			<tr className={className} key={keyFn(row)}>
				{config.map((column) => {
					return (
						<td className="px-2 py-4" key={column.label}>
							{column.render(row)}
						</td>
					);
				})}
			</tr>
		);
	});

	return (
		<div className={tableClassName}>
			<table className="w-full text-sm lg:text-base text-center text-gray-500 dark:text-gray-400">
				<thead className="text-xs lg:text-base text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
					<tr>{renderedHeadings}</tr>
				</thead>
				<tbody>{renderedRows}</tbody>
			</table>
		</div>
	);
};

Table.propTypes = {
	config: PropTypes.array.isRequired,
	keyFn: PropTypes.func.isRequired,
};

export default Table;
