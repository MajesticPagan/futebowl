import PropTypes from "prop-types";
import classNames from "classnames";

const Card = ({ children, hover, ...rest }) => {
	const cardClassName = classNames(
		"p-6 rounded border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 animate-slowfade",
		rest.className,
		{
			"hover:bg-gray-100 dark:hover:bg-gray-700": hover,
		}
	);

	return (
		<div {...rest} className={cardClassName}>
			{children}
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Card;
