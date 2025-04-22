"use client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import { useState, useEffect } from "react";
interface Props {
	children: React.ReactNode;
}

export default function Theme({ children }: Props) {
	const theme = createTheme({ colorSchemes: { dark: true }});
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
