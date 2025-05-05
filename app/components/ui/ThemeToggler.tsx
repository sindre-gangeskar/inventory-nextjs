"use client";
import { useColorScheme } from "@mui/material/styles";
import { Button } from "@mui/material";

import { Brightness1, Brightness3 } from "@mui/icons-material";

export default function ThemeToggler() {
	const { mode, setMode } = useColorScheme();

	const toggle = () => {
		if (mode === "light") setMode("dark");
		else setMode("light");
	};

	return (
		<Button sx={{ borderRadius: "2rem" }} variant={"contained"} color="inherit" onClick={toggle}>
			{mode === 'light' ? <Brightness3/> : <Brightness1/>}
		</Button>
	);
}
