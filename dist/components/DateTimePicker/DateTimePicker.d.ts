import React, { ReactNode } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
interface Props {
    children?: ReactNode;
    dateFormat?: string;
    dateFormatCalendar?: string;
    disabled?: boolean;
    dropdownMode: 'scroll' | 'select';
    endDate?: Date;
    excludeDates?: Date[];
    includeDates?: Date[];
    inline?: boolean;
    locale?: string;
    maxDate?: Date;
    maxTime?: Date;
    minDate?: Date;
    minTime?: Date;
    monthsShown?: number;
    className?: string;
    onChange: (date: Date, event: React.ChangeEvent<HTMLInputElement>) => void;
    selected?: Date;
    selectsEnd?: boolean;
    selectsStart?: boolean;
    showMonthDropdown?: boolean;
    showTimeSelect?: boolean;
    showYearDropdown?: boolean;
    showTimeSelectOnly?: boolean;
    timeFormat?: string;
    timeIntervals?: number;
    timeCaption?: string;
    todayButton?: string;
    startDate?: Date;
    withPortal?: boolean;
}
declare const DateTimePicker: {
    (props: Props): JSX.Element;
    defaultProps: {
        dateFormat: string;
        locale: string;
        dateFormatCalendar: string;
        dropdownMode: string;
        timeIntervals: number;
        withPortal: boolean;
    };
};
export { DateTimePicker };
