import classNames from "classnames";

const Toggle = ({ className, onToggle, title, checked }) => {
	const toggleClassName = classNames(
		"relative inline-flex items-center cursor-pointer",
		className
	);

	return (
		<label className={toggleClassName}>
			<input type="checkbox" className="sr-only peer" onClick={onToggle} defaultChecked={checked} />
			<div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 relative"></div>
			{title && (
				<span className="text-sm ml-3 font-medium text-gray-900 dark:text-gray-300">
					{title}
				</span>
			)}
		</label>
	);
};

export default Toggle;
