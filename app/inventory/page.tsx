import { Stack } from "@mui/material";
import { Suspense } from "react";
import InventorySkeleton from "./skeleton/InventorySkeleton";
import InventoryList from "../components/inventory/InventoryList";
import InventoryActions from "../components/inventory/InventoryActions";

export default function Page() {
	return (
    <>
      <InventoryActions/>
			<Stack>
				<Suspense fallback={<InventorySkeleton />}>
					<InventoryList />
				</Suspense>
			</Stack>
		</>
	);
}
