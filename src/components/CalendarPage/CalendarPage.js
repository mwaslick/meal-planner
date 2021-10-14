import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarPage.css';

export default function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
