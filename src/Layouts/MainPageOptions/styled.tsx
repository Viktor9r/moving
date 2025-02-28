import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledMainPageOptions = styled('section')(() => ({
    height: '100px',
    color: '#000',
    // margin: 'auto',
    marginTop: '70px',
    gap: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // maxWidth: '1100px'
}))

export const MainPageOptionsList = styled('ul')(() => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    color: '#00302E',
    fontWeight: 600
}))

export const MainPageOptionsListItem = styled(Link)(() => ({
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    [':hover']: {
        textDecoration: 'underline',
        textUnderlineOffset: '8px'
    }
}))

export const MainPageOptionsQuoteButton = styled(Button)(() => ({
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
        background: '#fff',
        color: '#00302E',
    }
}))
