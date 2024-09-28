import React, { useEffect, useState } from "react"
import { StyledFAQPageQuestionsList, StyledFAQPageCell, StyledFAQPageCellTop, StyledFAQPageCellLeft, StyledFAQIconCell, StyledFAQIconCellNumber, StyledFAQCellTitle, StyledFAQCellAnswer } from "../FAQ/styled"
import { ReactComponent as PlusIcon } from '../../resources/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../resources/icons/minus.svg';
import { StyledFAQCategory } from "./styled";

interface IProps {
    questions: any,
    category: string
}

export const QuestionsList: React.FC<IProps> = ({ questions, category }) => {
    const [openedIds, setOpenedIds] = useState<any>([])

    const addOpenedId = (newId: number) => {
        const newIds = [...openedIds, newId];

        setOpenedIds(newIds);
    }

    const removeOpenedId = (removeId: number) => {
        const newIds = openedIds.filter((id: number) => id != removeId)

        setOpenedIds(newIds);
    }

    useEffect(() => { }, [setOpenedIds])

    return (
        <StyledFAQPageQuestionsList sx={{ maxHeight: 'fit-content' }}>
            <StyledFAQCategory>{category}</StyledFAQCategory>
            {questions.map((item: any, index: number) => (
                <StyledFAQPageCell
                    key={item.id}
                >
                    <StyledFAQPageCellTop
                        key={item.id}
                    >
                        <StyledFAQPageCellLeft>
                            <StyledFAQIconCell>
                                <StyledFAQIconCellNumber>
                                    {index + 1}
                                </StyledFAQIconCellNumber>
                            </StyledFAQIconCell>

                            <StyledFAQCellTitle>
                                {item.question}
                            </StyledFAQCellTitle>
                        </StyledFAQPageCellLeft>

                        <StyledFAQIconCell
                            onClick={() => {
                                if (openedIds.some((id: number) => id === item.id)) {
                                    removeOpenedId(item.id)
                                } else {
                                    addOpenedId(item.id)
                                }
                            }}
                            sx={{
                                background: openedIds.some((id: number) => id === item.id) ? '#fff' : '#00302E',
                                cursor: 'pointer',
                                border: '2px solid #00302E',
                                alignSelf: 'center',
                                ['svg']: {
                                    fill: openedIds.some((id: number) => id === item.id) ? '#00302E' : '#fff',
                                    width: '44px',
                                    height: '44px'
                                },

                                [':hover']: {
                                    background: '#fff',

                                    ['svg']: {
                                        fill: '#00302E',
                                    },
                                }
                            }}
                        >
                            {openedIds.some((id: number) => id === item.id) ? (
                                <MinusIcon />
                            ) : (
                                <PlusIcon />
                            )}
                        </StyledFAQIconCell>
                    </StyledFAQPageCellTop>

                    {openedIds.some((id: number) => id === item.id) && (
                        <StyledFAQCellAnswer>
                            {item.answer.split('\n').map((line: any, index: any) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </StyledFAQCellAnswer>
                    )}
                </StyledFAQPageCell>
            ))}
        </StyledFAQPageQuestionsList>
    )
}