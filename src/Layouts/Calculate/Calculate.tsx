import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"
import { StyledCalculateSection, StyledCalculateSectionContent, StyledCalculateSectionLeft, StyledCalculateSectionQuoteButton, StyledCalculateSectionRight, StyledCalculateSectionSubTitle, StyledCalculateSectionTitle } from "./styled"

export const CalculateSection: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()

    return (
        <StyledCalculateSection>
            <StyledCalculateSectionContent>
                <StyledCalculateSectionLeft>
                    <StyledCalculateSectionTitle>
                        Calculate your move for free!
                    </StyledCalculateSectionTitle>

                    <StyledCalculateSectionSubTitle>
                        Get an estimate for your move right now! Call us to consult with our experts about your move.
                    </StyledCalculateSectionSubTitle>
                </StyledCalculateSectionLeft>

                <StyledCalculateSectionRight>
                    <StyledCalculateSectionQuoteButton onClick={() => setOpenQuoteDialog(true)}>
                        Get a quote
                    </StyledCalculateSectionQuoteButton>
                </StyledCalculateSectionRight>
            </StyledCalculateSectionContent>
        </StyledCalculateSection>
    )
}