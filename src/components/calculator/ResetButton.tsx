import {Box, Button} from "@mui/material";

interface Props{
    handleOnClick: () => void;
}

const ResetButton = ({handleOnClick}: Props) => {
    return(
        <Box justifyContent="center" alignItems="center">
            <Button variant="outlined" onClick={handleOnClick}>
                Reset
            </Button>
        </Box>
    )
}

export default ResetButton;