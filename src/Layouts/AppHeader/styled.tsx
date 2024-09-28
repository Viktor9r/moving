import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderOuterContainer = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
    height: "80px",
    width: "100%",
    background: '#fff',
    zIndex: 2,

    ['@media (max-width: 1000px)']: {
        height: '60px'
    }
}))

export const HeaderInnerContainer = styled('div')(() => ({
    maxWidth: '1600px',
    padding: '0 30px',
    margin: '0 auto',
    height: '100%',

    ['@media (max-width: 1000px)']: {
        padding: '0 16px'
    }
}))

export const HeaderInnerInnerContainer = styled('div')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    gap: '40px',
}))

export const HeaderRightPart = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontSize: '16px',
    fontWeight: 500,
    color: '#00302E'
}))

export const HeaderLeftPart = styled(Link)(() => ({
    display: 'flex'
}))

export const HeaderLogo = styled('img')(() => ({
    width: '70px',
    cursor: 'pointer',

    ['@media (max-width: 1000px)']: {
        width: '50px'
    }
}))

export const HeaderLink = styled(Link)(() => ({
    display: 'flex',
    gap: '6px',
    alignItems: 'flex-end',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#00302E',
    fontWeight: 500,
    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px'
    },

    ['@media (max-width: 767px)']: {
        fontSize: '14px',
        gap: '10px'
    },
}))

export const HeaderIcon = styled('div')(() => ({
    width: '22px',
    height: '22px',
    color: '#00302E',
    marginRight: '12px',

    ['@media (max-width: 767px)']: {
        transform: 'scale(0.9)'
    },
}))

export const HeaderPipe = styled('div')(() => ({
    width: '2px',
    height: '30px',
    background: '#00302E',
    margin: '0 12px',
}))

export const HeaderLangValue = styled('div')(() => ({
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#00302E',
    transition: '0.7s',
    minWidth: '26px',
    cursor: 'pointer',
    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px'
    },
}))

export const MobileHeaderButton = styled('div')(() => ({
    ['svg']: {
        fill: '#00302E',
        transform: 'scale(1.35)'
    }
}))

export const MobileHeaderMenu = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    width: '70vw',
    bottom: 0,
    transition: '0.5s',
    background: '#00302E',
    padding: '20px 20px',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    color: '#fff',
    fontWeight: 500,

    display: 'flex',
    flexDirection: 'column'
}))

export const MobileHeaderMenuTop = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '40px',

    ['svg']: {
        fill: '#fff',
        transform: 'scale(1.5)'
    }
}))

export const MobileHeaderLinksList = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '100%',
    justifyContent: 'flex-start'
}))

export const MobileHeaderLinksLink = styled(Link)(() => ({
    fontSize: '18px',
    color: '#fff',
    textUnderlineOffset: '8px'
}))