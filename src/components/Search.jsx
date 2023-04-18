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
			<label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">
				Pesquisar
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<FaSearch className="w-5 h-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-full p-4 pl-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
					placeholder="Pesquisar ligas, taças, etc..."
					value={search.get("title") || ""}
					onChange={handleOnChange}
				/>
				<button
					type="submit"
					className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2"
				>
					Pesquisar
				</button>
			</div>
		</form>
	);
};

export default Search;
