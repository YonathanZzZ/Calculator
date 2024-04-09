import {Grid} from "@mui/material";
import CalculatorButton from "./CalculatorButton.jsx";

const CalculatorInterface = ({handleButton, width}) => {
    const calculatorButtons = ['7', '8', '9', '*', '4', '5', '6', '/', '1', '2', '3', '+', '0', '', '=', '-'];
    const COLUMNS_IN_ROW = 12; //A property of MUI Grid
    const BUTTONS_IN_ROW = 4;
    const BUTTON_WIDTH = COLUMNS_IN_ROW / BUTTONS_IN_ROW;
    const interfaceWidth = width + 'px';

    return(
        <Grid container justifyContent='center'>
            <Grid container spacing={3} sx={{width: interfaceWidth}}>
                {calculatorButtons.map((value, index) => (
                    <Grid key={index} item xs={BUTTON_WIDTH}
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {value ? (
                            <CalculatorButton value={value} handleButton={handleButton}/>
                        ) : null}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default CalculatorInterface;