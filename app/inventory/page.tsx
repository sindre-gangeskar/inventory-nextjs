import { Stack, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import { Suspense } from "react";
import InventorySkeleton from "./skeleton/InventorySkeleton";
import InventoryList from "../components/inventory/InventoryList";
import { AddCircleOutlineRounded } from "@mui/icons-material";
export default async function Page() {
	return (
		<>
			<Card variant="outlined" sx={{mt: 10}}>
				<CardContent>
					<Stack direction={"column"}>
						<Typography variant="h2" textAlign={"center"}>
							Inventory Overview
						</Typography>
						<CardActions>
							<Button variant="contained" startIcon={<AddCircleOutlineRounded/>}>Add An Item</Button>
						</CardActions>
					</Stack>
				</CardContent>
			</Card>
			<Stack>
				<Suspense fallback={<InventorySkeleton />}>
					<InventoryList />
				</Suspense>
			</Stack>
		</>
	);
}
