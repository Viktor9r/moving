import { KeyboardArrowUp } from "@mui/icons-material"
import { StyledFooter, StyledFooterColumn, StyledFooterColumnContent, StyledFooterColumnFlexRow, StyledFooterColumnGreyText, StyledFooterColumnService, StyledFooterColumnTitle, StyledFooterContent, StyledFooterIconCell, StyletMobileFooterLogo } from "./styled"
import { HeaderLink, HeaderIcon, HeaderPipe } from "../AppHeader/styled";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { PhoneIphoneOutlined, PhoneOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import logo from '../../resources/images/finallogo.png'

interface IProps {
    servicesList: any
}

export const Footer: React.FC<IProps> = ({ servicesList }) => {
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledFooter>
            <StyledFooterContent>
                {mobile && (
                    <StyledFooterColumn
                        sx={{
                            ['@media (max-width: 1000px)']: {
                                gridColumn: '1/13',
                                alignItems: 'center'
                            }
                        }}
                    >
                        <StyletMobileFooterLogo src={logo} />
                    </StyledFooterColumn>
                )}
                <StyledFooterColumn
                    sx={{
                        gridColumn: '1/4',
                        height: '100%',

                        ['@media (max-width: 1000px)']: {
                            gridColumn: '1/13',
                        }
                    }}
                >
                    <StyledFooterColumnTitle>
                        First Class Movers
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent
                        sx={{
                            justifyContent: 'space-between'
                        }}
                    >
                        <StyledFooterColumnGreyText>
                            Copyright © First Class Movers
                        </StyledFooterColumnGreyText>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                <StyledFooterColumn
                    sx={{
                        gridColumn: '4/7',

                        ['@media (max-width: 1000px)']: {
                            gridColumn: '1/13',
                        }
                    }}
                >
                    <StyledFooterColumnTitle>
                        Services
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent
                        sx={{
                            gap: '16px'
                        }}
                    >
                        {servicesList.map((item: any) => (
                            <StyledFooterColumnService
                                to={item.link}
                                key={item.id}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                {item.title}
                            </StyledFooterColumnService>
                        ))}
                        <StyledFooterColumnService
                            to={'/faq-page'}
                            onClick={() => window.scrollTo({ top: 0 })}
                        >
                            FAQ Page
                        </StyledFooterColumnService>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                <StyledFooterColumn
                    sx={{
                        gridColumn: '7/8',

                        ['@media (max-width: 1000px)']: {
                            display: 'none'
                        }
                    }}
                />

                <StyledFooterColumn
                    sx={{
                        gridColumn: '8/13',

                        ['@media (max-width: 1000px)']: {
                            gridColumn: '1/13',
                        }
                    }}
                >
                    <StyledFooterColumnTitle>
                        Contacts
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent>
                        <StyledFooterColumnGreyText>
                            Have a question? We're here to help.
                        </StyledFooterColumnGreyText>

                        <StyledFooterColumnFlexRow
                            sx={{
                                mt: 2,
                                ['@media (max-width: 1000px)']: {
                                    mt: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '14px'
                                }
                            }}
                        >
                            <HeaderLink
                                onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                                to='javascript:void(0)'
                            >
                                <HeaderIcon sx={{
                                    mr: 1,
                                    mb: '1px',
                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        mr: 1
                                    }
                                }}>
                                    <EmailIcon />
                                </HeaderIcon>
                                info@fcmmovers.com
                            </HeaderLink>
                            {!mobile && (
                                <HeaderPipe sx={{ margin: '0 6px' }} />
                            )}
                            <HeaderLink
                                to='tel:4378989777'
                            >
                                <HeaderIcon sx={{
                                    mr: 1,
                                    mb: '1px',
                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        mr: 1
                                    }
                                }}>
                                    <PhoneIphoneOutlined />
                                </HeaderIcon>
                                +1(437)898-9777
                            </HeaderLink>
                        </StyledFooterColumnFlexRow>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                {!mobile && (
                    <StyledFooterIconCell onClick={() => window.scrollTo({ top: 0 })}>
                        <KeyboardArrowUp />
                    </StyledFooterIconCell>
                )}
            </StyledFooterContent>
        </StyledFooter>
    )
}