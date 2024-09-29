import { Dialog } from "@mui/material";
import { enUS } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css"; // Ensure styles are loaded
import { StyledFieldBlockInput } from "../../MainPage/styled";
import "../../MainPage/style.scss";

interface IProps {
  open: boolean;
  onClose: () => void;
  date: Date | null;
  handleDate: (date: Date | null) => void;
}

export const CalendarDialog: React.FC<IProps> = ({
  open,
  onClose,
  date,
  handleDate,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={"sm"}
      fullWidth
      sx={{
        [".MuiPaper-root"]: {
          background: "#00302E",
          borderRadius: "20px",
          color: "#fff",
          paddingBottom: "20px",
        },
      }}
    >
      {/* Render the calendar directly without relying on the input */}
      <div className="calendar-container" style={{ padding: "20px" }}>
        <DatePickerCalendar
          date={date || undefined}
          onDateChange={handleDate}
          locale={enUS}
          minimumDate={new Date()}
        />
      </div>
    </Dialog>
  );
};
