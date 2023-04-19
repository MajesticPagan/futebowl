import { useOutletContext } from "react-router-dom";
import { useGetCompetitionNewsQuery } from "../../store/services/footballApi";

import { Error, Skeleton, Card, Alert } from "../../components";

const CompetitionNews = () => {
	const { compId } = useOutletContext();
	const { data, error, isFetching } = useGetCompetitionNewsQuery(compId);

	if (isFetching) {
		return (
			<Skeleton
				times={8}
				className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-7"
			>
				<div className="p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded shadow">
					<div className="flex items-center justify-center h-48 mb-4 bg-gray-200 dark:bg-gray-700 rounded">
						<svg
							className="w-12 h-12 text-gray-100 dark:text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 640 512"
						>
							<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
						</svg>
					</div>
					<div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2.5"></div>
					<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2.5"></div>
					<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
					<div className="flex items-center mt-4 space-x-3">
						<svg
							className="text-gray-200 dark:text-gray-700 w-14 h-14"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
								clipRule="evenodd"
							></path>
						</svg>
						<div>
							<div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-32 mb-2"></div>
							<div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
						</div>
					</div>
				</div>
			</Skeleton>
		);
	}

	if (error) return <Error />;

	if (data?.length > 0) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-7">
				{data?.map((item) => (
					<Card hover key={item.Title}>
						<a
							href={item.NewsLink}
							target="_blank"
							className="rounded overflow-hidden flex h-48"
						>
							<img
								className="w-full h-full object-cover"
								src={item.Image}
								alt={`Imagem para o artigo ${item.Title}`}
							/>
						</a>
						<div className="mt-6">
							<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href={item.NewsLink} target="_blank">
									{item.Title}
								</a>
							</h5>
							<p className="mb-6 font-normal text-gray-500 dark:text-gray-400">{item.PublisherName}</p>
							<a
								href={item.NewsLink}
								className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center rounded text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
							>
								Ler mais
							</a>
						</div>
					</Card>
				))}
			</div>
		);
	}

	return <Alert dark title="Não existem notícias." />;
};

export default CompetitionNews;
