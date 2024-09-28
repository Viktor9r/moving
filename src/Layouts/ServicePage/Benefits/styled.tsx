import { styled } from "@mui/material";

export const StyledServiceBenefits = styled('div')(({}) => ({
    margin: '0 auto',
    height: 'calc(50vh)',
    background: '#e3e3e3',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
}))

export const StyledServiceBenefitsTop = styled('div')(() => ({
    display: 'flex',
    gap: '40px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export const StyledServiceBenefitsContent = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    justifyContent: 'space-evenly',
    height: '100%',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
}))

export  const StyledServiceBenefitsList = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    gap: '12px',
    alignItems: 'center',
    height: 'fit-content'
}))

export const StyledServiceBenefitItem = styled('div')(() => ({
    padding: '20px',
    background: '#fff',
    width: 'calc(25%)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const StyledServiceBenefitTitle = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '22px',
    marginTop: '18px',
    marginBottom: '12px',
    minHeight: '54px',
    textAlign: 'center'
}))

export const StyledBenefitIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e3e3e3',
    border: '1px solid #e3e3e3',
    borderRadius: '20px',
    height: '62px',
    width: '62px',
    transition: '0.3s',

    ['svg']: {
        fill: '#00302E',
        width: '34px',
        height: '34px',
        transform: 'scale(1.4)'
    }
}))

export const StyledServiceBenefitSubTitle = styled('div')(() => ({
    color: '#000',
    fontWeight: 500,
    fontSize: '14px',
    textAlign: 'center',
    minHeight: '68px'
}))