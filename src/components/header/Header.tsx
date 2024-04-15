import {AppBar, Grid, Toolbar} from "@mui/material";
import Tabs from "./tabs/Tabs.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import User from "./User.jsx";
import {userActions} from "../../redux/userSlice.jsx";
import {RootState} from "../../redux/store.tsx";

const Header = () => {
    const username = useSelector((state: RootState) => state.user.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(userActions.logout());
        navigate('/login');
    };

    return (
        <AppBar position="sticky">
            <Toolbar>

                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={4}><Tabs/></Grid>
                    <Grid item xs={4}/> {/* empty space */}
                    <Grid item xs={4}><User handleLogout={handleLogout} username={username}/></Grid>
                </Grid>

            </Toolbar>


        </AppBar>
    )
}

export default Header;