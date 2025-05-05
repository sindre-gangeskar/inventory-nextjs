"use client";
import { Stack, Button } from "@mui/material";
import Link from "next/link";
import { Dashboard, Inventory } from "@mui/icons-material";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
	const locations = [
		{ to: "/", name: "Dashboard", icon: <Dashboard /> },
		{ to: "/inventory", name: "Inventory", icon: <Inventory /> },
	];

	return (
    <Stack
      direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={2}
			component={"nav"}
			sx={{ width: "100%", height: "fit-content", top: 0, left: 0, position: "sticky", zIndex: 1500, "&:before": { inset: 0, position: "absolute", content: '""', backdropFilter: "blur(8px)" } }}>
			<Stack direction={"row"} sx={{ p: 1 }} gap={2}>
				{locations.map(x => (
					<Button key={x.name} variant="text" startIcon={x.icon} LinkComponent={Link} href={x.to}>
						{x.name}
					</Button>
				))}
      </Stack>
      <Stack sx={{width: 'fit-content'}}>
        <ThemeToggler/>
      </Stack>
		</Stack>
	);
}
