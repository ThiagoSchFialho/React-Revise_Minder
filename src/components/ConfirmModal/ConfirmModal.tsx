import React from 'react';
import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
    ModalMessage,
    ButtonContainer,
    CancelButton,
    Button
} from './styles';

interface ConfirmModalProps {
    title?: string
    message: string
    onConfirm: () => void
    onCancel: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ title, message, onConfirm, onCancel }) => {
    return (
      <ModalOverlay>
        <ModalContainer>
          {title && (
            <ModalTitle>{title}</ModalTitle>
          )}
          <ModalMessage>{message}</ModalMessage>
          <ButtonContainer>
            <CancelButton onClick={onCancel}>Cancelar</CancelButton>
            <Button onClick={onConfirm}>Confirmar</Button>
          </ButtonContainer>
        </ModalContainer>
      </ModalOverlay>
    );
  };
  
  export default ConfirmModal;