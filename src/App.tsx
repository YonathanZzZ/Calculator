import './App.css'
import AppRoutes from "./routes/AppRoutes.jsx";
import {Container} from "@mui/material";

function App() {

    return (
        <>
            <Container maxWidth={false} sx={{height: '100%'}}>
                <AppRoutes/>
            </Container>
        </>
    )
}

export default App