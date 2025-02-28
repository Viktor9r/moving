import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFooter = styled('footer')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(44vh)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        height: 'fit-content',
        padding: '30px 16px',
        marginBottom: '90px'
    }
}))

export const StyledFooterContent = styled('div')(() => ({
    width: '100%',
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    position: 'relative'
}))

export const StyledFooterColumn = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',

    ['@media (max-width: 1000px)']: {
        gap: '12px'
    }
}))

export const StyledFooterColumnTitle = styled('h3')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '30px',
    minHeight: '73px',

    ['@media (max-width: 1000px)']: {
        minHeight: 'fit-content'
    }
}))

export const StyledFooterColumnContent = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
}))

export const StyledFooterColumnGreyText = styled('p')(() => ({
    color: 'grey',
    fontWeight: 500,
    fontSize: '14px',
}))

export const StyledFooterIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#00302E',
    border: '2px solid #00302E',
    borderRadius: '20px',
    height: '60px',
    width: '60px',
    transition: '0.3s',
    cursor: 'pointer',

    ['svg']: {
        fill: '#e3e3e3',
        transform: 'scale(1.6)'
    },

    [':hover']: {
        background: '#e3e3e3',
        ['svg']: {
            fill: '#00302E',
        },
    }
}))

export const StyledFooterColumnService = styled(Link)(() => ({
    color: '#000',
    fontWeight: 500,
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none'
}))

export const StyledFooterColumnFlexRow = styled('div')(() => ({
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
}))

export const StyletMobileFooterLogo = styled('img')(() => ({
    width: '90px',
    height: '90px'
}))