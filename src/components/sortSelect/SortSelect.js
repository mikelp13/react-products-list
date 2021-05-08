import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getProducts } from '../../redux/selectors/productSelectors'

const SortSelect = ({handleSort}) => {

  // if (sort === 'name') {
  //   return a.name.localeCompare(b.name)
  // } else if (sort === 'count') {
  //   return a.count - b.count
  // } else {
  //   return 0
  // }



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
