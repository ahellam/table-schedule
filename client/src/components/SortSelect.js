import React from 'react'

const SortSelect = ({ firstOrLast, setFirstOrLast}) => {
  return (
    <div className="m-4 font-normal">
        <label>
          Sort by:
          <select
            className="border-[1px] border-black rounded-md ml-1"
            value={firstOrLast}
            onChange={(e) => setFirstOrLast(e.target.value)}
          >
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
          </select>
        </label>
      </div>
  )
}

export default SortSelect