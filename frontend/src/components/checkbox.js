import React, { useState } from "react"

const Checkbox = ({}) => {
  const [checked, setChecked] = useState(false)
  let handleCheck = () => {
    setChecked(!checked)
  }
  console.log(checked)
  return (
    <div className="checkbox-div">
      <input type="checkbox" onClick={handleCheck} checked={checked} />
    </div>
  )
}

Checkbox.defaultProps = {}

export default Checkbox
