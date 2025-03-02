import React from 'react';
import { MdError } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import {
    Container,
    Message
} from './styles';

interface FeedBackProps {
    type: string
    message: string
}

const FeedBack: React.FC<FeedBackProps> = ({ type, message }) => {
    return (
        <Container $type={type}>
            {type === 'bad' ? (
                <MdError color='#A30000' size={30}/>
            ) : (
                <FaCircleCheck color='#006B45' size={30}/>
            )}
            <Message $type={type}>{message}</Message>
        </Container>
    )
}

export default FeedBack