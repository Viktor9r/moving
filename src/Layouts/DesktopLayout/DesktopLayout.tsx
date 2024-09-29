import { AppHeader } from "../AppHeader/AppHeader"
import { MainPage } from "../MainPage/MainPage"
import { MainPageOptions } from "../MainPageOptions/MainPageOptions"
import { Services } from "../Services/Services"
import { AppInnerContainer, AppOuterContainer } from "./styled";
import { TrustPage } from "../Trust/Trust";
import { CalculateSection } from "../Calculate/Calculate";
import { AboutPage } from "../About/About";
import { ReviewsSection } from "../Reviews/Reviews";
import { FAQPage } from "../FAQ/FAQ";
import { LocationPage } from "../Location/Location";
import { FormPage } from "../Form/Form";
import { Footer } from "../Footer/Footer";
import { questionsList, servicesList } from "../../resources/data/arrays";
import { useMediaQuery } from "@mui/material";
import { MobileBottomContainer } from "../MobileBottomBar/styled";
import { MobileBottomBar } from "../MobileBottomBar/MobileBottomBar";
import { MobileForm } from "../MobileForm/MobileForm";

export const DesktopLayout: React.FC = () => {

    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <>
            <AppOuterContainer>
                {!mobile && (
                    <MainPageOptions />
                )}
                {/* <div style={{height: '300vh'}}></div> */}
                <MainPage />
                {/* {mobile && (
                    <MobileForm />
                )} */}
                <Services servicesList={servicesList} />
                <TrustPage />
                <CalculateSection />

                {/* <AboutPage /> */}

                <ReviewsSection />
                <FAQPage questions={questionsList.filter((item: any) => item.type === 0).slice(0, 5)} />
                <LocationPage />

                {!mobile && (
                    <FormPage />
                )}
                <Footer servicesList={servicesList} />

                {mobile && (
                    <MobileBottomBar />
                )}
            </AppOuterContainer>
        </>
    )
}