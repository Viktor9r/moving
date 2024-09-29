import { useState } from "react";
import { AppInnerContainer } from "../DesktopLayout/styled";
import {
    StyledCalendarButton,
    StyledFieldBlockInput,
    StyledFieldBlockTextArea,
    StyledFieldBlockTitle,
    StyledFormBottom,
    StyledFormSubmit,
    StyledMainPage,
    StyledMainPageFieldBlock,
    StyledMainPageForm,
    StyledMainPageFormTop,
    StyledMainPageSubTitle,
    StyledMainPageTitle,
    StyledMainPageTop
} from "./styled";
import { DatePicker } from 'react-nice-dates';
import { format } from "date-fns";
import { enUS } from 'date-fns/locale';
import { PhoneInput } from 'react-international-phone';
import './phoneStyles.scss';
import './style.scss';
import { Alert, Snackbar, useMediaQuery } from "@mui/material";
import { CalendarDialog } from "../Dialogs/CalendarDialog/CalendarDialog";

export const MainPage: React.FC = () => {
    const [error, setError] = useState('');
    const [isSucces, setIsSuccess] = useState(false);
    const mobile = useMediaQuery('(max-width:1000px)');
    const [openCalendar, setOpenCalendar] = useState(false)

    const [formData, setFormData] = useState({
        zip1: '',
        zip2: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        date: null
    });

    const handleDate = (date: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            date: date
        }));
    };

    const handlePhone = (phone: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            phone: phone
        }));
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    function onSubmit(e: any) {
        e.preventDefault();
        e.stopPropagation();

        const sendZip1 = formData.zip1;
        const sendZip2 = formData.zip2;
        const sendName = formData.name;
        let sendDate = '';
        if (formData.date) {
            sendDate = format(formData.date, 'dd MMM, yyyy');
        }
        const sendEmail = formData.email;
        const sendPhone = formData.phone;
        const sendMessage = formData.message;

        fetch("https://formcarry.com/s/P2EIggoyDQd", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ sendZip1, sendZip2, sendName, sendEmail, sendPhone, sendMessage, sendDate })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setIsSuccess(true);
                    setError('');
                    clearForm();
                } else {
                    setError(response.message);
                    setIsSuccess(false);
                }
            })
            .catch(error => {
                setError(error.message ? error.message : error);
                setIsSuccess(false);
            });
    }

    const clearForm = () => {
        setFormData({
            zip1: '',
            zip2: '',
            name: '',
            email: '',
            phone: '',
            message: '',
            date: null
        });
    };

    return (
        <StyledMainPage>
            <StyledMainPageTop>
                <StyledMainPageTitle>
                    The First-Class Experience in Moving!

                    {mobile && (
                        <div style={{ fontSize: '18px', fontWeight: 500 }}>
                            <br />
                            Get your free moving estimate.<br /> Fill out the form.
                        </div>
                    )}
                </StyledMainPageTitle>

                {!mobile && (
                    <StyledMainPageSubTitle>
                        Get your free moving estimate.<br /> Fill out the form below.
                    </StyledMainPageSubTitle>
                )}
            </StyledMainPageTop>

            {!mobile && (
                <StyledMainPageForm onSubmit={onSubmit}>
                    {mobile && (
                        <StyledMainPageSubTitle
                            sx={{
                                backdropFilter: 'none',
                                borderRadius: '0',
                                fontSize: '16px',
                                padding: '0',
                                fontWeight: 500,
                                transform: 'none',
                                mb: 1
                            }}
                        >
                            Calculate Moving costs.<br /> Fill out the form below.
                        </StyledMainPageSubTitle>
                    )}
                    <StyledMainPageFormTop>
                        <StyledMainPageFieldBlock>
                            <StyledFieldBlockTitle htmlFor="zip1">
                                Landing address*
                            </StyledFieldBlockTitle>

                            <StyledFieldBlockInput
                                id="zip1"
                                placeholder="ZIP code"
                                required
                                onChange={handleInputChange}
                                value={formData.zip1}
                                name="zip1"
                            />
                        </StyledMainPageFieldBlock>

                        <StyledMainPageFieldBlock>
                            <StyledFieldBlockTitle htmlFor="zip2">
                                Where are we going?*
                            </StyledFieldBlockTitle>

                            <StyledFieldBlockInput
                                id="zip2"
                                placeholder="ZIP code"
                                required
                                onChange={handleInputChange}
                                value={formData.zip2}
                                name="zip2"
                            />
                        </StyledMainPageFieldBlock>

                        <StyledMainPageFieldBlock>
                            <StyledFieldBlockTitle htmlFor="name">
                                Full name*
                            </StyledFieldBlockTitle>

                            <StyledFieldBlockInput
                                id="name"
                                placeholder="Andrew Smith"
                                required
                                onChange={handleInputChange}
                                value={formData.name}
                                name="name"
                            />
                        </StyledMainPageFieldBlock>

                        <StyledMainPageFieldBlock>
                            <StyledFieldBlockTitle htmlFor="email">
                                Email*
                            </StyledFieldBlockTitle>

                            <StyledFieldBlockInput
                                id="email"
                                placeholder="example@gmail.com"
                                required
                                type="email"
                                onChange={handleInputChange}
                                value={formData.email}
                                name="email"
                            />
                        </StyledMainPageFieldBlock>

                        <StyledMainPageFieldBlock>
                            <StyledFieldBlockTitle htmlFor="phone">
                                Phone*
                            </StyledFieldBlockTitle>
                            <PhoneInput
                                defaultCountry="ca"
                                value={formData.phone}
                                onChange={handlePhone}
                            />
                        </StyledMainPageFieldBlock>

                        <StyledMainPageFieldBlock>
                            <StyledFieldBlockTitle htmlFor="date">
                                Moving Date*
                            </StyledFieldBlockTitle>

                            {/* <DatePicker
                                date={formData.date || undefined}
                                onDateChange={handleDate}
                                locale={enUS}
                                minimumDate={new Date()}
                            >
                                {({ inputProps, focused }) => (
                                    <StyledFieldBlockInput
                                        className={'input' + (focused ? ' -focused' : '')}
                                        {...inputProps}
                                        placeholder="Choose date"
                                        sx={{
                                            width: 'calc(100% - 30px)'
                                        }}
                                    />
                                )}
                            </DatePicker> */}
                            <StyledFieldBlockInput
                                placeholder="Choose date"
                                onClick={() => setOpenCalendar(true)}
                                value={formData.date === null ? '' : format(formData.date, 'dd MMM, yyyy')}
                                sx={{
                                    width: 'calc(100% - 30px)'
                                }}
                            />
                        </StyledMainPageFieldBlock>
                    </StyledMainPageFormTop>

                    <StyledFormBottom>
                        <StyledMainPageFieldBlock
                            sx={{
                                minWidth: 'calc(50% - 6px)',
                                maxWidth: 'calc(50% - 6px)'
                            }}
                        >
                            <StyledFieldBlockTitle htmlFor="details">
                                Message
                            </StyledFieldBlockTitle>

                            <StyledFieldBlockTextArea
                                id="details"
                                placeholder="Enter your message..."
                                onChange={handleInputChange}
                                value={formData.message}
                                name="message"
                            />
                        </StyledMainPageFieldBlock>

                        <StyledFormSubmit type="submit">
                            Send Request
                        </StyledFormSubmit>
                    </StyledFormBottom>
                </StyledMainPageForm>
            )}

            {/* Snackbar for success or error */}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isSucces || !!error}
                autoHideDuration={6000}
                onClose={() => {
                    setIsSuccess(false);
                    setError('');
                }}
            >
                {isSucces ? (
                    <Alert
                        onClose={() => setIsSuccess(false)}
                        severity="success"
                        sx={{
                            borderRadius: '20px'
                        }}
                    >
                        Form submitted. Thank you!
                    </Alert>
                ) : (
                    <Alert
                        onClose={() => setError('')}
                        severity="error"
                        sx={{
                            borderRadius: '20px'
                        }}
                    >
                        {error}
                    </Alert>
                )}
            </Snackbar>

            {openCalendar && (
                <CalendarDialog
                    open={openCalendar}
                    onClose={() => setOpenCalendar(false)} // Corrected here
                    date={formData.date}
                    handleDate={handleDate}
                />
            )}
        </StyledMainPage>
    );
};
