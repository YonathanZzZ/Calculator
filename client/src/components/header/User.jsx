import {Box} from "@mui/material";
import LogoutButton from "./LogoutButton.jsx";
import HelloMessage from "./HelloMessage.jsx";

const User = ({handleLogout, username}) => {
    return(
        <Box display='flex' justifyContent='right'>
            <Box marginRight={1}>
                <LogoutButton onClick={handleLogout}/>

            </Box>
            <HelloMessage username={username}/>
        </Box>
    )
}

export default User;