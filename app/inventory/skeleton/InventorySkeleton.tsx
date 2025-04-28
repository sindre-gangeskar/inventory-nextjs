import { List, ListItem, Skeleton } from "@mui/material";

export default function InventorySkeleton() {
	return (
		<List sx={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))', justifyContent: 'center'}}>
			{Array(5)
				.fill(null)
				.map((_, index) => (
					<ListItem key={index}>
						<Skeleton variant="rounded" animation="pulse" width={200} height={200} sx={{aspectRatio: '1/1'}}></Skeleton>
					</ListItem>
				))}
		</List>
	);
}
