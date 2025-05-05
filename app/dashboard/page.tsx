import { Typography, Stack, Box } from "@mui/material";
import Stats from "../components/dashboard/Stats";
import { Inventory2Outlined, CategoryRounded } from "@mui/icons-material";
import { Suspense } from "react";
import StatsSkeleton from "../components/dashboard/skeletons/StatsSkeleton";
import { LocationProps } from "@/lib/types";
import Tile from "../components/dashboard/Tile";
import { SxProps } from "@mui/material";
import Header from "../components/ui/Header";
export default function Overview() {
	const iconStyles: SxProps = {
		width: "100%",
		height: "100%",
		position: "absolute",
		left: "50%",
		top: "50%",
		p: 0,
		m: 0,
		transform: "translate(-50%, -50%) scale(100%)",
		transition: "250ms ease",
		zIndex: -1,
		opacity: 0.1,
		filter: "blur(2px)",
		"&:hover": {
			transform: "translate(-50%, -50%) scale(125%)",
			opacity: 0.3,
			filter: "blur(0px)",
		},
	};

	const locations: LocationProps[] = [
		{ title: "Inventory Management", description: "View all inventory", href: "/inventory", icon: <Inventory2Outlined key={1} sx={iconStyles} /> },
		{ title: "Category Management", description: "Manage categories", href: "/categories", icon: <CategoryRounded key={2} sx={iconStyles} /> },
	];
	return (
		<>
			<Header>Inventorium</Header>
			<Stack sx={{ mx: "auto", width: "100%" }}>
				<Stack component={"span"} display={"flex"} flexDirection={"row"} sx={{ justifyContent: "center", alignItems: "center", gap: 1, justifyItems: "center" }}>
					<Inventory2Outlined color="success" sx={{ fontSize: "1.5rem" }} />
					<Suspense fallback={<StatsSkeleton />}>
						<Typography color="success" sx={{ fontSize: "1.5rem" }}>
							<Stats />
						</Typography>
					</Suspense>
				</Stack>
				<Box
					mt={5}
					p={5}
					sx={{
						height: "500px",
						width: "100%",
						backdropFilter: "blur(8px)",
						display: "grid",
						gap: { xs: 15 },
						justifyContent: "center",
						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 0fr))",
						zIndex: 1,
						position: "relative",
						alignItems: "center",
					}}>
					{locations.map((x, index) => (
						<Tile key={index} title={x.title} description={x.description} href={x.href} icon={x.icon}></Tile>
					))}
				</Box>
			</Stack>
		</>
	);
}
