import { StyledServiceCell, StyledServiceCellAbout, StyledServiceCellLeft, StyledServiceCellRight, StyledServiceCellTitle, StyledServiceIconCell, StyledServiceIconLink, StyledServicesPage, StyledServicesPageList, StyledServicesPageSubTitle, StyledServicesPageTitle, StyledServicesPageTop } from "./styled"
import { ReactComponent as ExpandIcon } from '../../resources/icons/expand.svg';

interface IProps {
    servicesList: any
};

export const Services: React.FC<IProps> = ({ servicesList }) => {

    return (
        <StyledServicesPage>
            <StyledServicesPageTop>
                <StyledServicesPageTitle>
                    Services we offer
                </StyledServicesPageTitle>

                <StyledServicesPageSubTitle>
                    Our services offer unique opportunities for those seeking to embark on a new journey.
                </StyledServicesPageSubTitle>
            </StyledServicesPageTop>

            <StyledServicesPageList>
                {servicesList.map((item: any) => (
                    <StyledServiceCell
                        key={item.id}
                    >
                        <StyledServiceCellLeft>
                            <StyledServiceCellTitle>
                                {item.title}
                            </StyledServiceCellTitle>

                            <StyledServiceCellAbout>
                                {item.subTitle}
                            </StyledServiceCellAbout>
                        </StyledServiceCellLeft>

                        <StyledServiceCellRight>
                            <StyledServiceIconCell>
                                {item.icon}
                            </StyledServiceIconCell>
                            <StyledServiceIconLink
                                to={item.link}
                                onClick={() => window.scrollTo({ top: 0 })}
                                sx={{
                                    background: 'rgba(3, 150, 83, 0.35)',
                                    border: '1px solid rgba(0, 48, 46, 0.0)',
                                    cursor: 'pointer',
                                    [':hover']: {
                                        border: '1px solid rgb(3, 150, 83)',
                                        background: '#fff'
                                    }
                                }}
                            >
                                <ExpandIcon />
                            </StyledServiceIconLink>
                        </StyledServiceCellRight>
                    </StyledServiceCell>
                ))}
            </StyledServicesPageList>
        </StyledServicesPage>
    )
}