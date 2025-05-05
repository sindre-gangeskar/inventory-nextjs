import { TypographyOwnProps } from "@mui/material";
export interface ItemProps {
	id: number;
	name: string;
	categoryId: number;
	Category: { id: number; name: string };
}

export interface LocationProps {
	title: string;
	description?: string;
	href: string;
	icon?: React.ReactNode;
}

export interface HeaderProps extends TypographyOwnProps {
	bold?: boolean;
	uppercase?: boolean
}
