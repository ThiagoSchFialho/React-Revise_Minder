import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import {
    MainContainer
} from './styles'

const Dashboard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <h1>Dashboard</h1>
            </MainContainer>
        </>
    )
}

export default Dashboard