import PropTypes from "prop-types";
import classNames from "classnames";

const Alert = ({ title, info, danger, success, warning, dark, ...rest }) => {
	const alertClassName = classNames(
		rest.className,
		"p-4 mb-4 text-sm lg:text-base rounded dark:bg-gray-800",
		{
			"text-blue-800 bg-blue-50 dark:text-blue-400": info,
			"text-red-800 bg-red-50 dark:text-red-400": danger,
			"text-green-800 bg-green-50 dark:text-green-400": success,
			"text-yellow-800 bg-yellow-50 dark:text-yellow-300": warning,
			"text-gray-800 bg-gray-50 dark:text-gray-300": dark,
		}
	);

	return (
		<div {...rest} className={alertClassName} role="alert">
			{title || "Ocorreu um erro, por favor tente novamente mais tarde."}
		</div>
	);
};

Alert.propTypes = {
	checkVariationValue: ({ info, danger, success, warning, dark }) => {
		const count =
			Number(!!info) +
			Number(!!danger) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!dark);

		if (count > 1) {
			return new Error(
				"You can only use one of the five states (info, danger, success, warning or dark)."
			);
		}
	},
};

export default Alert;
