import { Typography } from "@mui/material";
import Overview from "./components/dashboard/Overview";
export default function Home() {
	return (
		<Typography variant="h4" mx={"auto"} textAlign={"center"} sx={{ m: "auto", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      <Overview/>
		</Typography>
	);
}
