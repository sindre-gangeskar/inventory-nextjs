import { List, ListItem, Typography } from "@mui/material";
import { fetchInventory } from "@/app/inventory/actions";
export default async function InventoryList() {
	const inventory = await fetchInventory();

	return (
		<List>
			{inventory.length === 0 ? <Typography textAlign={'center'} variant="h6">No products found</Typography> : inventory.map(item => (
				<ListItem key={item.id}>{item.name}</ListItem>
			))}
		</List>
	);
}
