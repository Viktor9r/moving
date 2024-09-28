import { useOpenQuoteDialog } from "../../../Storages/useOpenQuoteDialog"
import { TrustPageOptionsQuoteButton } from "../../Trust/styled"
import { StyledServicePageTitle } from "../styled"
import { StyledBenefitIconCell, StyledServiceBenefitItem, StyledServiceBenefitSubTitle, StyledServiceBenefitTitle, StyledServiceBenefits, StyledServiceBenefitsContent, StyledServiceBenefitsList, StyledServiceBenefitsTop } from "./styled"

interface IProps {
    benefits: any
}

export const ServiceBenefits: React.FC<IProps> = ({ benefits }) => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()

    return (
        <StyledServiceBenefits>
            <StyledServiceBenefitsContent>
                <StyledServiceBenefitsTop>
                    <StyledServicePageTitle sx={{ color: '#000' }}>Benefits</StyledServicePageTitle>

                    <TrustPageOptionsQuoteButton onClick={() => setOpenQuoteDialog(true)}>Free quote</TrustPageOptionsQuoteButton>
                </StyledServiceBenefitsTop>

                <StyledServiceBenefitsList>
                    {benefits.map((item: any) => (
                        <StyledServiceBenefitItem
                            key={item.id}
                        >
                            <StyledBenefitIconCell
                                sx={{
                                    ['svg']: {
                                        transform: item.title !== 'On-time Delivery' ? 'scale(1.4)' : 'scale(1.6)'
                                    }
                                }}
                            >
                                {item.icon}
                            </StyledBenefitIconCell>
                            <StyledServiceBenefitTitle>
                                {item.title}
                            </StyledServiceBenefitTitle>

                            <StyledServiceBenefitSubTitle>
                                {item.subtitle}
                            </StyledServiceBenefitSubTitle>
                        </StyledServiceBenefitItem>
                    ))}
                </StyledServiceBenefitsList>
            </StyledServiceBenefitsContent>
        </StyledServiceBenefits>
    )
}