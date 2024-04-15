import {Box, Button} from "@mui/material";

interface Props{
    value: string;
    handleButton: Function;
}

const CalculatorButton = ({value, handleButton}: Props) => (
    <Box>
        <Button variant='contained' onClick={() => handleButton(value)}>{value}</Button>
    </Box>
);

export default CalculatorButton;