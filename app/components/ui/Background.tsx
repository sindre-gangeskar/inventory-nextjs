import fs from "fs/promises";
import Image from "next/image";
import { CSSProperties } from "@mui/material";
const style: CSSProperties = {
	width: "100%",
	height: "100%",
  position: "absolute",
  padding: 0,
  margin: 0,
	top: 0,
	left: 0,
	objectFit: "cover",
	zIndex: -1,
};

async function getBackgroundImages() {
	try {
		await fs.access("public/background");
		const imagesArr: string[] = [];
		const directory = await fs.readdir("public/background");
    
    for (const file of directory) imagesArr.push(file);
    
		return imagesArr;
	} catch (error) {
		console.error("public/background does not exist", error);
		return [];
	}
}

export default async function Background() {
	const images = await getBackgroundImages();
	return images.length === 0 || !images ? null : <Image style={style} src={"/background/" + images[0]} width={100} height={100} quality={100} unoptimized alt="background.jpg" />;
}
