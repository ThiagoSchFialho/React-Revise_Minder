import React from 'react';
import { leapfrog } from 'ldrs';
import { useTheme } from '../../contexts/ThemeContext';
import {
    LoadingContainer
} from './styles';

leapfrog.register()

const Loading: React.FC = () => {
    const { theme } = useTheme();

    return (
        <LoadingContainer>
            <l-leapfrog
                size="40"
                speed="2.5" 
                color={theme === 'dark' ? "white" : "#171823"} 
            ></l-leapfrog>
        </LoadingContainer>
    )
}

export default Loading;