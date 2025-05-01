"use client";
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useState } from "react";
import { deleteItem } from "@/app/inventory/actions";
import { ItemProps } from "@/lib/types";

export default function DeleteItemModal({ open, toggleOpen, item }: { open: boolean; toggleOpen: () => void; item: ItemProps }) {
	const [statusMessage, setStatusMessage] = useState<string | null>(null);
	const [status, setStatus] = useState<string | null>(null);

	return (
		<Dialog open={open} onClose={toggleOpen} fullWidth>
			<DialogTitle>Are you sure you want to delete this item?</DialogTitle>

			<form
				action={async (formdata: FormData) => {
					const result = await deleteItem(formdata);
					setStatusMessage(result.message);
					setStatus(result.status);
					if (result.status == "success") toggleOpen();
				}}>
				<DialogContent>
					<DialogContentText>Delete {item.name}?</DialogContentText>
					<DialogContentText variant="subtitle2" color="red">
							This action is permanent and cannot be undone
					</DialogContentText>
					{statusMessage && status === "fail" ? <Typography color={"error"}>{statusMessage}</Typography> : null}
					<input type="hidden" name="id" value={item.id}></input>
				</DialogContent>
				<DialogActions>
					<Button type="reset" onClick={toggleOpen}>
						Cancel
					</Button>
					<Button color="error" type="submit">
						Confirm Deletion
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}
