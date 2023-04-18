import Card from "./Card";

const ResultCard = ({ match }) => {
	return (
		<Card hover className="flex items-center gap-4 text-sm 2xl:text-base">
			<div className="w-full text-center">
				<img
					className="w-8 h-8 mx-auto mb-2"
					src={match?.homeLogo}
					alt={`Emblema do ${match?.homeTeam}`}
				/>
				<span>{match?.homeTeam}</span>
			</div>
			<div className="min-w-[80px] p-2 bg-gray-700 border border-gray-600 rounded text-center relative">
				{match?.MatchDay ? (
					<span className="w-full block text-xs mb-2">{match?.MatchDay}</span>
				) : (
					""
				)}
				<span className="text-lg tracking-wider font-bold">{`${
					match?.homeTeamScore || "-"
				} : ${match?.awayTeamScore || "-"}`}</span>
			</div>
			<div className="w-full text-center">
				<img
					className="w-8 h-8 mx-auto mb-2"
					src={match?.awayLogo}
					alt={`Emblema do ${match?.awayTeam}`}
				/>
				<span>{match?.awayTeam}</span>
			</div>
		</Card>
	);
};

export default ResultCard;
