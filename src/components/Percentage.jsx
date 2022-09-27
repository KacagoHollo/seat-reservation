import React, {useState} from 'react';
import seat from '../data/seat';

function Percentage({common, commonAv, values, setValues, available, setAvailable}) {


  const [percent, setPercent] = useState(1);
  const valueOptions = values.map(val => val)

  const [val, setVal] = useState(values.map(value => value))
  
  const setValue = () => {
    return val.map((value, key) => <option key={key} value={key}>{value+"%"}</option>)
  }

  console.log([Math.floor(Math.random()*available.length)])
const handleAvailable = () => {
  if (val[3]) {
  setAvailable(available[Math.floor(Math.random()*50)])
  return setAvailable([Math.random() < 0.5])
} 
return setAvailable(true)
}    

  return (
    <div>
        <label>Choose the percentage(%) of reserved seats</label>
        <select className="select" onChange={(e) => handleAvailable(e.target.value)}>
                    {setValue()}
                </select>
    </div>
  )
}

export default Percentage;