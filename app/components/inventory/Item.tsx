"use client";
import { Button } from "@mui/material";
import { ItemProps } from "@/lib/types";
import { useState } from "react";
import { Delete } from "@mui/icons-material";
import DeleteItemModal from "./DeleteItemModal";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
export default function Item({ item }: { item: ItemProps }) {
	const [deleteOpen, setDeleteOpen] = useState(false);
	const toggleDeleteOpen = () => {
		setDeleteOpen(prev => !prev);
	};
	return (
		<>
			<DeleteItemModal open={deleteOpen} item={item} toggleOpen={toggleDeleteOpen} />
			<TableRow>
				<TableCell>{item.name}</TableCell>
				<TableCell>{item.Category.name}</TableCell>
				<TableCell>
					<Button size="small" type="button" color="error" onClick={toggleDeleteOpen}>
						<Delete />
					</Button>
				</TableCell>
			</TableRow>
		</>
	);
}
