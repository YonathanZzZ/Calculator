import {Box, Button} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.tsx";

interface Props{
    handleOnClick: () => void;
}

const ResetButton = ({handleOnClick}: Props) => {
    const expression = useSelector((state: RootState) => state.calculator.expression);

    return(
        <Box justifyContent="center" alignItems="center">
            <Button variant="outlined" onClick={handleOnClick} disabled={!expression}>
                Reset
            </Button>
        </Box>
    )
}

export default ResetButton;