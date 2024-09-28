import React from "react";
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";
import { useSerivcePageDataStorage } from "../../Storages/useServicePageDataStorage"
import { questionsList, servicesList } from "../../resources/data/arrays";
import { CalculateSection } from "../Calculate/Calculate";
import { AppOuterContainer } from "../DesktopLayout/styled"
import { FAQPage } from "../FAQ/FAQ";
import { Footer } from "../Footer/Footer";
import { FormPage } from "../Form/Form";
import { MainPageOptions } from "../MainPageOptions/MainPageOptions"
import { ServiceBenefits } from "./Benefits/Benefits";
import { StyledServicePageMain, StyledServicePageAbout, StyledServicePageSubTitle, StyledServicePageTitle, StyledServicePageTop, StyledServicePageTopButton, StyledServicePageAboutContent, StyledServicePageAboutRight, StyledServicePageAboutImage } from "./styled";

export const ServicePage: React.FC = () => {
    const {
        visibleService
    } = useSerivcePageDataStorage();

    const { setOpenQuoteDialog } = useOpenQuoteDialog()

    const jsonServices = servicesList;

    const service = jsonServices.find((item: any) => item.id === visibleService)

    if (service) {
        return (
            <AppOuterContainer>
                <MainPageOptions />

                <StyledServicePageMain
                    background={service!.gallery[0].photo}
                >
                    <StyledServicePageTop>
                        <StyledServicePageTitle>
                            {service?.title}
                        </StyledServicePageTitle>

                        <StyledServicePageSubTitle>
                            {service?.subTitle}
                        </StyledServicePageSubTitle>

                        <StyledServicePageTopButton
                            onClick={() => setOpenQuoteDialog(true)}
                        >
                            Free quote
                        </StyledServicePageTopButton>
                    </StyledServicePageTop>
                </StyledServicePageMain>

                <StyledServicePageAbout>
                    <StyledServicePageAboutContent>
                        <StyledServicePageAboutImage
                            background={service!.gallery[1].photo}
                        />

                        <StyledServicePageAboutRight>
                            <StyledServicePageTitle sx={{
                                color: '#fff',
                                padding: '20px',
                                background: '#00302E',
                                borderTopRightRadius: '20px',
                                borderBottomRightRadius: '20px',
                                fontSize: '28px'
                            }}>
                                {service.subTitle2}
                            </StyledServicePageTitle>
                            <br></br>
                            <div style={{
                                padding: '0px 20px 20px 36px',
                            }}>
                                {service.about.split('\n').map((line: any, index: any) => (
                                    <React.Fragment key={index}>
                                        <span
                                            style={{
                                                fontWeight: line.includes("1. Consolidated Shipping") ? 600 : line.includes("2. Exclusive Express Long") ? 600 : 400
                                            }}
                                        >{line}</span>
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </StyledServicePageAboutRight>
                    </StyledServicePageAboutContent>
                </StyledServicePageAbout>

                <ServiceBenefits benefits={service.benefits} />

                <CalculateSection />

                <FAQPage questions={[...questionsList.filter((item: any) => item.type === service.id)]} />

                <FormPage />

                <Footer servicesList={servicesList} />
            </AppOuterContainer>
        )
    }

    return <></>
}