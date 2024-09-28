import { MainPageOptionsQuoteButton } from "../MainPageOptions/styled"
import { StyledTrustIconCell, StyledTrustPage, StyledTrustPageCell, StyledTrustPageCellTitle, StyledTrustPageList, StyledTrustPageSubTitle, StyledTrustPageTitle, StyledTrustPageTop, StyledTrustPageTopUnder, TrustPageOptionsQuoteButton } from "./styled"

import { ReactComponent as CalendarIcon } from '../../resources/icons/calendar.svg';
import { ReactComponent as HandshakeIcon } from '../../resources/icons/handshake.svg';
import { ReactComponent as HiddenFeesIcon } from '../../resources/icons/hiddenfees.svg';
import { ReactComponent as ShieldIcon } from '../../resources/icons/shield.svg';
import { ReactComponent as WeatherIcon } from '../../resources/icons/weather.svg';
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";

export const TrustPage: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()

    return (
        <StyledTrustPage>
            <StyledTrustPageTop>
                <StyledTrustPageTitle>
                    Why you can trust us with your relocation
                </StyledTrustPageTitle>

                <StyledTrustPageTopUnder>
                    <StyledTrustPageSubTitle>
                        First Class Movers is a trusted and loved moving and storage company in Toronto&GTA. We offer reliable, safe, and affordable services. Our great customer service sets us apart from others.
                        <br></br>
                        <br></br>
                        We are the city’s only on-demand mover, available 24/7 every day of the year, including holidays, to meet your needs.
                    </StyledTrustPageSubTitle>

                    <TrustPageOptionsQuoteButton onClick={() => setOpenQuoteDialog(true)}>Get a quote</TrustPageOptionsQuoteButton>
                </StyledTrustPageTopUnder>
            </StyledTrustPageTop>

            <StyledTrustPageList>
                <StyledTrustPageCell>
                    <StyledTrustIconCell>
                        <HandshakeIcon />
                    </StyledTrustIconCell>
                    <StyledTrustPageCellTitle>
                        High-End Customer Service
                    </StyledTrustPageCellTitle>
                </StyledTrustPageCell>

                <StyledTrustPageCell>
                    <StyledTrustIconCell>
                        <CalendarIcon />
                    </StyledTrustIconCell>
                    <StyledTrustPageCellTitle>
                        24 / 7 / 365 Moving
                    </StyledTrustPageCellTitle>
                </StyledTrustPageCell>

                <StyledTrustPageCell>
                    <StyledTrustIconCell>
                        <HiddenFeesIcon />
                    </StyledTrustIconCell>
                    <StyledTrustPageCellTitle>
                        No Hidden Fees
                    </StyledTrustPageCellTitle>
                </StyledTrustPageCell>

                <StyledTrustPageCell>
                    <StyledTrustIconCell>
                        <ShieldIcon />
                    </StyledTrustIconCell>
                    <StyledTrustPageCellTitle>
                        Fully Licensed & Insured
                    </StyledTrustPageCellTitle>
                </StyledTrustPageCell>

                <StyledTrustPageCell
                    sx={{
                        borderRight: 0
                    }}
                >
                    <StyledTrustIconCell>
                        <WeatherIcon />
                    </StyledTrustIconCell>
                    <StyledTrustPageCellTitle>
                        We'll complete your move, snow, rain or shine.
                    </StyledTrustPageCellTitle>
                </StyledTrustPageCell>
            </StyledTrustPageList>
        </StyledTrustPage>
    )
}