import { Avatar, Box, Container, Grid, IconButton, List, ListItemAvatar, ListItemButton, ListItemText, Modal, TextField } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { friends } from './data';
import { ChangeEvent, useState } from "react";
import FriendAdd from "./components/FriendAdd";

const Friends = (): JSX.Element => {
    const [friendsList, setFriendsList] = useState(friends);
    const [isFriendAddOpened, setIsFriendAddOpened] = useState<boolean>(false);

    const friendNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        findFriends(event.currentTarget.value);
    };

    const findFriends = (inputName: string) => {
        if (inputName) {
            const filtered = friends.filter((friend) => friend.name.includes(inputName));
            setFriendsList(filtered);
        } else {
            setFriendsList(friends);
        }
    };

    const openFriendAddModal = () => {
        setIsFriendAddOpened(true);
    };

    const closeFriendAddModal = () => {
        setIsFriendAddOpened(false);
    };

    return (
        <Container>
            <Modal open={isFriendAddOpened} onClose={closeFriendAddModal}>
                <FriendAdd />
            </Modal>
            <Box>
                <Grid container>
                    <Grid item xs={10}>
                        <TextField
                            label="친구 검색"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            onChange={friendNameChanged} />
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ p: "10px" }}>
                            <IconButton color="primary" size="large" onClick={openFriendAddModal}>
                                <PersonAddIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <List>
                {friendsList.map((friend) => {
                    return (
                        <ListItemButton key={friend.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={friend.name} secondary={friend.statusMessage} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Container>
    );
};

export default Friends;