import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledReviewsSection = styled('div')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(70vh)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px'
}))

export const StyledReviewsSectionTop = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto'
}))

export const StyledReviewsSectionTitle = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',
}))

export const StyledReviewsSectionRight = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
}))

export const StyledReviewsIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#00302E',
    border: '2px solid #00302E',
    borderRadius: '20px',
    height: '60px',
    width: '60px',
    transition: '0.3s',
    cursor: 'pointer',

    ['svg']: {
        fill: '#e3e3e3',
        transform: 'scale(1.6)'
    },

    [':hover']: {
        ['svg']: {
            fill: '#fff',
        },
    }
}))

export const StyledReviewsRow = styled('div')(() => ({
    width: '100%',
    height: '60%',
    display: 'flex',
    overflow: 'auto',
    gap: '12px',
    borderRadius: '20px',
    ['::-webkit-scrollbar']: {
        display: 'none'
    }
}))

export const StyledReviewCell = styled(Link)(() => ({
    aspectRatio: '1/1',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
    cursor: 'pointer',
    border: '2px solid #fff',
    textDecoration: 'none',

    [':hover']: {
        transition: '0.3s',
        border: '2px solid #00302E',
    }
}))

export const StyledReviewCellTop = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    overflow: 'hidden'
}))

export const StyledReviewCellDate = styled('div')(() => ({
    color: 'grey',
    fontWeight: 500,
    fontSize: '14px',
}))

export const StyledReviewCellReview = styled('div')(() => ({
    color: '#000',
    fontWeight: 500,
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 7, /* number of lines to show */
    lineClamp: 7,
    WebkitBoxOrient: 'vertical',
}))

export const StyledReviewCellBottom = styled('div')(() => ({
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '2px solid #00302E',
}))

export const StyledReviewCellBottomRight = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#00302E',
    borderRadius: '20px',
    height: '64px',
    width: '64px',
    transition: '0.3s',
    cursor: 'pointer',

    [':hover']: {
        ['svg']: {
            fill: '#fff',
        },
    }
}))

export const StyledReviewCellBottomRightPlaceholder = styled('div')(() => ({
    fontSize: '28px',
    fontWeight: 600,
    color: '#fff'
}))

export const StyledReviewCellBottomLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}))

export const StyledReviewCellName = styled('div')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '18px',
}))