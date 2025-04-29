"use client";
import { ListItem, Card, CardContent, Typography } from "@mui/material";
interface ItemProps {
	id: number;
	name: string;
	categoryId: number;
	Category: { id: number; name: string };
}

export default function Item({ item }: { item: ItemProps }) {
	return (
		<ListItem key={item.id} sx={{ width: "100%" }}>
			<Card variant="outlined" sx={theme => ({ width: "100%", backgroundColor: theme.palette.action.focus, borderColor: theme.palette.primary.main })}>
				<CardContent>
					<Typography>Name: {item.name}</Typography>
					<Typography>Category: {item.Category.name}</Typography>
				</CardContent>
			</Card>
		</ListItem>
	);
}
