import React from 'react';
import EducationEntry from '../EducationEntry';

//Education history received as props from App.jsx:
const Education = ({ history }) => {
    //Make a map of all our education history entries, make an EducationEntry component for each:
  return (
    <div className="educationHistory">
      <h2>Education History</h2>
      {history.map(entry => <EducationEntry key={entry.id} entry={entry} />)}
    </div>
  )
}

export default Education
