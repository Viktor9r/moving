import { styled } from "@mui/material";

interface IBackground {
    background: string
}

export const StyledFAQPageMain = styled('div')<IBackground>(({ background }) => ({
    margin: '0 auto',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 270px)',
    marginTop: '10px',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        marginTop: '70px',
        // height: "fit-content",
        height: 'calc(100vh - 100px)',
        justifyContent: 'space-between',
        padding: '0',
        alignItems: 'flex-start'
    }
}))

export const StyledFAQCategory = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',
    marginBottom: '24px',

    ['@media (max-width: 1000px)']: {
        fontSize: '32px',
        marginBottom: '8px'
    }
}))