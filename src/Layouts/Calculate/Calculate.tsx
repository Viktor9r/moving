import { useMediaQuery } from "@mui/material";
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"
import { StyledCalculateSection, StyledCalculateSectionContent, StyledCalculateSectionLeft, StyledCalculateSectionQuoteButton, StyledCalculateSectionRight, StyledCalculateSectionSubTitle, StyledCalculateSectionTitle } from "./styled"

export const CalculateSection: React.FC = () => {
    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

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
                    {!mobile && (
                        <StyledCalculateSectionQuoteButton onClick={() => setOpenQuoteDialog(true)}>
                            Get a quote
                        </StyledCalculateSectionQuoteButton>
                    )}
                </StyledCalculateSectionRight>
            </StyledCalculateSectionContent>
        </StyledCalculateSection>
    )
}