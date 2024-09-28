import { KeyboardArrowUp } from "@mui/icons-material"
import { StyledFooter, StyledFooterColumn, StyledFooterColumnContent, StyledFooterColumnFlexRow, StyledFooterColumnGreyText, StyledFooterColumnService, StyledFooterColumnTitle, StyledFooterContent, StyledFooterIconCell } from "./styled"
import { HeaderLink, HeaderIcon, HeaderPipe } from "../AppHeader/styled";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { PhoneIphoneOutlined, PhoneOutlined } from "@mui/icons-material";

interface IProps {
    servicesList: any
}

export const Footer: React.FC<IProps> = ({ servicesList }) => {
    return (
        <StyledFooter>
            <StyledFooterContent>
                <StyledFooterColumn
                    sx={{
                        gridColumn: '1/4',
                        height: '100%'
                    }}
                >
                    <StyledFooterColumnTitle>
                        First Class Moving
                    </StyledFooterColumnTitle>

                    <StyledFooterColumnContent
                        sx={{
                            justifyContent: 'space-between'
                        }}
                    >
                        <StyledFooterColumnGreyText>
                            Copyright © First Class Moving
                        </StyledFooterColumnGreyText>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                <StyledFooterColumn
                    sx={{
                        gridColumn: '4/7'
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
                        gridColumn: '7/8'
                    }}
                />

                <StyledFooterColumn
                    sx={{
                        gridColumn: '8/13'
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
                                mt: 2
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
                            <HeaderPipe sx={{ margin: '0 6px' }} />
                            <HeaderLink
                                to='tel:6476414631'
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
                                +1(416)450-5144
                            </HeaderLink>
                        </StyledFooterColumnFlexRow>
                    </StyledFooterColumnContent>
                </StyledFooterColumn>

                <StyledFooterIconCell onClick={() => window.scrollTo({ top: 0 })}>
                    <KeyboardArrowUp />
                </StyledFooterIconCell>
            </StyledFooterContent>
        </StyledFooter>
    )
}