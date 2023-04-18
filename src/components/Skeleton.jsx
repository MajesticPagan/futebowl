import classNames from "classnames";
import { Fragment } from "react";

const Skeleton = ({ times, children, className }) => {
	const bones = [];

	const wrapClasses = classNames("animate-pulse", className);

	for (let i = 0; i < times; i++) {
		bones.push(<Fragment key={i}>{children}</Fragment>);
	}

	return (
		<div role="status" className={wrapClasses}>
			{bones}
			<span className="sr-only">A carregar...</span>
		</div>
	);
};

export default Skeleton;
