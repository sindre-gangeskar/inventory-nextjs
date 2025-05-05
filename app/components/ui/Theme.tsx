"use client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { extendTheme } from "@mui/material";
import { lightBlue, blue } from "@mui/material/colors";
import { useState, useEffect } from "react";
interface Props {
	children: React.ReactNode;
}

export default function Theme({ children }: Props) {
	  const theme = extendTheme({
	cssVarPrefix: "mui", // Optional: Prefix for CSS variables
	colorSchemeSelector: "class", // Apply CSS variables to the <body> element
	colorSchemes: {
		light: {
			palette: {
				primary: lightBlue,
				background: {
					default: "#ffffff",
				},
			},
		},
		dark: {
			palette: {
				primary: blue,
				background: {
					default: "#121212",
				},
			},
		},
	},
});
	const [hydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);
	}, []);

	if (!hydrated) return null;

	return (
		<ThemeProvider theme={theme} defaultMode="dark" modeStorageKey="mui-mode">
			<CssBaseline>{children}</CssBaseline>
		</ThemeProvider>
	);
}
