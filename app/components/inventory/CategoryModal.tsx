"use client";
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { createCategory } from "@/app/inventory/actions";
import { useState } from "react";
export default function CategoryModal({ open, toggleOpen }: { open: boolean; toggleOpen: () => void }) {
	const [statusMessage, setStatusMessage] = useState<string | null>(null);
	const [status, setStatus] = useState<string | null>(null);

	return (
		<Dialog open={open} onClose={toggleOpen} fullWidth>
			<DialogTitle>Add a new category</DialogTitle>
			<form
				action={async (formdata: FormData) => {
					const result = await createCategory(formdata);
					setStatusMessage(result.message);
					setStatus(result.status);
					if (result.status == "success") toggleOpen();
				}}>
				<DialogContent>
					<DialogContentText>Add a new category to your inventory</DialogContentText>
					{statusMessage && status === "fail" ? <Typography color={"error"}>{statusMessage}</Typography> : null}
					<TextField autoFocus required margin="dense" id="name" name="name" label="Name for category" type="text" fullWidth></TextField>
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
