import { Alert, Dialog, Snackbar, useMediaQuery } from "@mui/material"
import { format } from "date-fns";
import { useState } from "react";
import { StyledDialogForm, StyledDialogTitle, StyledDialogTop, StyledFlexContainer } from "./styled";
import { CloseRounded } from "@mui/icons-material";
import { StyledFieldBlockInput, StyledFieldBlockTextArea, StyledFieldBlockTitle, StyledMainPageFieldBlock } from "../../MainPage/styled";
import { DatePicker } from "react-nice-dates";
import { enUS } from "date-fns/locale";
import { PhoneInput } from 'react-international-phone';
import '../../MainPage/style.scss'
import '../../MainPage/phoneStyles.scss'
import { StyledFormSubmitButton } from "../../Form/styled";
import { CalendarDialog } from "../CalendarDialog/CalendarDialog";

interface IProps {
    open: any,
    onClose: any
}

export const QuoteDialog: React.FC<IProps> = ({ open, onClose }) => {
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
    const mobile = useMediaQuery("(max-width:1000px)");

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
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={'sm'}
            fullWidth
            sx={{
                ['.MuiPaper-root']: {
                    background: '#00302E',
                    borderRadius: '20px',
                    color: '#fff',
                    paddingBottom: '20px'
                }
            }}
        >
            <StyledDialogTop>
                <StyledDialogTitle>Get a Quote</StyledDialogTitle>

                <CloseRounded onClick={() => { clearForm(); onClose() }} />
            </StyledDialogTop>

            <StyledDialogForm onSubmit={onSubmit}>
                <StyledFlexContainer
                    sx={{
                        ['@media (max-width: 1000px)']: {
                            flexDirection: 'row'
                        }
                    }}
                >
                    <StyledMainPageFieldBlock
                        sx={{
                            minWidth: 'calc(50% - 6px) !important',
                            maxWidth: 'calc(50% - 6px) !important'
                        }}
                    >
                        <StyledFieldBlockTitle htmlFor="zip13">
                            Landing address*
                        </StyledFieldBlockTitle>

                        <StyledFieldBlockInput
                            id="zip13"
                            placeholder="ZIP code"
                            required
                            onChange={handleInputChange}
                            value={formData.zip12}
                            name="zip12"
                        />
                    </StyledMainPageFieldBlock>

                    <StyledMainPageFieldBlock
                        sx={{
                            minWidth: 'calc(50% - 6px) !important',
                            maxWidth: 'calc(50% - 6px) !important'
                        }}
                    >
                        <StyledFieldBlockTitle htmlFor="zip23">
                            {mobile ? 'Destination*' : 'Where are we going?*'}
                        </StyledFieldBlockTitle>

                        <StyledFieldBlockInput
                            id="zip23"
                            placeholder="ZIP code"
                            required
                            onChange={handleInputChange}
                            value={formData.zip22}
                            name="zip22"
                        />
                    </StyledMainPageFieldBlock>
                </StyledFlexContainer>

                <StyledMainPageFieldBlock
                    sx={{
                        minWidth: '100%',
                        maxWidth: '100%',
                    }}
                >
                    <StyledFieldBlockTitle htmlFor="name23">
                        Full name*
                    </StyledFieldBlockTitle>

                    <StyledFieldBlockInput
                        id="name23"
                        placeholder="Andrew Smith"
                        required
                        onChange={handleInputChange}
                        value={formData.name2}
                        name="name2"
                    />
                </StyledMainPageFieldBlock>

                <StyledMainPageFieldBlock
                    sx={{
                        minWidth: '100%',
                        maxWidth: '100%',
                    }}
                >
                    <StyledFieldBlockTitle htmlFor="date">
                        Moving Date*
                    </StyledFieldBlockTitle>

                    <StyledFieldBlockInput
                        onClick={() => setOpenCalendar(true)}
                        style={{ width: 'calc(100% - 14px)', padding: '4px 0 4px 14px' }}
                        placeholder="Choose date"
                        value={formData.date === null ? '' : formData.date}
                    />

                    {/* <DatePicker
                        date={formData.date || undefined}
                        onDateChange={handleDate}
                        locale={enUS}
                        minimumDate={new Date()}
                    >
                        {({ inputProps, focused }) => (
                            <StyledFieldBlockInput
                                style={{ width: 'calc(100% - 14px)', padding: '4px 0 4px 14px' }}
                                className={'input' + (focused ? ' -focused' : '')}
                                {...inputProps}
                                placeholder="Choose date"
                            />
                        )}
                    </DatePicker> */}
                </StyledMainPageFieldBlock>

                <StyledFlexContainer>
                    <StyledMainPageFieldBlock
                        sx={{
                            minWidth: mobile ? '100%' : 'calc(50% - 6px)',
                            maxWidth: mobile ? '100%' : 'calc(50% - 6px)'
                        }}
                    >
                        <StyledFieldBlockTitle htmlFor="email23">
                            Email*
                        </StyledFieldBlockTitle>

                        <StyledFieldBlockInput
                            id="email23"
                            placeholder="example@gmail.com"
                            required
                            type="email"
                            onChange={handleInputChange}
                            value={formData.email2}
                            name="email2"
                        />
                    </StyledMainPageFieldBlock>

                    <StyledMainPageFieldBlock
                        sx={{
                            minWidth: mobile ? '100%' : 'calc(50% - 6px)',
                            maxWidth: mobile ? '100%' : 'calc(50% - 6px)'
                        }}
                    >
                        <StyledFieldBlockTitle htmlFor="phone23">
                            Phone*
                        </StyledFieldBlockTitle>
                        <PhoneInput
                            defaultCountry="ca"
                            value={formData.phone2}
                            onChange={handlePhone}
                        />
                    </StyledMainPageFieldBlock>
                </StyledFlexContainer>

                <StyledMainPageFieldBlock
                    sx={{
                        minWidth: '100%',
                        maxWidth: '100%',
                    }}
                >
                    <StyledFieldBlockTitle htmlFor="details23">
                        Message
                    </StyledFieldBlockTitle>

                    <StyledFieldBlockTextArea
                        id="details23"
                        placeholder="Enter your message..."
                        onChange={handleInputChange}
                        value={formData.message2}
                        name="message2"
                        sx={{
                            height: '100px'
                        }}
                    />
                </StyledMainPageFieldBlock>

                <StyledFormSubmitButton
                    sx={{
                        height: '56px'
                    }}
                    type="submit"
                >
                    Send request
                </StyledFormSubmitButton>
            </StyledDialogForm>

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
        </Dialog>
    )
}