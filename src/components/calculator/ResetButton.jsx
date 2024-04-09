import {Box, Button} from "@mui/material";

const ResetButton = ({handleOnClick}) => {
    return(
        <Box justifyContent="center" alignItems="center">
            <Button variant="outlined" onClick={handleOnClick}>
                Reset
            </Button>
        </Box>
    )
}

export default ResetButton;