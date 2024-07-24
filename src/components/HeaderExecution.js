import React from 'react';
import { Image,
         Heading,
         HStack,   
         Spacer
    } from '@chakra-ui/react';
import whiteLogo from '../assets/mall-logo-white-2.png';
import ResetTargetsButton from './ResetTargetsButton';
const HeaderExecution = ({ roomID, arrayOfAlivePlayers }) => {
    return (  
        <HStack justifyContent = 'left'
                p = '8px'
                h = '100%'
                alignItems = 'center'
        >
            <Image objectFit = 'cover'
                   src = {whiteLogo}
                   alt = 'Logo'
                   boxSize = '36px'
            />
            <Heading>Lobby #: {roomID}</Heading>
            <Spacer />
            <ResetTargetsButton 
                roomID = {roomID}
                arrayOfPlayers = {arrayOfAlivePlayers}
            />
        </HStack>
    );
}
 
export default HeaderExecution;