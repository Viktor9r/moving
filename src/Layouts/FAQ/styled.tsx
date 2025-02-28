import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFAQPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(100vh - 170px)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px',

    ['@media (max-width: 1000px)']: {
        height: 'fit-content',
        padding: '30px 16px 16px',
        gap: '24px'
    }
}))

export const StyledFAQPageTop = styled('div')(() => ({
    display: 'flex',
    gap: '40px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px'
    }
}))

export const StyledFAQPageTopLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
}))

export const StyledFAQPageTitle = styled('h2')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '32px'
    }
}))

export const StyledFAQPageSubTitle = styled('p')(() => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: 500,
}))

export const StyledFAQPageTip = styled('span')(() => ({
    color: 'grey',
    fontSize: '14px',
    fontWeight: 500,
}))

export const StyledFAQPageTopRight = styled('div')(() => ({
    display: 'flex',
    gap: '24px',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column'
    }
}))

export const StyledFAQPageQuestionsList = styled('ul')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
    maxHeight: '60%',
    overflow: 'scroll'
}))

export const StyledFAQPageCell = styled('li')(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    transition: '0.3s',
    gap: '24px',
    
    ['@media (max-width: 1000px)']: {
        padding: '14px',
        borderRadius: '30px',
    }
}))

export const StyledFAQPageCellTop = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px'
}))

export const StyledFAQPageCellLeft = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
}))

export const StyledFAQIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e3e3e3',
    border: '2px solid #e3e3e3',
    borderRadius: '20px',
    height: '50px',
    width: '50px',
    transition: '0.3s',

    ['svg']: {
        fill: '#00302E',
        width: '34xpx',
        height: '34px'
    }
}))

export const StyledFAQIconCellNumber = styled('div')(() => ({
    fontSize: '24px',
    fontWeight: 600,
    color: '#000'
}))

export const StyledFAQCellTitle = styled('p')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '24px',

    ['@media (max-width: 1000px)']: {
        fontSize: '16px'
    }
}))

export const StyledFAQCellAnswer = styled('p')(() => ({
    color: '#000',
    fontSize: '17px',
    fontWeight: 500,
    marginLeft: '78px',

    ['@media (max-width: 1000px)']: {
        marginLeft: 0,
        fontSize: '14px'
    }
}))

export const StyledFAQLink = styled(Link)(() => ({
    height: '60px',
    padding: '0 26px',
    minWidth: '10%',
    color: '#fff',
    fontWeight: 600,
    background: '#00302E',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '16px',
    border: '1px solid #00302E',
    textAlign: 'center',
    textDecoration: 'none',
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    
    [':hover']: {
        background: '#e3e3e3',
        color: '#00302E',
    },

    ['@media (max-width: 1000px)']: {
        height: '50px',
    }
}))