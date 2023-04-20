import { FaLongArrowAltRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="flex flex-col justify-center h-[calc(100vh-3.5rem)]">
			<div className="py-8 md:px-4 mx-auto max-w-screen-xl text-center lg:py-16">
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-gray-900 dark:text-white">
					Futebowl
				</h1>
				<p className="mb-8 text-lg font-normal lg:text-xl md:px-16 xl:px-48 text-gray-500 dark:text-gray-400">
					Acompanhe e verifique{" "}
					<strong className="text-gray-900 dark:text-white">todos</strong> os detalhes de{" "}
					<strong className="text-gray-900 dark:text-white">todas</strong> as ligas de
					futebol em todo o mundo. Este website é apenas um projecto pessoal.
				</p>
				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<Link
						to="/competitions/"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
					>
						Competições
						<FaLongArrowAltRight className="w-4 h-4 ml-2 fill-current" />
					</Link>
					<a
						href="https://github.com/MajesticPagan/futebowl"
						target="_blank"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded border text-gray-900 border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
					>
						GitHub
						<FaGithub className="w-4 h-4 ml-2 fill-current" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
