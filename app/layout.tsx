import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Barlow } from "next/font/google";
import "./globals.css";
import Theme from "./components/ui/Theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Navbar from "./components/ui/Navbar";
import { Container } from "@mui/material";
import Background from "./components/ui/Background";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const barlow = Barlow({
	variable: "--font-barlow",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Inventorium",
	description: "Manage your personal inventory",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${barlow.variable}`}>
				<InitColorSchemeScript></InitColorSchemeScript>
				<Theme>
					<Navbar />
					<Container>{children}</Container>
					<Background />
				</Theme>
			</body>
		</html>
	);
}
