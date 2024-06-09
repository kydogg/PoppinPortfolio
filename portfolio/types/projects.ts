interface Project {
	id: number;
	name: string;
	githubURL: string;
	deploymentURL: string;
	deployed: boolean;
	category: string;
	imageURL: string;
}

const projects: Project[] = [
	{
		id: 1,
		name: "Netflix Clone",
		githubURL: "https://github.com/yourusername/netflix-clone",
		deploymentURL: "https://netflix-clone.yourdomain.com",
		deployed: true,
		category: "frontend",
		imageURL: "https://path/to/netflix-clone-image.jpg",
	},
	{
		id: 2,
		name: "Twitter Clone",
		githubURL: "https://github.com/yourusername/twitter-clone",
		deploymentURL: "https://twitter-clone.yourdomain.com",
		deployed: true,
		category: "frontend",
		imageURL: "https://path/to/twitter-clone-image.jpg",
	},
	{
		id: 3,
		name: "E-commerce Store",
		githubURL: "https://github.com/yourusername/e-commerce-store",
		deploymentURL: "https://e-commerce.yourdomain.com",
		deployed: false,
		category: "fullstack",
		imageURL: "https://path/to/ecommerce-store-image.jpg",
	},
	{
		id: 4,
		name: "Weather App",
		githubURL: "https://github.com/yourusername/weather-app",
		deploymentURL: "https://weather-app.yourdomain.com",
		deployed: true,
		category: "frontend",
		imageURL: "https://path/to/weather-app-image.jpg",
	},
	{
		id: 5,
		name: "Portfolio Website",
		githubURL: "https://github.com/yourusername/portfolio-website",
		deploymentURL: "https://portfolio.yourdomain.com",
		deployed: true,
		category: "frontend",
		imageURL: "https://path/to/portfolio-website-image.jpg",
	},
];
