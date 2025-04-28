"use server";
import ItemService from "@/lib/services/ItemService";

export async function fetchInventory() {
	return await ItemService.findAll();
}

export async function findItem(id: number) {
	return await ItemService.findOne(id);
}

export async function createItem(name: string, categoryId: number) {
	return await ItemService.create(name, categoryId);
}
