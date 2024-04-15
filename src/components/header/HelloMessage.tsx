import {Box} from "@mui/material";

interface HelloMessageProps{
    username: string;
}

const HelloMessage = ({username}: HelloMessageProps) => {

    const capitalizeName = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
        <Box sx={{whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Hello, {capitalizeName(username)}
        </Box>
    )
}

export default HelloMessage;