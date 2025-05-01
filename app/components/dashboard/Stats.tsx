import { fetchInventory } from "@/app/inventory/actions";
export default async function Stats() {
	const inventory = await fetchInventory();
	return inventory.length;
}
