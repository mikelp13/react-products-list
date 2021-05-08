import React from 'react'

const SortSelect = ({handleSort}) => {
  return (
    <div>
      <select defaultValue="Sort" onChange={handleSort}>
        <option disabled value="Sort">
          Sort
        </option>
        <option value="name">Name</option>
        <option value="count">Count</option>
      </select>
    </div>
  )
}

export default SortSelect
