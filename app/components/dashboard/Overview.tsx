import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Stats from "./Stats";
import { Suspense } from "react";
import StatsSkeleton from "./skeletons/StatsSkeleton";
import { Paper } from "@mui/material";
export default function Overview() {
	return (
		<Paper elevation={20}>
			<Card sx={{ width: { sm: "300px", md: "600px", lg: "1200px", height: "150px" } }}>
				<CardHeader title="Inventory Dashboard"></CardHeader>
				<CardContent sx={{ py: 0, my: 2 }}>
					<Box component={"span"} display={"flex"} sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}>
						<Typography m={0} p={0}>Total items in inventory:</Typography>
						<Suspense fallback={<StatsSkeleton />}>
							<Typography m={0} p={0}>
								<Stats />
							</Typography>
						</Suspense>
					</Box>
				</CardContent>
			</Card>
		</Paper>
	);
}
