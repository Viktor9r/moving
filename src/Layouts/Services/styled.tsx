import { Height } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledServicesPage = styled('div')(() => ({
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
    gap: '40px'
}))

export const StyledServicesPageTop = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
    justifyContent: 'space-between',
    gap: '50px',
    alignItems: 'center'
}));

export const StyledServicesPageTitle = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',
}))

export const StyledServicesPageSubTitle = styled('div')(() => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: 500,
    maxWidth: '30%'
}))

export const StyledServicesPageList = styled('div')(() => ({
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
}))

export const StyledServiceCell = styled('div')(() => ({
    minWidth: 'calc(100% / 3 - 46px)',
    maxWidth: 'calc(100% / 3 - 46px)',
    background: '#fff',
    padding: '20px',
    borderRadius: '20px',
    gap: '18px',
    display: 'flex',
    justifyContent: 'space-between'
}))

export const StyledServiceCellLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
    maxWidth: '70%',
    minWidth: '70%'
}))

export const StyledServiceCellTitle = styled('div')(({
    fontWeight: 600,
    fontSize: '22px',
    height: '44px',
}))

export const StyledServiceCellAbout = styled('div')(({
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