"use client";
import { LocationProps } from "@/lib/types";
import { Card, Stack, Typography } from "@mui/material";
import Link from "next/link";
export default function Tile({ title, description, href, icon }: LocationProps) {
	return (
		<Card component={Link} href={href} sx={{ width: "100%", aspectRatio: 1 / 1 }}>
			<Stack textAlign={"center"} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", width: "100%", position: "relative", zIndex: 1 }}>
				<Typography sx={{ pointerEvents: "none" }} variant="overline">
					{title}
				</Typography>
				<Typography sx={{ pointerEvents: "none" }} variant="subtitle1" color="primary">
					{description}
				</Typography>
				{icon ? icon : null}
			</Stack>
		</Card>
	);
}
