'use strict';

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    const dayStartDate = new Date(Date.parse(dayStart));
    const dayEndDate = new Date(Date.parse(dayEnd));
    const startMeetingDate = new Date(Date.parse(startTime));
    const endMeetingDate = new Date(Date.parse(startTime));
    //endMeetingDate.setMinutes(durationMinutes);
    console.log(startMeetingDate.getTime());
    const meetingInBounds = (startMeetingDate.getTime() >= dayStartDate.getTime() && endMeetingDate.getTime() <= dayEndDate.getTime());
    console.log(meetingInBounds);
}

scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false