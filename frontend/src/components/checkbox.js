import React, { useState } from "react"

const Checkbox = ({value, handleCheck}) => {
  const [checked, setChecked] = useState(false)
  let handleChecked = () => {
    setChecked(!checked)
  }
  return (
    <div className="checkbox-div">
      <input type="checkbox" onClick={handleChecked} defaultChecked={checked} value={value}  onChange={handleCheck(value, checked)}/>
    </div>
  )
}

Checkbox.defaultProps = {}

export default Checkbox
