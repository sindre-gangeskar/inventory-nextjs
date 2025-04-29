"use client";
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { createItem } from "@/app/inventory/actions";
import { useState } from "react";
export default function InventoryModal({ open, toggleOpen }: { open: boolean; toggleOpen: () => void }) {
	const [statusMessage, setStatusMessage] = useState<string | null>(null);
	const [status, setStatus] = useState<string | null>(null);

	return (
		<Dialog open={open} onClose={toggleOpen} fullWidth>
			<DialogTitle>Add an item</DialogTitle>
			<form
				action={async (formdata: FormData) => {
					const result = await createItem(formdata);
					setStatusMessage(result.message);
					setStatus(result.status);
					if (result.status === "success") {
						toggleOpen();
					}
				}}>
				<DialogContent>
					<DialogContentText>Add a new item to your inventory</DialogContentText>
					{statusMessage && status !== "success" ? <Typography color={"error"}>{statusMessage}</Typography> : null}
					<TextField autoFocus required margin="dense" id="name" name="name" label="Name for item" type="text" fullWidth></TextField>
					<TextField required margin="dense" id="categoryId" name="categoryId" label="Category ID for item" type="text" fullWidth></TextField>
				</DialogContent>
				<DialogActions>
					<Button type="reset" onClick={toggleOpen}>
						Cancel
					</Button>
					<Button type="submit">Submit</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}
