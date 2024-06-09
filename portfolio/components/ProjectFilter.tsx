"use client";

import { useEffect } from "react";

interface ProjectFilterProps {
	projects: Project[];
	setFiltered: React.Dispatch<React.SetStateAction<Project[]>>;
	activeCategory: string;
	setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
	projects,
	setFiltered,
	activeCategory,
	setActiveCategory,
}) => {
	useEffect(() => {
		if (activeCategory === "all") {
			setFiltered(projects);
			return;
		}

		const filtered = projects.filter((project) =>
			project.category?.includes(activeCategory)
		);
		setFiltered(filtered);
	}, [activeCategory]);

	return (
		<div className="flex gap-5 my-10">
			<button
				className={
					activeCategory == "all"
						? `bg-pale-azure py-1 px-3 text-white rounded-lg `
						: ""
				}
				onClick={() => setActiveCategory("all")}
			>
				All
			</button>

			<button
				className={
					activeCategory == "all"
						? `bg-pale-azure py-1 px-3 text-white rounded-lg `
						: ""
				}
				onClick={() => setActiveCategory("fullstack")}
			>
				Full Stack
			</button>
			<button
				className={
					activeCategory == "all"
						? `bg-pale-azure py-1 px-3 text-white rounded-lg `
						: ""
				}
				onClick={() => setActiveCategory("frontend")}
			>
				React
			</button>

			<button
				className={
					activeCategory == "all"
						? `bg-pale-azure py-1 px-3 text-white rounded-lg `
						: ""
				}
				onClick={() => setActiveCategory("HTML/CSS/JS")}
			>
				HTML/CSS/JS
			</button>

			<button
				className={
					activeCategory == "all"
						? `bg-pale-azure py-1 px-3 text-white rounded-lg `
						: ""
				}
				onClick={() => setActiveCategory("HTML/CSS/JS")}
			>
				Vanilla
			</button>
		</div>
	);
};

export default ProjectFilter;
