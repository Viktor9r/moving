import {  useLocation } from "react-router-dom"
import { MainPageOptionsList, MainPageOptionsListItem, StyledMainPageOptions } from "./styled"
import { servicesList } from "../../resources/data/arrays"
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"

export const MainPageOptions: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const location = useLocation()

    return (
        <StyledMainPageOptions>
            <MainPageOptionsList>
                <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to={'/'}
                >
                    Home
                </MainPageOptionsListItem>
                {servicesList.map((item: any) => (
                    <MainPageOptionsListItem
                        sx={{
                            textDecoration: location.pathname === item.link ? 'underline' : 'none',
                            textUnderlineOffset: '8px'
                        }}
                        to={item.link}
                        key={item.id}
                    >
                        {item.title}
                    </MainPageOptionsListItem>
                ))}
                <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/faq-page' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to={'/faq-page'}
                >
                    FAQ Page
                </MainPageOptionsListItem>
            </MainPageOptionsList>

            {/* <MainPageOptionsQuoteButton
                onClick={() => setOpenQuoteDialog(true)}
            >
                Free quote
            </MainPageOptionsQuoteButton> */}
        </StyledMainPageOptions>
    )
}