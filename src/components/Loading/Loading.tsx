import React from 'react';
import { leapfrog } from 'ldrs';
import {
    LoadingContainer
} from './styles';

leapfrog.register()

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <l-leapfrog
                size="40"
                speed="2.5" 
                color="white" 
            ></l-leapfrog>
        </LoadingContainer>
    )
}

export default Loading;