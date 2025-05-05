import { Skeleton, Typography } from "@mui/material";

export default function StatsSkeleton() {
	return (
		<Skeleton animation={"wave"} width={20} sx={{aspectRatio: 1/1}}>
			<Typography textAlign={"center"} fontSize={'1.5rem'}></Typography>
		</Skeleton>
	);
}
