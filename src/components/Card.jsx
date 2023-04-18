import PropTypes from "prop-types";
import classNames from "classnames";

const Card = ({ children, hover, ...rest }) => {
	const cardClassName = classNames(
		"p-6 bg-gray-800 border border-gray-700 rounded shadow animate-slowfade",
		rest.className,
		{
			"hover:bg-gray-700 hover:border-gray-600": hover,
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
