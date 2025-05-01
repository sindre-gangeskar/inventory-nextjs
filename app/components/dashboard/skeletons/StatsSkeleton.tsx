import { Skeleton, Typography } from "@mui/material";

export default function StatsSkeleton() {
	return (
		<Skeleton animation={"wave"} width={"1rem"} height={"1rem"}>
			<Typography textAlign={"center"} m={0} p={0}></Typography>
		</Skeleton>
	);
}
