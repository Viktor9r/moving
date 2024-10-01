import { useState } from "react";
import { StyledFieldBlockInput, StyledFieldBlockTextArea, StyledFieldBlockTitle, StyledMainPageFieldBlock } from "../MainPage/styled"
import { StyledFormInputsFirstLine, StyledFormInputsFirstLineLeft, StyledFormPage, StyledFormPageBottom, StyledFormPageBottomLeft, StyledFormPageBottomLeftBottom, StyledFormPageBottomLeftBottomBlock, StyledFormPageBottomLeftContact, StyledFormPageBottomLeftTitle, StyledFormPageBottomRight, StyledFormPageBottomTitle, StyledFormPageFieldsWrap, StyledFormPageTitle, StyledFormPageTop, StyledFormSubmitButton } from "./styled"
import { format } from "date-fns";
import '../MainPage/style.scss'
import { PhoneInput } from 'react-international-phone';
import '../MainPage/phoneStyles.scss'
import { Alert, Snackbar } from "@mui/material";
import { CalendarDialog } from "../Dialogs/CalendarDialog/CalendarDialog";

export const FormPage: React.FC = () => {
    const [error, setError] = useState('');
    const [isSucces, setIsSuccess] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false)

    const [formData, setFormData] = useState({
        zip12: '',
        zip22: '',
        name2: '',
        email2: '',
        phone2: '',
        message2: '',
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
            phone2: phone
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

        const sendZip1 = formData.zip12;
        const sendZip2 = formData.zip22;
        const sendName = formData.name2;
        let sendDate = '';
        if (formData.date) {
            sendDate = format(formData.date, 'dd MMM, yyyy');
        }
        const sendEmail = formData.email2;
        const sendPhone = formData.phone2;
        const sendMessage = formData.message2;

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
            zip12: '',
            zip22: '',
            name2: '',
            email2: '',
            phone2: '',
            message2: '',
            date: null
        });
    };

    return (
        <StyledFormPage>
            <StyledFormPageTop>
                <StyledFormPageTitle>
                    Fill out the form and get an accurate cost calculation from us!
                </StyledFormPageTitle>
            </StyledFormPageTop>

            <StyledFormPageBottom>
                <StyledFormPageBottomLeft>
                    <StyledFormPageBottomTitle>
                        Contacts
                    </StyledFormPageBottomTitle>

                    <StyledFormPageBottomLeftBottom>
                        <StyledFormPageBottomLeftBottomBlock
                        >
                            <StyledFormPageBottomLeftTitle>
                                Email
                            </StyledFormPageBottomLeftTitle>

                            <StyledFormPageBottomLeftContact
                                onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                                to=''
                            >
                                info@fcmmovers.com
                            </StyledFormPageBottomLeftContact>
                        </StyledFormPageBottomLeftBottomBlock>

                        <StyledFormPageBottomLeftBottomBlock>
                            <StyledFormPageBottomLeftTitle>
                                Phone
                            </StyledFormPageBottomLeftTitle>

                            <StyledFormPageBottomLeftContact
                                to='tel:4378989777'
                            >
                                +1 (437) 898-9777
                            </StyledFormPageBottomLeftContact>
                        </StyledFormPageBottomLeftBottomBlock>
                    </StyledFormPageBottomLeftBottom>
                </StyledFormPageBottomLeft>

                <StyledFormPageBottomRight onSubmit={onSubmit}>
                    <StyledFormPageBottomTitle>
                        Form
                    </StyledFormPageBottomTitle>

                    <StyledFormPageFieldsWrap>
                        <StyledFormInputsFirstLine>
                            <StyledMainPageFieldBlock
                                sx={{
                                    minWidth: 'calc(100%/4 - 8px)',
                                    maxWidth: 'calc(100%/4 - 8px)',
                                }}
                            >
                                <StyledFieldBlockTitle htmlFor="zip12">
                                    Landing address*
                                </StyledFieldBlockTitle>

                                <StyledFieldBlockInput
                                    id="zip12"
                                    placeholder="ZIP code"
                                    required
                                    onChange={handleInputChange}
                                    value={formData.zip12}
                                    name="zip12"
                                    sx={{
                                        height: '40px'
                                    }}
                                />
                            </StyledMainPageFieldBlock>

                            <StyledMainPageFieldBlock
                                sx={{
                                    minWidth: 'calc(100%/4 - 8px)',
                                    maxWidth: 'calc(100%/4 - 8px)',
                                }}
                            >
                                <StyledFieldBlockTitle htmlFor="zip22">
                                    Where are we going?*
                                </StyledFieldBlockTitle>

                                <StyledFieldBlockInput
                                    id="zip22"
                                    placeholder="ZIP code"
                                    required
                                    onChange={handleInputChange}
                                    value={formData.zip22}
                                    name="zip22"
                                    sx={{
                                        height: '40px'
                                    }}
                                />
                            </StyledMainPageFieldBlock>

                            <StyledMainPageFieldBlock
                                sx={{
                                    minWidth: 'calc(100%/4 - 8px)',
                                    maxWidth: 'calc(100%/4 - 8px)',
                                }}
                            >
                                <StyledFieldBlockTitle htmlFor="name2">
                                    Full name*
                                </StyledFieldBlockTitle>

                                <StyledFieldBlockInput
                                    id="name2"
                                    placeholder="Andrew Smith"
                                    required
                                    onChange={handleInputChange}
                                    value={formData.name2}
                                    name="name2"
                                    sx={{
                                        height: '40px'
                                    }}
                                />
                            </StyledMainPageFieldBlock>

                            <StyledMainPageFieldBlock
                                sx={{
                                    minWidth: 'calc(100%/4 - 8px)',
                                    maxWidth: 'calc(100%/4 - 8px)',
                                }}
                            >
                                <StyledFieldBlockTitle htmlFor="date">
                                    Moving Date*
                                </StyledFieldBlockTitle>

                                <StyledFieldBlockInput
                                    placeholder="Choose date"
                                    onClick={() => setOpenCalendar(true)}
                                    value={formData.date === null ? '' : format(formData.date, 'dd MMM, yyyy')}
                                    onChange={() => {}}
                                    sx={{
                                        height: '40px',
                                    }}
                                />
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
                                                height: '40px',
                                            }}
                                        />
                                    )}
                                </DatePicker> */}
                            </StyledMainPageFieldBlock>

                        </StyledFormInputsFirstLine>

                        <StyledFormInputsFirstLine>
                            <StyledFormInputsFirstLineLeft>
                                <StyledMainPageFieldBlock
                                    sx={{
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <StyledFieldBlockTitle htmlFor="email2">
                                        Email*
                                    </StyledFieldBlockTitle>

                                    <StyledFieldBlockInput
                                        id="email2"
                                        placeholder="example@gmail.com"
                                        required
                                        type="email"
                                        onChange={handleInputChange}
                                        value={formData.email2}
                                        name="email2"
                                        sx={{
                                            height: '40px'
                                        }}
                                    />
                                </StyledMainPageFieldBlock>

                                <StyledMainPageFieldBlock
                                    sx={{
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        ['input']: {
                                            height: '48px !important'
                                        }
                                    }}
                                >
                                    <StyledFieldBlockTitle htmlFor="phone2">
                                        Phone*
                                    </StyledFieldBlockTitle>
                                    <PhoneInput
                                        defaultCountry="ca"
                                        value={formData.phone2}
                                        onChange={handlePhone}
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLineLeft>

                            <StyledMainPageFieldBlock
                                sx={{
                                    minWidth: 'calc(75% - 6px)',
                                    maxWidth: 'calc(75% - 6px)'
                                }}
                            >
                                <StyledFieldBlockTitle htmlFor="details2">
                                    Message
                                </StyledFieldBlockTitle>

                                <StyledFieldBlockTextArea
                                    id="details2"
                                    placeholder="Enter your message..."
                                    onChange={handleInputChange}
                                    value={formData.message2}
                                    name="message2"
                                    sx={{
                                        height: '100%'
                                    }}
                                />
                            </StyledMainPageFieldBlock>
                        </StyledFormInputsFirstLine>

                        <StyledFormSubmitButton
                            type="submit"
                        >
                            Send request
                        </StyledFormSubmitButton>
                    </StyledFormPageFieldsWrap>
                </StyledFormPageBottomRight>
            </StyledFormPageBottom>

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
        </StyledFormPage>
    )
}