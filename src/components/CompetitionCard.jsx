import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const CompetitionCard = ({ competition }) => {
	let competitionLink = `/competitions/${competition}`;

	return (
		<Card hover>
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-white truncate">
				<Link to={competitionLink}>{competition}</Link>
			</h5>
			<div className="flex items-center gap-3 mt-5">
				<div className="w-full inline-flex items-end rounded shadow" role="group">
					<Link
						to={`${competitionLink}`}
						className="grow md:grow-0 inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-l focus:z-10 focus:ring-2 bg-blue-600 border-blue-600 text-white hover:bg-blue-700 focus:ring-blue-800"
					>
						Vista Geral
						<FaLongArrowAltRight className="w-4 h-4 ml-2 fill-current" />
					</Link>
					<Link
						to={`${competitionLink}/results`}
						className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-r focus:z-10 focus:ring-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-700 focus:ring-blue-800"
					>
						Resultados
					</Link>
				</div>
			</div>
		</Card>
	);
};

export default CompetitionCard;
