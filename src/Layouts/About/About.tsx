import { StyledAboutPage, StyledAboutPageBottom, StyledAboutPageImageCell, StyledAboutPageSubTitle, StyledAboutPageTitle, StyledAboutPageTop } from "./styled"
import moving1 from '../../resources/images/moving1.png'
import moving2 from '../../resources/images/moving2.png'
import moving3 from '../../resources/images/moving3.png'
import moving4 from '../../resources/images/moving4.png'

export const AboutPage: React.FC = () => {
    return (
        <StyledAboutPage>
            <StyledAboutPageTop>
                <StyledAboutPageTitle>
                    A story about our company
                </StyledAboutPageTitle>
                <StyledAboutPageSubTitle>
                    First Class Movers was born out of a personal experience. When I organized a move for my family, I quickly realized how overwhelming it can be without the right help. This inspired me to start a moving company that puts the customer first, handling every detail with care and precision.
                    <br></br>
                    <br></br>
                    Our mission is simple: to provide reliable, efficient, and affordable moving services. We believe in treating every move as if it were our own, ensuring your belongings arrive safely and on time.
                </StyledAboutPageSubTitle>
            </StyledAboutPageTop>

            <StyledAboutPageBottom>
                <StyledAboutPageImageCell sx={{backgroundImage: `url(${moving1})`}} />
                <StyledAboutPageImageCell sx={{backgroundImage: `url(${moving2})`}} />
                <StyledAboutPageImageCell sx={{backgroundImage: `url(${moving3})`}} />
                <StyledAboutPageImageCell sx={{backgroundImage: `url(${moving4})`}} />
            </StyledAboutPageBottom>
        </StyledAboutPage>
    )
}