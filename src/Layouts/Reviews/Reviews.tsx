import { ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight, StarRateRounded } from "@mui/icons-material"
import { StyledReviewCell, StyledReviewCellBottom, StyledReviewCellBottomLeft, StyledReviewCellBottomRight, StyledReviewCellBottomRightPlaceholder, StyledReviewCellDate, StyledReviewCellName, StyledReviewCellReview, StyledReviewCellTop, StyledReviewsIconCell, StyledReviewsRow, StyledReviewsSection, StyledReviewsSectionRight, StyledReviewsSectionTitle, StyledReviewsSectionTop } from "./styled"
import alex from '../../resources/images/alex.png'
import { useEffect, useRef, useState } from "react";
import { Rating } from "@mui/material";

export const ReviewsSection: React.FC = () => {
    const reviewsList = [
        {
            id: 1,
            name: "Valentine Okoye",
            review: "Great company. My wife and I loved their intercity services. Very reliable and meticulous in handling properties. Highly recommended.",
            photo: null,
            rating: 5,
            date: '12 September, 2024',
            link: 'https://maps.app.goo.gl/ZQCqzc2MPQvf9tHU8?g_st=it'
        },
        {
            id: 2,
            name: "Yevhen Miahkov",
            review: "Amazing service, thank you guys! I am glad I picked you for my moving! 10/10 recommend",
            photo: null,
            rating: 5,
            date: '12 September, 2024',
            link: 'https://maps.app.goo.gl/hgzZ73sicNd2oXeP6?g_st=it'
        },
        {
            id: 3,
            name: "Josh L",
            review: "Thanks Alex and a team! Fast, reliable and positive guys! Looking forward to move with you again!",
            photo: null,
            rating: 5,
            date: '14 September, 2024',
            link: 'https://maps.app.goo.gl/BTSRTeJ6h6Sid4eZ8'
        },
    ];

    const scrollableRef = useRef<HTMLDivElement | null>(null);
    const [isScrollVisible, setIsScrollVisible] = useState<boolean>(false);
    const [itemWidth, setItemWidth] = useState<number>(0);
    const [isAtStart, setIsAtStart] = useState<boolean>(true);
    const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

    useEffect(() => {
        checkScroll();
        calculateItemWidth();
        window.addEventListener('resize', calculateItemWidth);

        if (scrollableRef.current) {
            scrollableRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', calculateItemWidth);
            if (scrollableRef.current) {
                scrollableRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const calculateItemWidth = (): void => {
        if (scrollableRef.current && scrollableRef.current.firstElementChild) {
            const firstItem = scrollableRef.current.firstElementChild as HTMLElement;
            setItemWidth(firstItem.offsetWidth);
        }
    };

    const checkScroll = (): void => {
        if (
            scrollableRef.current &&
            scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
        ) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    };

    // Check if scroll is at start or end and update button styles accordingly
    const handleScroll = (): void => {
        if (scrollableRef.current) {
            const scrollLeft = scrollableRef.current.scrollLeft;
            const maxScrollLeft = scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth;

            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft >= maxScrollLeft);
        }
    };

    const onScroll = (offsetMultiplier: number): void => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollBy({
                left: itemWidth * offsetMultiplier,
                behavior: 'smooth',
            });
        }
    };

    return (
        <StyledReviewsSection>
            <StyledReviewsSectionTop>
                <StyledReviewsSectionTitle>
                    Our customers say
                </StyledReviewsSectionTitle>

                <StyledReviewsSectionRight>
                    <StyledReviewsIconCell
                        onClick={() => onScroll(-1)}
                        style={{
                            backgroundColor: isAtStart ? 'gray' : '#00302E',
                            border: isAtStart ? '2px solid gray' : '2px solid #00302E',
                        }}
                    >
                        <KeyboardArrowLeft />
                    </StyledReviewsIconCell>
                    <StyledReviewsIconCell
                        onClick={() => onScroll(1)}
                        style={{
                            backgroundColor: isAtEnd ? 'gray' : '#00302E',
                            border: isAtEnd ? '2px solid gray' : '2px solid #00302E'
                        }}
                    >
                        <KeyboardArrowRight />
                    </StyledReviewsIconCell>
                </StyledReviewsSectionRight>
            </StyledReviewsSectionTop>

            <StyledReviewsRow ref={scrollableRef}>
                {reviewsList.map((item: any) => {
                    return (
                        <StyledReviewCell
                            to={item.link}
                            key={item.id}
                            target="_new"
                        >
                            <StyledReviewCellTop>
                                <StyledReviewCellDate>
                                    {item.date}
                                </StyledReviewCellDate>
                                <StyledReviewCellReview>
                                    {item.review}
                                </StyledReviewCellReview>
                            </StyledReviewCellTop>

                            <StyledReviewCellBottom>
                                <StyledReviewCellBottomLeft>
                                    <StyledReviewCellName>
                                        {item.name}
                                    </StyledReviewCellName>

                                    <Rating
                                        name="read-only"
                                        value={item.rating}
                                        readOnly
                                        icon={<StarRateRounded fontSize="inherit" style={{transform: 'scale(1.2)', fill: '#00302E'}} />}
                                        emptyIcon={<StarRateRounded fontSize="inherit" style={{transform: 'scale(1.2)'}} />}
                                    />
                                </StyledReviewCellBottomLeft>

                                <StyledReviewCellBottomRight
                                    sx={{
                                        background: item.photo ? `url(${item.photo})` : '#00302E',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                    }}
                                >
                                    {!item.photo && (
                                        <StyledReviewCellBottomRightPlaceholder>
                                            {item.name[0]}
                                        </StyledReviewCellBottomRightPlaceholder>
                                    )}
                                </StyledReviewCellBottomRight>
                            </StyledReviewCellBottom>
                        </StyledReviewCell>
                    );
                })}
            </StyledReviewsRow>
        </StyledReviewsSection>
    )
}