import { Button, styled } from "@mui/material";

interface IBackground {
    background: string
}

export const StyledServicePageMain = styled('div')<IBackground>(({ background }) => ({
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
    alignItems: 'center'
}))

export const StyledServicePageTop = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    margin: '0 auto',
    maxWidth: '1100px',
    gap: '24px',
    alignItems: 'center',
    backdropFilter: 'blur(14px)',
    borderRadius: '24px',
    padding: '30px',
    height: 'fit-content'
}))

export const StyledServicePageTitle = styled('div')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',
}))

export const StyledServicePageSubTitle = styled('div')(() => ({
    color: '#fff',
    fontSize: '18px',
    fontWeight: 500,
}))

export const StyledServicePageTopButton = styled(Button)(() => ({
    width: '100%',
    height: '60px',
    background: '#00302E',
    color: '#fff',
    fontWeight: 700,
    fontSize: '18px',
    textTransform: 'none',
    borderRadius: '20px',
    border: '2px solid #00302E',
    marginTop: '20px',

    [':hover']: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: '#fff'
    }
}))

export const StyledServicePageAbout = styled('div')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(100vh - 170px)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px'
}))

export const StyledServicePageAboutContent = styled('div')(() => ({
    display: 'flex',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    alignItems: 'flex-start',
    borderRadius: '20px',
}))

export const StyledServicePageAboutImage = styled('div')<IBackground>(({ background }) => ({
    height: 'calc(60vh)',
    width: '40%',
    borderRadius: '20px',
    borderTopRightRadius: '0',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}))

export const StyledServicePageAboutRight = styled('div')(() => ({
    height: 'fit-content',
    width: '60%',
    color: '#000',
    fontSize: '16px',
    fontWeight: 500,
}))