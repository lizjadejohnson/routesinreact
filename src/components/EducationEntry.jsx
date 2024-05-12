import React from 'react'

//Specific entry info passed as props from Education parent, for each indexed entry, destructure the entry data to be displayed as such:
const EducationEntry = ({ entry }) => {
  return (
    <div className="educationEntry">
      <h3>{entry.school}</h3>
      <p>{entry.degree} - {entry.years}</p>
      <p>{entry.description}</p>
    </div>
  )
}

export default EducationEntry
