import React from "react";
import Button from '@mui/material/Button';
import { List, ListItem, ListItemText } from "@mui/material";

export default class Mui2 extends React.Component{
    render(){
        return(
            <div>
                <Button 
                    variant="contained" 
                    color="error"
                >
                    hello
                </Button>

                <List>
                    <ListItem 
                        button={true}
                        dense={true}
                        selected={true}
                    >
                        <ListItemText 
                            primary="React JS"
                            secondary="created by FBs"
                        />
                    </ListItem>
                </List>
            </div>
        )
    }
}