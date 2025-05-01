"use server";
import { CategoryService } from "@/lib/services/CategoryService";
import ItemService from "@/lib/services/ItemService";
import { revalidatePath } from "next/cache";
export async function fetchInventory() {
	return await ItemService.findAll();
}

export async function findItem(id: number) {
	return await ItemService.findOne(id);
}

export async function createItem(formdata: FormData) {
	const name = formdata.get("name") as string;
	const categoryId = formdata.get("categoryId") as string;
	revalidatePath("/inventory");
	return await ItemService.create(name, +categoryId);
}

export async function createCategory(formdata: FormData) {
	const name = formdata.get("name") as string;
	revalidatePath("/inventory");
	return await CategoryService.create(name);
}

export async function deleteItem(formdata: FormData) {
	const id = formdata.get("id") as string;
	const result = await ItemService.delete(+id);
	revalidatePath("/inventory"); 
	return result;
}
