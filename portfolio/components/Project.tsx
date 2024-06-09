"use client";
import { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

const Project = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [filtered, setFiltered] = useState<Project[]>([]);
	const [visibleProjects, setVisibleProjects] = useState(9);

	useEffect(() => {
		setFiltered(projects);
	}, []);

	const loadMoreProjects = () => {
		setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
	};

	return (
		<div
			className="w-full h-fit px-[40px] max-xs:px-[20px] relative bg-white"
			id="projects"
		>
			<div className="max-w-[1250px] m-auto">
				<div className="max-w-[1250px] mx-auto">
					<div className="inline-block">
						<p className="section-title">
							<span className="mb-1">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 0 L16 8 L8 16 L0 8 L8 0Z"
										fill="currentColor"
									></path>
								</svg>
							</span>
							Projects
						</p>
					</div>
					<ProjectFilter
						projects={projects}
						setFiltered={setFiltered}
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{filtered.slice(0, visibleProjects).map((project) => (
							<ProjectCard
								key={project.id}
								name={project.name}
								githubURL={project.githubURL}
								deploymentURL={project.deploymentURL}
								deployed={project.deployed}
								category={project.category}
								imageURL={project.imageURL}
							/>
						))}
					</div>
					{visibleProjects < filtered.length && (
						<button
							className="bg-pale-azure hover:bg-pale-azure/75 px-4 text-white rounded-lg"
							onClick={loadMoreProjects}
						>
							Show More
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
