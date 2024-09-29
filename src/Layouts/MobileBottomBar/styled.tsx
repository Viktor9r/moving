import { Button, styled } from "@mui/material";

export const MobileBottomContainer = styled('div')(() => ({
    position: 'fixed',
    left: 0,
    right: 0,
    margin: "0 auto",
    zIndex: 999,
    display: 'flex',
    gap: '8px',
    padding: '0 16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: '0.3s'
}))

export const MobileBottomButton = styled(Button)(() => ({
    width: '80%',
    height: 'calc(64px)',
    background: '#00302E',
    color: '#fff',
    fontWeight: 700,
    fontSize: '18px',
    textTransform: 'none',
    borderRadius: '20px',
    border: '2px solid #00302E',
    marginTop: '24px',

    [':hover']: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: '#fff'
    },
}))