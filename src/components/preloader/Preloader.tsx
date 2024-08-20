import './Preloader.scss';
import {Box, CircularProgress} from "@mui/material";

function Preloader(size: number = 40) {
    return <Box sx={{display: 'flex'}}>
        <CircularProgress size={size} classes={{circle: 'preloader'}}/>
    </Box>
}

export default Preloader;