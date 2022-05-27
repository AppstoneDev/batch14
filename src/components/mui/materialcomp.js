import React from "react";
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// Demo component to show material widgets
export default class MaterialComp extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            showDialog: false
        }
    }

    // function to change the value of showDialog to true 
    // and display the Dialog component
    handleClick = () => {
        this.setState({
            showDialog: true
        })
    }

    
    handleClose = () => {
        this.setState({
            showDialog: false
        })
    }

    render(){
        return(
            <div>
                <button>click me</button>
                <Button 
                    variant="contained" 
                    color="error"
                    onClick={this.handleClick}
                >
                    Material Button
                </Button>

                <Dialog
                    open={this.state.showDialog}
                    onClose={this.handleClose}
                >
                    <DialogTitle>
                        Are you sure you want to delete this content? 
                    </DialogTitle>
                    <DialogContent>
                        Please click on okay to confirm delete.
                    </DialogContent>
                    <DialogActions>
                        <Button>
                            Okay
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}