import { styled } from "@mui/material";

export const StyledDialogTop = styled('div')(() => ({
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #e3e3e3',

    ['svg']: {
        transform: 'scale(1.3)'
    }
}))

export const StyledDialogTitle = styled('div')(() => ({
    fontWeight: 600,
    fontSize: '22px'
}))

export const StyledDialogForm = styled('form')(() => ({
    padding: '20px',
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxHeight: 'calc(100% - 40px)',
    overflow: 'scroll'
}))

export const StyledFlexContainer = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column'
    }
}))