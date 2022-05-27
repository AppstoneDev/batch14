import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Icon, IconButton } from "@mui/material";

export default class MyBox extends React.Component {
  render() {
    return (
      <div 
        sx={{
          bgcolor: "red",
        }}
      >
        <TextField />
        <TextField />

        <IconButton>
          <Icon>
            timer
          </Icon>
        </IconButton>

        <Avatar color="primary">
          A
        </Avatar>
      </div>
    )
  }
}