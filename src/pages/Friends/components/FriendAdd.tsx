import { Box, Container, Grid, IconButton, List, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const FriendAdd = (): JSX.Element => {
    return (
        <Container sx={{ p: 5 }}>
            <Box sx={{ background: "#f3f3f3", p: 3, borderRadius: "10px" }}>
                <Grid container>
                    <Grid item xs={10}>
                        <TextField
                            label="전화번호"
                            fullWidth />
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ p: 1 }}>
                            <IconButton size="large">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <List></List>
            </Box>
        </Container>
    );
};

export default FriendAdd;