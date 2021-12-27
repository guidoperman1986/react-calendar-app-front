import React, {useState} from 'react'
import { Navbar } from '../Ui/Navbar'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages-espanol';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { clearActiveEvent, setActive } from '../../actions/events';
import { AddNewFab } from '../Ui/AddNewFab';
import { DeleteEventFab } from '../Ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const CalendarScreen = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar)

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(setActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }


    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }

        return {
            style
        }

    }

    const onSelectSlot = (e) => {
        dispatch(clearActiveEvent());
    }

    return (
        <div className="calendar-screen">
           <Navbar /> 

            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              messages={messages}
              eventPropGetter={eventStyleGetter}
              onSelectEvent={onSelectEvent}
              onDoubleClickEvent={onDoubleClick}
              onView={onViewChange}
              view={lastView}
              onSelectSlot={onSelectSlot}
              selected={true}
              components={{
                  event: CalendarEvent
              }}
            />

            <AddNewFab />

            {
                activeEvent &&
                    <DeleteEventFab />
            }

            <CalendarModal />
        </div>
    )
}
