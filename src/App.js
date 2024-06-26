import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import DashBoard from './pages/DashBoard';
import PlayerListPage from './pages/PlayerListPage';
import GameMasterView from './pages/GameMasterView';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import theme from './theme'; // Import your custom theme

function App() {
  return (
    <ChakraProvider theme={theme}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/password-reset" element={<PasswordReset />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rooms/:roomID/lobby" element={<PlayerListPage />} />
          <Route path="/rooms/:roomID/GameMasterView" element={<GameMasterView />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;