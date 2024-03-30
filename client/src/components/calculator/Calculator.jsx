import {useDispatch, useSelector} from "react-redux";
import {Box, Stack} from "@mui/material";
import Display from "./Display.jsx";
import ResetButton from "./ResetButton.jsx";
import CalculatorInterface from "./CalculatorInterface.jsx";
import {calculatorActions} from "../../redux/calculatorSlice.jsx";

const Calculator = () => {
    const MAX_HISTORY_SIZE = 20;
    const dispatch = useDispatch();
    const history = useSelector(state => state.calculator.history);
    const expression = useSelector(state => state.calculator.expression);
    const WIDTH = 350; //calculator width in pixels
    const ERROR_EXPRESSION = 'Invalid expression';

    const addButtonToHistory = (buttonPressed) => {
        const updatedHistory = [...history, buttonPressed];

        if (updatedHistory.length > MAX_HISTORY_SIZE) {
            updatedHistory.shift(); //remove oldest element
        }

        dispatch(calculatorActions.updateHistory(updatedHistory));
    }

    const calculateExpression = () => {
        let result;
        try{
            result = eval(expression);
            if(result === Infinity){
                throw new Error();
            }

            return result.toString();
        }catch (error){
            throw error;
        }
    };

    const handleResetButton = () => {
        dispatch(calculatorActions.resetCalculator());
    }

    const handleButton = (buttonPressed) => {
        //if previous calculation resulted in error, clear the expression
        let newExpression = expression === ERROR_EXPRESSION ? "" : expression;

        if(buttonPressed === '='){
            try{
                newExpression = calculateExpression();

            }catch (error){
                console.log('caught error');
                newExpression = ERROR_EXPRESSION;
            }
        }else{
            newExpression = newExpression + buttonPressed;
        }

        dispatch(calculatorActions.updateExpression(newExpression));
        addButtonToHistory(buttonPressed);
    }

    return (
        <Box height='100%' display='flex' alignItems='center'>
            <Stack justifyContent="center" alignItems="center" boxShadow={3} border={2} padding={3} spacing={2.5}>
                <Display content={expression} width={WIDTH}/>
                <CalculatorInterface handleButton={handleButton} width={WIDTH}/>
                <ResetButton handleOnClick={handleResetButton}/>
            </Stack>
        </Box>
    );
}
export default Calculator;