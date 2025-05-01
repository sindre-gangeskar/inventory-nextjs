import { TableCell, TableRow, Table, TableBody, TableHead, TableContainer } from "@mui/material";
import { fetchInventory } from "@/app/inventory/actions";
import { Paper } from "@mui/material";
import Item from "./Item";

export default async function InventoryList() {
	const inventory = await fetchInventory();
	return (
		<Paper elevation={5}>
			<TableContainer sx={{ my: 2 }}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Category</TableCell>
							<TableCell>Options</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{inventory.length === 0 ? (
							<TableRow>
								<TableCell colSpan={100}>No products found</TableCell>
							</TableRow>
						) : (
							inventory.map((item, index) => <Item key={index} item={item} />)
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
