import { Card, Typography } from "@mui/material";
import { HeaderProps } from "@/lib/types";
export default function Header({ children, variant = "h1", bold = true, uppercase = true, color }: HeaderProps) {
	return (
		<Card variant="outlined" sx={{background: 'transparent', backdropFilter: 'blur(8px)'}}>
			<Typography
				color={color}
				variant={variant}
				sx={{ fontFamily: "var(--font-barlow)", ...(bold ? { fontWeight: 600 } : null), ...(uppercase ? { textTransform: "uppercase" } : null), textAlign: "center" }}>
				{children}
			</Typography>
		</Card>
	);
}
