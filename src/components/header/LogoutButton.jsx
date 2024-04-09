import {Button} from "@mui/material";
import React from "react";

const LogoutButton = ({onClick}) => {
    const handleOnClick = () => {
        onClick();
    }

    return(
        <Button
            variant='contained'
            onClick={handleOnClick}
            sx={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                minWidth: 'fit-content',
                borderRadius: 0,
            }}
        >
            Logout
        </Button>
    )
}

export default LogoutButton;