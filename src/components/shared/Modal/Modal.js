import React, { useEffect, useRef } from 'react';
import {
  CloseIconWrapper,
  Div, ModalContainer, ModalContent, ModalText,
} from './styles';
import SuccessIcon from '../../../Icons/SuccessIcon';
import CloseIcon from '../../../Icons/CloseIcon';
import Button from '../Button/Button';

const Modal = ({ open, setOpen, failed }) => {
  const scrollPos = useRef();

  useEffect(() => {
    if (open) {
      scrollPos.current = {
        x: window.scrollX,
        y: window.scrollY,
      };
    }
  }, [open]);

  const disableScroll = () => {
    window.scrollTo(scrollPos.current.x, scrollPos.current.y);
  };

  useEffect(() => {
    if (open) {
      window.addEventListener('scroll', disableScroll);
    }
    return () => window.removeEventListener('scroll', disableScroll);
  }, [open]);

  const icon = failed ? null : <SuccessIcon />;
  const message = failed
    ? <ModalText>Hmm... Something went wrong? Try again!</ModalText>
    : <ModalText>Thanks for Signing up</ModalText>;

  return (open ? (
    <Div>
      <ModalContainer>
        <ModalContent>
          <CloseIconWrapper onClick={() => setOpen(false)}>
            <CloseIcon />
          </CloseIconWrapper>
          {icon}
          {message}
          <Button onClick={() => setOpen(false)}>Close</Button>
        </ModalContent>
      </ModalContainer>
    </Div>
  ) : null);
};

export default Modal;
