import {Box, Button} from "@mui/material";

const CalculatorButton = ({value, handleButton}) => (
    <Box>
        <Button variant='contained' onClick={() => handleButton(value)}>{value}</Button>
    </Box>
);

export default CalculatorButton;