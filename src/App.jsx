import { Routes, Route } from "react-router-dom";

import {
	Layout,
	Home,
	Competitions,
	CompetitionDetails,
	CompetitionTable,
	CompetitionResults,
	CompetitionFixtures,
	CompetitionNews,
	CompetitionTransfers,
	NotFound,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="competitions">
					<Route index element={<Competitions />} />
					<Route path=":compId" element={<CompetitionDetails />}>
						<Route index element={<CompetitionTable />} />
						<Route path="results" element={<CompetitionResults />} />
						<Route path="fixtures" element={<CompetitionFixtures />} />
						<Route path="news" element={<CompetitionNews />} />
						<Route path="transfers" element={<CompetitionTransfers />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
