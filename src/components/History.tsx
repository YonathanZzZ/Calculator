import {useDispatch, useSelector} from "react-redux";
import {Box, Button, List, ListItem, ListItemText} from "@mui/material";
import {calculatorActions} from '../redux/calculatorSlice.jsx';
import {RootState} from "../redux/store.tsx";

const History = () => {
    const history = useSelector((state: RootState) => state.calculator.history);
    const dispatch = useDispatch();

    const handleClearHistory = () => {
        dispatch(calculatorActions.updateHistory([]));
    }

    return (
        <Box width="100%" height='100%' display="flex" flexDirection="column">
            <Box flex='1' overflow='auto'>
                <List>
                    {history.map((buttonPressed, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${index + 1}: ${buttonPressed}`}/>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box alignSelf="center" marginBottom={1}>
                <Button onClick={handleClearHistory} disabled={history.length === 0}>Clear History</Button>
            </Box>
        </Box>
    );
}

export default History;