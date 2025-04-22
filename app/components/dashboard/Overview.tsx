import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function Overview() {
	return (
		<Card>
			<CardHeader title="Inventory Dashboard"></CardHeader>
			<CardContent>
				<Typography>Total In Inventory: 0</Typography>
			</CardContent>
		</Card>
	);
}
