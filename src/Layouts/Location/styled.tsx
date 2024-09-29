import { styled } from "@mui/material";

export const StyledLocationPage = styled('div')(() => ({
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
    gap: '24px',

    ['@media (max-width: 1000px)']: {
        height: 'fit-content',
        padding: '30px 16px 16px',
        gap: '24px'
    }
}))

export const StyledLocationPageTop = styled('div')(() => ({
    display: 'flex',
    gap: '40px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'flex-start'
    }
}))

export const StyledFLocationPageTitle = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '32px'
    }
}))

export const StyledLocationPageBottom = styled('div')(() => ({
    display: 'flex',
    gap: '18px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    flexDirection: 'column'
}))

export const StyledLocationPageMapBlock = styled('div')(() => ({
    width: '100%',
    borderRadius: '20px',
    height: 'calc(50vh - 70px)',

    ['div']: {
        borderRadius: '20px',

        ['@media (max-width: 1000px)']: {
            borderRadius: '30px',
        }
    }
}))

export const StyledLocationCell = styled('div')(() => ({
    padding: '10px 14px',
    borderRadius: '20px',
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
    border: '1px solid #fff',
    transition: '0.3s',

    [':hover']: {
        borderColor: '#00302E'
    },

    ['@media (max-width: 1000px)']: {
        padding: '8px 12px',
        fontSize: '14px'
    }
}))

export const StyledLocationsList = styled('div')(() => ({
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
}))