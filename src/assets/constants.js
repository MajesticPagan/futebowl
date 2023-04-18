import {
	FaHome,
	FaFutbol,
	FaThList,
	FaAdjust,
	FaCalendarAlt,
	FaNewspaper,
	FaPeopleArrows,
} from "react-icons/fa";

const sidebarLinks = [
	{ to: "/", title: "Início", icon: FaHome },
	{ to: "/competitions", title: "Competições", icon: FaFutbol },
];

const compLinks = [
	{ to: "", title: "Classificação", icon: FaThList },
	{ to: "results", title: "Resultados", icon: FaAdjust },
	{ to: "fixtures", title: "Jornadas", icon: FaCalendarAlt },
	{ to: "news", title: "Notícias", icon: FaNewspaper },
	{ to: "transfers", title: "Transferências", icon: FaPeopleArrows },
];

export { sidebarLinks, compLinks };
