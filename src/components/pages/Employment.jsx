import React from 'react';
import EmploymentEntry from '../EmploymentEntry'

//Employment history received as props from App.jsx:
const Employment = ({ history }) => {
    //Make a map of all our employment history entries, make an EmploymentEntry component for each:
  return (
    <div className="employmentHistory">
      <h2>Work History</h2>
      {history.map(entry => <EmploymentEntry key={entry.id} entry={entry} />)}
    </div>
  )
}

export default Employment
