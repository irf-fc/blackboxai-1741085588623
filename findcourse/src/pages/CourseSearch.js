import React, { useState, useEffect } from 'react';

const CourseSearch = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course Search</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSearch;
