import './App.css';
import { Tabs, Tab, Paper, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from 'react';
import Friends from './pages/Friends';

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>('friend');

  const changeTab = (currentTab: string) => {
    setCurrentTab(currentTab);
  }

  return (
    <div className="App">
      <Box
        sx={{ pb: 7 }}>
        {currentTab === 'friend' && <Friends />}
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <Tabs
          centered
          variant='fullWidth'
          value={currentTab}>
          <Tab
            value={'friend'}
            icon={<PeopleIcon />}
            label='친구'
            onClick={() => changeTab('friend')} />
          <Tab
            value={'chat'}
            icon={<ChatIcon />}
            label='채팅'
            onClick={() => changeTab('chat')} />
        </Tabs>
      </Paper>
    </div >
  );
}

export default App;
