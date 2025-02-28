import { Button, styled } from "@mui/material";

export const StyledTrustPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(60vh)',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        height: 'fit-content',
        padding: '30px 16px 16px'
    }
}))

export const StyledTrustPageTop = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'flex-start'
}));

export const StyledTrustPageTitle = styled('h2')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',
    maxWidth: '50%',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        maxWidth: '100%',
        fontSize: '32px'
    }
}))

export const StyledTrustPageTopUnder = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

export const StyledTrustPageSubTitle = styled('p')(() => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: 500,
    maxWidth: '60%',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        maxWidth: '100%',
    }
}));

export const TrustPageOptionsQuoteButton = styled(Button)(() => ({
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
    
    [':hover']: {
        boxSizing: 'border-box',
        background: '#e3e3e3',
        color: '#00302E',
    }
}))

export const StyledTrustPageList = styled('ul')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
    borderRadius: '20px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        flexWrap: 'wrap',
        borderRadius: '30px',
    }
}))

export const StyledTrustPageCell = styled('li')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '18px',
    width: 'calc(20%)',
    borderRight: '2px solid #e3e3e3',
    margin: '20px 0',
    padding: '0 20px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        width: 'calc(50% - 42px)',
        borderBottom: '2px solid #e3e3e3',
        margin: 0,
        padding: '20px',
        alignItems: 'center',
        textAlign: 'center'
    }
}));

export const StyledTrustPageCellTitle = styled('h4')(() => ({
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '1.25',
    textTransform: 'capitalize',
    height: '42px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        fontSize: '12px',
    }
}))

export const StyledTrustIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e3e3e3',
    border: '1px solid #e3e3e3',
    borderRadius: '20px',
    height: '62px',
    width: '62px',
    transition: '0.3s',

    ['svg']: {
        fill: '#00302E',
        width: '34xpx',
        height: '34px',
        transform: 'scale(1.4)'
    }
}))
