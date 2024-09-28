import { styled } from "@mui/material";

export const AppOuterContainer = styled('div')(() => ({
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 30px',
    background: 'transparent',
    position: 'relative',
    height: 'fit-content',
    zIndex: 1,
    ['& div']: {
        scrollSnapAlign: 'start'
    },

    ['@media (max-width: 1000px)']: {
        padding: '0 16px'
    }
}))

export const AppInnerContainer = styled('div')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    background: 'transparent',
    position: 'relative',
    zIndex: 1,
    ['& div']: {
        scrollSnapAlign: 'start'
    },
}))
