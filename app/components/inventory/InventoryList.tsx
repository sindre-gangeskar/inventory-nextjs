import { List, Typography } from "@mui/material";
import { fetchInventory } from "@/app/inventory/actions";
import Item from "./Item";

export default async function InventoryList() {
	const inventory = await fetchInventory();

	return (
		<List sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
			{inventory.length === 0 ? (
				<Typography textAlign={"center"} variant="h6">
					No products found
				</Typography>
			) : (
				inventory.map((item, index) => <Item key={index} item={item} />)
			)}
		</List>
	);
}
