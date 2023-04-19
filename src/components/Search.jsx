import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
	const [search, setSearch] = useSearchParams();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		onSearch(search.get("title"));
	};

	const handleOnChange = (event) => {
		setSearch({ title: event.target.value });
		onSearch(event.target.value);
	};

	return (
		<form onSubmit={handleOnSubmit} className="mb-4 sm:mb-7">
			<label
				htmlFor="search"
				className="mb-2 text-sm font-medium sr-only text-gray-900 dark:text-white"
			>
				Pesquisar
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<FaSearch
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
					/>
				</div>
				<input
					type="search"
					id="search"
					className="block w-full p-4 pl-11 text-sm rounded border text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:focus:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"
					placeholder="Pesquisar ligas, taças, etc..."
					value={search.get("title") || ""}
					onChange={handleOnChange}
				/>
				<button
					type="submit"
					className=" absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 focus:ring-4 focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
				>
					Pesquisar
				</button>
			</div>
		</form>
	);
};

export default Search;
