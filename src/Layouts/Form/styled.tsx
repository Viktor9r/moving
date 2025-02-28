import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFormPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#00302E',
    height: 'calc(100vh - 170px)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px'
}))

export const StyledFormPageTop = styled('div')(() => ({
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto'
}))

export const StyledFormPageTitle = styled('h2')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',
}))

export const StyledFormPageBottom = styled('div')(() => ({
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
}))

export const StyledFormPageBottomLeft = styled('div')(() => ({
    height: 'calc(60vh - 70px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '24px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '20px',
    width: '35%'
}))

export const StyledFormPageBottomTitle = styled('h3')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '30px',
}))

export const StyledFormPageBottomLeftBottom = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
}))

export const StyledFormPageBottomLeftBottomBlock = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    cursor: 'pointer'
}))

export const StyledFormPageBottomLeftTitle = styled('p')(() => ({
    color: 'grey',
    fontWeight: 500,
    fontSize: '14px',
}))

export const StyledFormPageBottomLeftContact = styled(Link)(() => ({
    color: '#fff',
    fontWeight: 500,
    fontSize: '16px',
    textDecoration: 'none'
}))

export const StyledFormPageBottomRight = styled('form')(() => ({
    height: 'calc(60vh - 70px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '24px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '20px',
    width: '65%'
}))

export const StyledFormPageFieldsWrap = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}))

export const StyledFormInputsFirstLine = styled('div')(() => ({
    display: 'flex',
    gap: '10px',
}))

export const StyledFormInputsFirstLineLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: 'calc(100%/4 - 6px)',
}))

export const StyledFormSubmitButton = styled(Button)(() => ({
    background: '#fff',
    color: '#00302E',
    border: '2px solid #fff',
    fontWeight: 700,
    borderRadius: '20px',
    width: '100%',
    fontSize: '18px',
    height: '64px',
    marginTop: '10px',
    textTransform: 'none',

    [':hover']: {
        color: '#fff',
        background: 'transparent'
    }
}))