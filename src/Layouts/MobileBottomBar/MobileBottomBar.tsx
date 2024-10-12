import { PhoneIphoneOutlined } from "@mui/icons-material"
import { MobileBottomButton, MobileBottomContainer } from "./styled"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";

export const MobileBottomBar: React.FC = () => {
    const [topScrollValue, setTopScrollValue] = useState(0);
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const location = useLocation()

    useEffect(() => {
        function getBodyScrollTop() {
            return document.documentElement && document.documentElement.scrollTop || (document.body && document.body.scrollTop);
        }

        getBodyScrollTop(); // Initial call to handleResize

        window.addEventListener("scroll", event => {
            let value = getBodyScrollTop();
            setTopScrollValue(value);
        })

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', getBodyScrollTop);
        };
    }, []);

    return (
        <MobileBottomContainer
            sx={{
                // display: location.pathname !== '/' ? 'flex' : topScrollValue > 0 && topScrollValue < window.innerHeight + 70 ? 'none' : 'flex',
                bottom: topScrollValue > 0 ? 10 : 14
            }}
        >
            <MobileBottomButton
                onClick={() => {
                    setOpenQuoteDialog(true)
                }}
                sx={{
                    borderTopLeftRadius: topScrollValue > 0 ? '20px' : 0,
                    borderBottomRightRadius: topScrollValue > 0 ? '20px' : 0,
                }}
            >
                Free Quote
            </MobileBottomButton>

            <Link
                style={{ width: '20%', padding: 0, margin: 0 }}
                to="tel:4378989777"
            >
                <MobileBottomButton
                    sx={{
                        width: '100%',
                        borderTopRightRadius: topScrollValue > 0 ? '20px' : 0,
                        borderBottomLeftRadius: topScrollValue > 0 ? '20px' : 0,
                    }}
                >
                    <PhoneIphoneOutlined />
                </MobileBottomButton>
            </Link>
        </MobileBottomContainer>
    )
}