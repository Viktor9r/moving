import { Button, styled } from "@mui/material";
import greentruck from '../../resources/images/greentruck.png'

export const StyledCalculateSection = styled('div')(() => ({
    margin: '0 auto',
    background: '#00302E',
    height: 'calc(40vh)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
}))

export const StyledCalculateSectionContent = styled('div')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    gap: '40px'
}))

export const StyledCalculateSectionLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '42%',
    gap: '30px'
}))

export const StyledCalculateSectionTitle = styled('div')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',
}))

export const StyledCalculateSectionSubTitle = styled('div')(() => ({
    color: '#fff',
    fontSize: '14px',
    fontWeight: 500,
}));

export const StyledCalculateSectionRight = styled('div')(() => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.1)',
    backgroundImage: `url(${greentruck})`,
    backgroundPosition: 'left',
    backgroundSize: '128%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px',
    width: '42%',
    height: '75%'
}))

export const StyledCalculateSectionQuoteButton = styled(Button)(() => ({
    position: 'absolute',
    height: '60px',
    padding: '0 26px',
    minWidth: '10%',
    color: '#00302E',
    fontWeight: 600,
    background: '#fff',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '16px',
    bottom: 20,
    right: 20
    
    // [':hover']: {
    //     boxSizing: 'border-box',
    //     background: '#fff',
    //     color: '#00302E',
    // }
}))