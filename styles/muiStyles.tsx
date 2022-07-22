import { Container, styled } from '@mui/material';

export const StyledContainer = styled(Container)({
    padding: 0
});

export const ModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign:"center"
  };
