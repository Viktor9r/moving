import { Button, TextField, styled } from "@mui/material";
import background from '../../resources/images/background.png';
import backgrounddark from '../../resources/images/backgrounddark.png';

export const StyledMainPage = styled('div')(() => ({
    margin: '0 auto',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 270px)',
    marginTop: '10px',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px',

    ['@media (max-width: 1000px)']: {
        marginTop: '80px',
        height: "fit-content",
        padding: '30px 10px'
    }
}))

export const StyledMainPageTop = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
    justifyContent: 'space-between',
    gap: '15%',
    alignItems: 'flex-end',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'flex-start',
    }
}))

export const StyledMainPageTitle = styled('div')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',
    maxWidth: '600px',
    backdropFilter: 'blur(14px)',
    borderRadius: '40px',
    padding: '16px 20px',
    transform: 'translateX(-20px)',

    ['@media (max-width: 1000px)']: {
        maxWidth: '100%',
        transform: 'none'
    }
}))

export const StyledMainPageSubTitle = styled('div')(() => ({
    color: '#fff',
    backdropFilter: 'blur(14px)',
    borderRadius: '40px',
    fontSize: '18px',
    padding: '14px 20px',
    fontWeight: 500,
    transform: 'translateX(20px)',

    ['@media (max-width: 1000px)']: {
        maxWidth: '100%',
        transform: 'none'
    }
}))

export const StyledMainPageForm = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '18px',
    margin: '0 auto',
    width: '100%',
    padding: '44px 30px 24px',
    backdropFilter: 'blur(14px)',
    borderRadius: '40px',
    maxWidth: '1100px',

    ['@media (max-width: 1000px)']: {
        padding: '30px 16px',
        width: 'auto',
        margin: '0',
        alignItems: 'flex-start'
    }
}))

export const StyledMainPageFormTop = styled('div')(() => ({
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    width: '100%',
    ['@media (max-width: 1000px)']: {
        flexDirection: 'column'
    }
}))

export const StyledMainPageFieldBlock = styled('div')(() => ({
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
    minWidth: 'calc(100%/6 - 10px)',
    maxWidth: 'calc(100%/6 - 10px)',

    ['@media (max-width: 1000px)']: {
        minWidth: '100%',
        maxWidth: '100%',
    }
}))

export const StyledFieldBlockTitle = styled('label')(() => ({
    fontSize: '14px',
    color: '#fff',
    fontWeight: 500
}))

export const StyledFieldBlockInput = styled('input')(() => ({
    fontSize: '14px',
    color: '#fff',
    fontWeight: 500,
    fontFamily: 'Montserrat',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.25)',
    // background: 'rgba(0, 0, 0, 0.6)',
    height: '48px',
    borderRadius: '20px',
    padding: '4px 14px',
    transition: '0.3s',

    [':hover']: {
        background: 'rgba(0, 0, 0, 0.4)',
        // background: 'rgba(0, 0, 0, 0.8)',
    },

    [':focus']: {
        background: 'rgba(0, 0, 0, 0.4)',
        // background: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        outline: 'none'
    },

    ['::placeholder']: {
        fontFamily: 'Montserrat',
        color: '#c4c3c2',
        fontWeight: 500
    }
}))

export const StyledCalendarButton = styled(Button)(() => ({
    fontSize: '14px',
    fontWeight: 500,
    border: 'none',
    fontFamily: 'Montserrat, sans-serif',
    background: 'rgba(0, 0, 0, 0.25)',
    // background: 'rgba(0, 0, 0, 0.6)',
    height: '56px',
    borderRadius: '20px',
    padding: '4px 14px',
    transition: '0.3s',
    textAlign: 'left',
    justifyContent: 'flex-start',

    [':hover']: {
        background: 'rgba(0, 0, 0, 0.4)',
        // background: 'rgba(0, 0, 0, 0.8)',
    },

    [':focus']: {
        background: 'rgba(0, 0, 0, 0.4)',
        // background: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        outline: 'none'
    },

    ['@media (max-width: 1000px)']: {
        width: '100%'
    }
}))

export const StyledFieldBlockTextArea = styled('textarea')(() => ({
    resize: 'none',
    fontSize: '14px',
    color: '#fff',
    fontWeight: 500,
    border: 'none',
    background: 'rgba(0, 0, 0, 0.25)',
    fontFamily: 'Montserrat',
    // background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '20px',
    padding: '14px 14px',
    transition: '0.3s',

    [':hover']: {
        background: 'rgba(0, 0, 0, 0.4)',
        // background: 'rgba(0, 0, 0, 0.8)',
    },

    [':focus']: {
        background: 'rgba(0, 0, 0, 0.4)',
        // background: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        outline: 'none'
    },

    ['::placeholder']: {
        fontFamily: 'Montserrat',
        color: '#c4c3c2',
        fontWeight: 500
    }
}))

export const StyledFormBottom = styled('div')(() => ({
    display: 'flex',
    gap: '12px',
    width: '100%',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column'
    }
}))

export const StyledFormSubmit = styled(Button)(() => ({
    width: '50%',
    height: 'calc(100% - 25px)',
    background: '#00302E',
    color: '#fff',
    fontWeight: 700,
    fontSize: '14px',
    textTransform: 'none',
    borderRadius: '20px',
    border: '2px solid #00302E',
    marginTop: '24px',

    [':hover']: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: '#fff'
    },

    ['@media (max-width: 1000px)']: {
        marginTop: '12px',
        height: '56px',
        width: '100%'
    }
}))