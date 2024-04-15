import Header from "./header/Header.jsx";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
const MainPage = () => {

    return(
        <Stack direction="column" spacing={1} alignItems="center" height='100%'>
            <Header />
            <Outlet /> {/*render nested routes*/}
        </Stack>
    )
}

export default MainPage;