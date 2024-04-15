import {Box} from "@mui/material";
import LogoutButton from "./LogoutButton.jsx";
import HelloMessage from "./HelloMessage.jsx";

interface UserProps {
    handleLogout: () => void;
    username: string;
}

const User = ({handleLogout, username}: UserProps) => {
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