import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const UpcomingEvents = styled.div`
  margin-top: 20px;
`;

const Event = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const EventImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

const EventPortal = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const events = [
      { value: 'event1', text: 'Event 1' },
      { value: 'event2', text: 'Event 2' },
      { value: 'event3', text: 'Event 3' },
      { value: 'event4', text: 'Event 4' },
    ];

    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.value);
      return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
    });

    setUpcomingEvents(filteredEvents);
    setSubmitted(true);
  };

  return (
    <Container>
      <Title>College Event Portal</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="start-date">Start Date:</Label>
        <Input
          type="date"
          id="start-date"
          name="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <Label htmlFor="end-date">End Date:</Label>
        <Input
          type="date"
          id="end-date"
          name="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <Label htmlFor="events">Select Event:</Label>
        <Select
          id="events"
          name="events"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
          <option value="event4">Event 4</option>
        </Select>
        <SubmitButton type="submit" value="Submit" />
      </Form>
      {submitted && (
        <UpcomingEvents>
          <h2>Upcoming Events</h2><br/>
          {upcomingEvents.length > 0 ? (
            <ul>
              {upcomingEvents.map((event) => (
                <Event key={event.value}>
                  <EventImage src={`https://via.placeholder.com/100`} alt={event.text} />
                  <span>{event.text}</span>
                </Event>
              ))}
            </ul>
          ) : (
            <p>Symposium 15-02-2024</p>
          )}
        </UpcomingEvents>
      )}
    </Container>
  );
};

export default EventPortal;
