import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function Overview() {
	return (
		<Card sx={{width: {sm: '300px', md: '600px', lg: '1200px'}}}>
			<CardHeader title="Inventory Dashboard"></CardHeader>
			<CardContent>
				<Typography>Total In Inventory: 0</Typography>
			</CardContent>
		</Card>
	);
}
