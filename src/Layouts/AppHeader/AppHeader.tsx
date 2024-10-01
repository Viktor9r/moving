import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import disableScroll from "disable-scroll"; // Import the library
import {
    HeaderLink,
    HeaderIcon,
    HeaderInnerContainer,
    HeaderLeftPart,
    HeaderLogo,
    HeaderOuterContainer,
    HeaderPipe,
    HeaderRightPart,
    HeaderInnerInnerContainer,
    MobileHeaderButton,
    MobileHeaderMenu,
    MobileHeaderMenuTop,
    MobileHeaderLinksList,
    MobileHeaderLinksLink,
} from "./styled";
import logo from "../../resources/images/finallogo.png";
import { CloseOutlined, Menu, PhoneIphoneOutlined } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";
import { MainPageOptionsQuoteButton } from "../MainPageOptions/styled";
import { servicesList } from "../../resources/data/arrays";
import { useLocation } from "react-router-dom";

interface IProps { }

export const AppHeader: React.FC<IProps> = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog();
    const mobile = useMediaQuery("(max-width:1000px)");
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const location = useLocation()

    useEffect(() => {
        if (showMobileMenu) {
            disableScroll.on(); // Disable scroll when mobile menu is open
        } else {
            disableScroll.off(); // Enable scroll when mobile menu is closed
        }

        return () => {
            disableScroll.off(); // Cleanup scroll behavior when component unmounts
        };
    }, [showMobileMenu]);

    return (
        <>
            <HeaderOuterContainer>
                <HeaderInnerContainer>
                    <HeaderInnerInnerContainer>
                        <HeaderLeftPart to={"/"}>
                            <HeaderLogo src={logo} />
                        </HeaderLeftPart>

                        <HeaderRightPart>
                            {!mobile && (
                                <>
                                    <HeaderLink to="mailto:info@fcmmovers.com">
                                        <HeaderIcon>
                                            <EmailIcon />
                                        </HeaderIcon>
                                        info@fcmmovers.com
                                    </HeaderLink>
                                    <HeaderPipe />
                                    <HeaderLink to="tel:4378989777">
                                        <HeaderIcon>
                                            <PhoneIphoneOutlined />
                                        </HeaderIcon>
                                        +1 (437) 898-9777
                                    </HeaderLink>
                                    <HeaderPipe />
                                    <MainPageOptionsQuoteButton
                                        sx={{
                                            height: '44px'
                                        }}
                                        onClick={() => setOpenQuoteDialog(true)}>
                                        Free quote
                                    </MainPageOptionsQuoteButton>
                                </>
                            )}

                            {mobile && (
                                <MobileHeaderButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                    <Menu />
                                </MobileHeaderButton>
                            )}
                        </HeaderRightPart>
                    </HeaderInnerInnerContainer>
                </HeaderInnerContainer>
            </HeaderOuterContainer>

            <MobileHeaderMenu
                sx={{
                    transform: showMobileMenu ? "translate3d(20vw, 0, 0)" : "translate3d(100vw, 0, 0)",
                    boxShadow: showMobileMenu ? "29px 0px 180px 54px rgba(0,0,0,0.75)" : "none",
                    zIndex: showMobileMenu ? 999 : -1,
                }}
            >
                <MobileHeaderMenuTop>
                    <CloseOutlined onClick={() => setShowMobileMenu(!showMobileMenu)} />
                </MobileHeaderMenuTop>

                <MobileHeaderLinksList>
                    <MobileHeaderLinksLink
                        to={'/'}
                        sx={{
                            textDecoration: location.pathname === '/' ? 'underline' : 'none'
                        }}
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                            setShowMobileMenu(false)
                        }}
                    >
                        Home
                    </MobileHeaderLinksLink>
                    {servicesList.map((item: any) => (
                        <MobileHeaderLinksLink
                            key={item.id}
                            to={item.link}
                            sx={{
                                textDecoration: item.link === location.pathname ? 'underline' : 'none'
                            }}
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                                setShowMobileMenu(false)
                            }}
                        >
                            {item.title}
                        </MobileHeaderLinksLink>
                    ))}
                    <MobileHeaderLinksLink
                        to={'/faq-page'}
                        sx={{
                            textDecoration: location.pathname === '/faq-page' ? 'underline' : 'none'
                        }}
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                            setShowMobileMenu(false)
                        }}
                    >
                        FAQ Page
                    </MobileHeaderLinksLink>
                </MobileHeaderLinksList>

                <div
                    style={{
                        height: '1px',
                        width: '100%',
                        background: '#fff',
                        margin: '30px 0'
                    }}
                />

                <HeaderLink
                    sx={{
                        color: '#fff',
                        fontSize: '18px !important',
                        marginBottom: '30px',

                        // ['svg']: {
                        //     fill: '#fff'
                        // }
                    }}
                    onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                    to=''
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

                <HeaderLink
                    sx={{
                        color: '#fff',
                        fontSize: '18px !important',
                        marginBottom: '50px',

                        ['svg']: {
                            fill: '#fff'
                        }
                    }}
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

                <MainPageOptionsQuoteButton
                    sx={{
                        color: '#fff',
                        border: '2px solid #fff',

                        [':hover']: {
                            background: '#fff',
                            color: '#00302E'
                        }
                    }}
                    onClick={() => {
                        setShowMobileMenu(false)
                        setOpenQuoteDialog(true)
                    }}
                >
                    Free quote
                </MainPageOptionsQuoteButton>
            </MobileHeaderMenu>
        </>
    );
};
