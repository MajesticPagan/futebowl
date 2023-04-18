import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="flex flex-col justify-center lg:h-[calc(100vh-3.5rem)]">
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
					Futebowl
				</h1>
				<p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400">
					Acompanhe e verifique <strong className="text-white">todos</strong> os detalhes de <strong className="text-white">todas</strong> as ligas de futebol em todo o mundo. Este website é apenas um projecto pessoal.
				</p>
				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<Link
						to="/competitions/"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900"
					>
						Competições
						<FaLongArrowAltRight className="w-4 h-4 ml-2 fill-current" />
					</Link>
					<Link to="/about/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded border focus:ring-2 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
						Sobre
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Home;
