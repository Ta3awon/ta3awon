import React, { useState } from 'react';
import './Volunteer.css';

const volunteerOpportunities = [
  { id: 1, title: 'Clean the Ocean', description: 'Help clean the ocean by participating in beach cleanup events.', location: 'Beachfront', date: '2024-09-15' },
  { id: 2, title: 'Rescue Dogs', description: 'Volunteer at the local animal shelter to help rescue and care for dogs.', location: 'Animal Shelter', date: '2024-09-22' },
  // Add more opportunities here
];

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const handleSelectOpportunity = (opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  return (
    <div className="volunteer-container">
      <h2>Volunteer Opportunities</h2>
      <div className="opportunity-list">
        {volunteerOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="opportunity-item"
            onClick={() => handleSelectOpportunity(opportunity)}
          >
            <h3>{opportunity.title}</h3>
            <p>{opportunity.description}</p>
            <p>Location: {opportunity.location}</p>
            <p>Date: {opportunity.date}</p>
          </div>
        ))}
      </div>

      {selectedOpportunity && (
        <div className="opportunity-details">
          <h2>Opportunity Details</h2>
          <h3>{selectedOpportunity.title}</h3>
          <p>{selectedOpportunity.description}</p>
          <p>Location: {selectedOpportunity.location}</p>
          <p>Date: {selectedOpportunity.date}</p>
          <button onClick={() => alert(`You have selected: ${selectedOpportunity.title}`)}>Confirm Participation</button>
        </div>
      )}
    </div>
  );
};

export default Volunteer;
 