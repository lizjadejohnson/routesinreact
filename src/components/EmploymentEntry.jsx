import React from 'react'

//Specific entry info passed as props from Employment parent, for each indexed entry, destructure the entry data to be displayed as such:

const EmploymentEntry = ({ entry }) => {
  return (
    <div className="employmentEntry">
      <h3>{entry.company}</h3>
      <p>{entry.role} - {entry.years}</p>
      <p>{entry.description}</p>
    </div>
  )
}

export default EmploymentEntry
