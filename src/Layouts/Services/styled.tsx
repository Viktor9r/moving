import { Height } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledServicesPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(100vh - 170px)',
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

export const StyledServicesPageTop = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
    justifyContent: 'space-between',
    gap: '50px',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px'
    }
}));

export const StyledServicesPageTitle = styled('h2')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        fontSize: '32px'
    }
}))

export const StyledServicesPageSubTitle = styled('h3')(() => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: 500,
    maxWidth: '30%',

    ['@media (max-width: 1000px)']: {
        maxWidth: '100%',
    }
}))

export const StyledServicesPageList = styled('ul')(() => ({
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
}))

export const StyledServiceCell = styled('li')(() => ({
    minWidth: 'calc(100% / 3 - 46px)',
    maxWidth: 'calc(100% / 3 - 46px)',
    background: '#fff',
    padding: '20px',
    borderRadius: '20px',
    gap: '18px',
    display: 'flex',
    justifyContent: 'space-between',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        // height: "fit-content",
        minWidth: 'calc(100% / 2 - 44px)',
        maxWidth: 'calc(100% / 2 - 44px)',
        borderRadius: '30px',
    }
}))

export const StyledServiceCellLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
    maxWidth: '70%',
    minWidth: '70%',

    ['@media (max-width: 1000px)']: {
        maxWidth: '100%',
        minWidth: '100%',
    }
}))

export const StyledServiceCellTitle = styled('h3')(({
    fontWeight: 600,
    fontSize: '22px',
    height: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '20px'
    }
}))

export const StyledServiceCellAbout = styled('p')(({
    fontWeight: 500,
    fontSize: '14px',
    overflow: 'hidden',
    wordBreak: 'break-all',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2, /* number of lines to show */
    lineClamp: 2,
    WebkitBoxOrient: 'vertical',
}))

export const StyledServiceCellRight = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '100%',
        minWidth: '100%',
    }
}))

export const StyledServiceIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e3e3e3',
    border: '1px solid #e3e3e3',
    borderRadius: '20px',
    height: '52px',
    width: '52px',
    transition: '0.3s',

    ['svg']: {
        fill: '#00302E',
        width: '34xpx',
        height: '34px',
        transform: 'scale(1.3)'
    }
}))

export const StyledServiceIconLink = styled(Link)(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e3e3e3',
    border: '1px solid #e3e3e3',
    borderRadius: '20px',
    height: '52px',
    width: '52px',
    transition: '0.3s',

    ['svg']: {
        fill: '#00302E',
        width: '34xpx',
        height: '34px'
    }
}))