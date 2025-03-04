import React, { useState, useEffect } from 'react';

const ScholarshipFinder = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const fetchScholarships = async () => {
      const response = await fetch('/api/scholarships');
      const data = await response.json();
      setScholarships(data);
    };

    fetchScholarships();
  }, []);

  return (
    <div>
      <h2>Scholarship Finder</h2>
      <ul>
        {scholarships.map(scholarship => (
          <li key={scholarship.id}>{scholarship.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScholarshipFinder;
