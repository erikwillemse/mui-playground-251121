import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "left",
	color: theme.palette.text.secondary
}));

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Item sx={{ textAlign: "right" }}>CLOSE MODAL</Item>
				</Grid>
				<Grid item xs={12}>
					<Item sx={{ textAlign: "center" }}>SEARCH BOX</Item>
				</Grid>
				<Grid item xs={12}>
					<Item sx={{ textAlign: "left" }}>TABS</Item>
				</Grid>
				<Grid item xs={12}>
					<Item sx={{ textAlign: "center" }}>FOOTER</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
