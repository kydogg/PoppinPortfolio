import { AiFillGithub, AiFillYoutube, AiFillEye } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

/**
 * @interface ProjectCardProps
 * @description Defines the properties for the ProjectCard component.
 */
interface ProjectCardProps {
	/**
	 * @property {string} name - The name of the project.
	 */
	name: string;

	/**
	 * @property {string} githubUrl - URL to the project's GitHub repository.
	 */
	githubUrl: string;

	/**
	 * @property {string} image - URL of the project's image.
	 */
	image: string;

	/**
	 * @property {boolean} YouTube - Indicates whether the project has a YouTube demo.
	 */
	YouTube: boolean;

	/**
	 * @property {boolean} deployed - Indicates whether the project is deployed.
	 */
	deployed: boolean;

	/**
	 * @property {string} [youtubeUrl] - Optional URL to the project's YouTube video.
	 */
	youtubeUrl?: string;

	/**
	 * @property {string} [projectUrl] - Optional URL to the deployed project.
	 */
	projectUrl?: string;
}

/**
 * @function ProjectCard
 * @description A component that displays project information including GitHub link, deployment status, and optional YouTube link.
 * @param {ProjectCardProps} props - Props for the ProjectCard component.
 * @returns {React.FC<ProjectCardProps>} React Functional Component.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	githubUrl,
	image,
	YouTube,
	deployed,
	youtubeUrl,
	projectUrl,
}) => {
	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className="mb-4 p-4 border border-gray-200 rounded-lg shadow-md bg-light-bg"
		>
			{/* Project Image */}
			<img
				src={image}
				alt={`${name} Image`}
				className="w-full h-auto mb-2 rounded"
			/>

			{/* Project Name */}
			<h3>{name}</h3>

			{/* Project Links */}
			<div className="flex gap-2 items-center w-full">
				{/* GitHub Link */}
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-dark-blue p-1 rounded-full text-xl"
				>
					<Image
						src="/assets/git.svg.png"
						width={20}
						height={20}
						alt="GitHub"
					/>
				</a>

				{/* YouTube Link, shown only if YouTube is true and youtubeUrl is provided */}
				{YouTube && youtubeUrl ? (
					<a
						href={youtubeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-dark-blue hover:underline text-2xl"
					>
						<AiFillYoutube />
					</a>
				) : null}

				{/* Project Deployment Link, shown only if deployed is true and projectUrl is provided */}
				{deployed && projectUrl ? (
					<a
						href={projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-dark-blue hover:underline text-2xl"
					>
						<AiFillEye />
					</a>
				) : null}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
