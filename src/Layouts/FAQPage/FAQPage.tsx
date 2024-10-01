import { AppOuterContainer } from "../DesktopLayout/styled"
import { MainPageOptions } from "../MainPageOptions/MainPageOptions"
import { StyledFAQCategory, StyledFAQPageMain } from "./styled"
import background from '../../resources/images/background.png'
import { StyledServicePageTop, StyledServicePageTitle, StyledServicePageSubTitle, StyledServicePageTopButton } from "../ServicePage/styled"
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"
import { HeaderIcon, HeaderLink, HeaderPipe } from "../AppHeader/styled"
import { StyledFAQCellTitle, StyledFAQIconCell, StyledFAQIconCellNumber, StyledFAQPage, StyledFAQPageCellTop, StyledFAQPageCellLeft, StyledFAQPageQuestionsList, StyledFAQPageSubTitle, StyledFAQPageTip, StyledFAQPageTitle, StyledFAQPageTop, StyledFAQPageTopLeft, StyledFAQPageTopRight, StyledFAQPageCell, StyledFAQCellAnswer, StyledFAQLink } from "../FAQ/styled"
import { PhoneIphoneOutlined, PhoneOutlined } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/EmailOutlined';

import { useEffect, useState } from "react";
import React from "react";
import { questionsList, servicesList } from "../../resources/data/arrays"
import { TrustPageOptionsQuoteButton } from "../Trust/styled"
import { QuestionsList } from "./QuestionsList"
import { FormPage } from "../Form/Form"
import { Footer } from "../Footer/Footer"
import { LocationPage } from "../Location/Location"
import { MobileBottomBar } from "../MobileBottomBar/MobileBottomBar"
import { useMediaQuery } from "@mui/material"

export const FAQPage: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    const questionsArr = questionsList;

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
        <AppOuterContainer>
            {!mobile && (
                <MainPageOptions />
            )}

            <StyledFAQPageMain background={background}>
                <StyledServicePageTop>
                    <StyledServicePageTitle>
                        Frequently Asked Questions
                    </StyledServicePageTitle>

                    <StyledServicePageSubTitle>
                        You can find answers to the most common questions on this page
                    </StyledServicePageSubTitle>

                    {!mobile && (
                        <StyledServicePageTopButton
                            onClick={() => setOpenQuoteDialog(true)}
                        >
                            Free quote
                        </StyledServicePageTopButton>
                    )}
                </StyledServicePageTop>
            </StyledFAQPageMain>

            <StyledFAQPage sx={{ height: 'fit-content' }}>
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
                            height: '100%',

                            ['@media (max-width: 1000px)']: {
                                alignItems: 'flex-start',
                                flexDirection: 'column-reverse'
                            }
                        }}
                    >
                        <TrustPageOptionsQuoteButton onClick={() => setOpenQuoteDialog(true)}>Get a quote</TrustPageOptionsQuoteButton>

                        <StyledFAQPageTopRight

                        >
                            <HeaderLink
                                onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                                to=''
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
                            {!mobile && (
                                <>
                                    <HeaderPipe />
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
                                        +1 (437) 898-9777
                                    </HeaderLink>
                                </>
                            )}
                        </StyledFAQPageTopRight>
                    </StyledFAQPageTopLeft>
                </StyledFAQPageTop>

                <QuestionsList
                    questions={[...questionsArr.filter((item: any) => item.type === 0), ...questionsArr.filter((item: any) => item.type === 8)]}
                    category={'General'}
                />

                <QuestionsList
                    questions={[...questionsArr.filter((item: any) => item.type === 8)]}
                    category={'Cost and Pricing policies'}
                />

                <QuestionsList
                    questions={[...questionsArr.filter((item: any) => item.type === 9)]}
                    category={'Insurance'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 1)}
                    category={'Long-distance moving'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 2)}
                    category={'Local moving'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 3)}
                    category={'Storage'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 4)}
                    category={'Commercial relocation'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 5)}
                    category={'Special items moving'}
                />

                <QuestionsList
                    questions={questionsArr.filter((item: any) => item.type === 6)}
                    category={'Packing'}
                />
            </StyledFAQPage>

            <LocationPage />

            {!mobile && (
                <FormPage />

            )}

            <Footer servicesList={servicesList} />

            {mobile && (
                <MobileBottomBar />
            )}
        </AppOuterContainer>
    )
}