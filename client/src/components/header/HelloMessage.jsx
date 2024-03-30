import {Box} from "@mui/material";

const HelloMessage = ({username}) => {

    const capitalizeName = (string) => {
        return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
        <Box sx={{whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Hello, {capitalizeName(username)}
        </Box>
    )
}

export default HelloMessage;