import { HeaderIcon, HeaderLink, HeaderPipe } from "../AppHeader/styled"
import { StyledFAQCellTitle, StyledFAQIconCell, StyledFAQIconCellNumber, StyledFAQPage, StyledFAQPageCellTop, StyledFAQPageCellLeft, StyledFAQPageQuestionsList, StyledFAQPageSubTitle, StyledFAQPageTip, StyledFAQPageTitle, StyledFAQPageTop, StyledFAQPageTopLeft, StyledFAQPageTopRight, StyledFAQPageCell, StyledFAQCellAnswer, StyledFAQLink } from "./styled"
import { PhoneIphoneOutlined, PhoneOutlined } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { ReactComponent as PlusIcon } from '../../resources/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../resources/icons/minus.svg';

import { useEffect, useState } from "react";
import React from "react";
import { TrustPageOptionsQuoteButton } from "../Trust/styled";

interface IProps {
    questions: any
}

export const FAQPage: React.FC<IProps> = ({ questions }) => {

    const [showAnswer, setShowAnswer] = useState(false);
    const [openedIds, setOpenedIds] = useState<any>([])

    const addOpenedId = (newId: number) => {
        const newIds = [...openedIds, newId];

        setOpenedIds(newIds);
    }

    const removeOpenedId = (removeId: number) => {
        const newIds = openedIds.filter((id: number) => id != removeId)

        setOpenedIds(newIds);
    }

    useEffect(() => { }, [setOpenedIds])

    return (
        <StyledFAQPage>
            <StyledFAQPageTop>
                <StyledFAQPageTopLeft>
                    <StyledFAQPageTitle>
                        FAQ
                    </StyledFAQPageTitle>

                    <StyledFAQPageSubTitle>
                        Didn't find the answer to your quetion?
                        <br></br>
                        Call us or send us an e-mail
                        <br></br>
                        <StyledFAQPageTip>
                            * Scroll to see more
                        </StyledFAQPageTip>
                    </StyledFAQPageSubTitle>
                </StyledFAQPageTopLeft>

                <StyledFAQPageTopLeft
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        height: '100%'
                    }}
                >
                    <StyledFAQLink to={'/faq-page'}>Go to FAQ page</StyledFAQLink>

                    <StyledFAQPageTopRight>
                        <HeaderLink
                            onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                            to='javascript:void(0)'
                        >
                            <HeaderIcon sx={{
                                mr: 1,
                                mb: '0px',
                                ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                    mr: 1
                                }
                            }}>
                                <EmailIcon />
                            </HeaderIcon>
                            info@fcmmovers.com
                        </HeaderLink>
                        <HeaderPipe />
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
                            +1 (416) 450-5144
                        </HeaderLink>
                    </StyledFAQPageTopRight>
                </StyledFAQPageTopLeft>
            </StyledFAQPageTop>

            <StyledFAQPageQuestionsList>
                {questions.map((item: any, index: number) => (
                    <StyledFAQPageCell
                        key={item.id}
                    >
                        <StyledFAQPageCellTop
                            key={item.id}
                        >
                            <StyledFAQPageCellLeft>
                                <StyledFAQIconCell>
                                    <StyledFAQIconCellNumber>
                                        {index + 1}
                                    </StyledFAQIconCellNumber>
                                </StyledFAQIconCell>

                                <StyledFAQCellTitle>
                                    {item.question}
                                </StyledFAQCellTitle>
                            </StyledFAQPageCellLeft>

                            <StyledFAQIconCell
                                onClick={() => {
                                    if (openedIds.some((id: number) => id === item.id)) {
                                        removeOpenedId(item.id)
                                    } else {
                                        addOpenedId(item.id)
                                    }
                                }}
                                sx={{
                                    background: openedIds.some((id: number) => id === item.id) ? '#fff' : '#00302E',
                                    cursor: 'pointer',
                                    border: '2px solid #00302E',
                                    alignSelf: 'center',
                                    ['svg']: {
                                        fill: openedIds.some((id: number) => id === item.id) ? '#00302E' : '#fff',
                                        width: '44px',
                                        height: '44px'
                                    },

                                    [':hover']: {
                                        background: '#fff',

                                        ['svg']: {
                                            fill: '#00302E',
                                        },
                                    }
                                }}
                            >
                                {openedIds.some((id: number) => id === item.id) ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </StyledFAQIconCell>
                        </StyledFAQPageCellTop>

                        {openedIds.some((id: number) => id === item.id) && (
                            <StyledFAQCellAnswer>
                                {item.answer.split('\n').map((line: any, index: any) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </StyledFAQCellAnswer>
                        )}
                    </StyledFAQPageCell>
                ))}
            </StyledFAQPageQuestionsList>
        </StyledFAQPage>
    )
}