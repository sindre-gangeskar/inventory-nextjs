"use client";
import { useColorScheme } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function ThemeToggler() {
	const { mode, setMode } = useColorScheme();

	const toggle = () => {
    if (mode === 'light')
      setMode('dark');
    else setMode('light');
	};


	return (
    <Button
      sx={{ borderRadius: '2rem' }}
      variant={'contained'}
      color='secondary'
			onClick={toggle}>
			{mode}
		</Button>
	);
}
