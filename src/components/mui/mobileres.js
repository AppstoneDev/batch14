import { Grid } from "@mui/material";
import React from "react";

export default class MobResponsive extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} md={6} lg={4} style={{ backgroundColor: "red", height: 20 }}>
                    
                </Grid>

                <Grid item xs={12} md={6} lg={4} style={{ backgroundColor: "green", height: 20 }}>

                </Grid>

                <Grid item xs={12} md={6} lg={4} style={{ backgroundColor: "blue", height: 20 }}>

                </Grid>

            </Grid>
        )
    }
}