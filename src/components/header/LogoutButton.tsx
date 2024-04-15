import {Button} from "@mui/material";

interface LogoutButtonProps {
    onClick: () => void;
}

const LogoutButton = ({onClick}: LogoutButtonProps) => {
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