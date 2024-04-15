import {Box} from "@mui/material";

interface Props{
    content: string;
    width: number;
}

const Display = ({content, width}: Props) => {
    const displayWidth = 0.9 * width + 'px';
    return (
        <Box borderBottom={1} width={displayWidth} display="flex" flexGrow={0} padding={2} height='1em' overflow='auto'>
            {content}
        </Box>
    )
}

export default Display;