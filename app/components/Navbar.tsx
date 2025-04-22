"use client";
import { Stack, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
	const locations = [
		{ to: "/", name: "Dashboard" },
		{ to: "/inventory", name: "Inventory" },
	];

	return (
		<Stack component={'nav'} sx={{ width: "100%", height: "fit-content", top: 0, left: 0, position: "sticky", zIndex: 1500, '&:before': {inset: 0, position: 'absolute', content: '""', backdropFilter: 'blur(8px)'} }}>
			<Stack direction={"row"} sx={{p: 1}} gap={2}>
				{locations.map(x => (
					<Button key={x.name} color='inherit' variant='outlined' LinkComponent={Link} href={x.to}>
						{x.name}
					</Button>
				))}
			</Stack>
		</Stack>
	);
}
