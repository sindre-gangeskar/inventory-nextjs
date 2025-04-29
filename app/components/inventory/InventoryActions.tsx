"use client";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import { useState } from "react";
import { Card, CardContent, CardActions, Button, Stack, Typography } from "@mui/material";
import InventoryModal from "./InventoryModal";
import CategoryModal from "./CategoryModal";
export default function InventoryActions() {
	const [open, setOpen] = useState(false);
	const [openCategoryModal, setOpenCategoryModal] = useState(false);
	const toggleOpen = () => {
		setOpen(prev => !prev);
	};

	const toggleCategoryModal = () => {
		setOpenCategoryModal(prev => !prev);
	};

	return (
		<>
			<Card variant="outlined" sx={{ mt: 10 }}>
				<CardContent>
					<Stack direction={"column"}>
						<Typography variant="h2" textAlign={"center"}>
							Inventory Overview
						</Typography>
						<CardActions>
							<Button onClick={toggleOpen} variant="contained" startIcon={<AddCircleOutlineRounded />}>
								Add An Item
							</Button>
							<Button onClick={toggleCategoryModal} variant="contained" startIcon={<AddCircleOutlineRounded />}>
								Add A Category
							</Button>
						</CardActions>
					</Stack>
				</CardContent>
			</Card>
			<InventoryModal toggleOpen={toggleOpen} open={open} />
			<CategoryModal toggleOpen={toggleCategoryModal} open={openCategoryModal} />
		</>
	);
}
