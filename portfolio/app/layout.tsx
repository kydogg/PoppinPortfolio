import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "400", "700", "800"],
});

export const metadata: Metadata = {
	title: "Kyle's Portfolio",
	description:
		"Explore Kyle's Full-Stack Engineer Portfolio showcasing expertise in web development, Next.js, Tailwind CSS, and more. View projects, skills, and contact information.",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<main className="flex flex-row">
					<SideMenu />
					<section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
						<TopMenu />
						{children}
					</section>
				</main>
			</body>
		</html>
	);
}
