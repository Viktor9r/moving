import { styled } from "@mui/material";

export const StyledAboutPage = styled('div')(() => ({
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
    gap: '40px'
}))

export const StyledAboutPageTop = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto'
}))

export const StyledAboutPageTitle = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',
}))

export const StyledAboutPageSubTitle = styled('div')(() => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: 500,
    padding: '20px',
    background: '#fff',
    borderRadius: '20px'
}))

export const StyledAboutPageBottom = styled('div')(() => ({
    display: 'flex',
    gap: '12px',
    width: '100%',
    margin: '0 auto'
}))

export const StyledAboutPageImageCell = styled('div')(() => ({
    width: 'calc(25% - 12px)',
    aspectRatio: '1/1',
    borderRadius: '20px',
    background: '#fff',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}))
