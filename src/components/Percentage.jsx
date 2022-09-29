import React, {useState} from 'react';
import seat from '../data/seat';


function Percentage({values, setValues, available, setAvailable}) {
  
  const [val] = useState(values.map(value => value))
  
  const setValue = () => {
    return val.map((value, key) => <option key={key} value={key}>{value+"%"}</option>)
  }
  let Seat = seat.allSection; 
  console.log(Seat);

// console.log(seat.allSection);

const updateSeats = (randomIndexes) => {
  setAvailable("false")
  return seat.allSection.map((seat, index) => {

    console.log(randomIndexes)
    console.log(index)
    if (randomIndexes.includes(index)) {
      setAvailable("false")
      seat.isAvailable = false
      console.log(seat);
      return seat
    }
    setAvailable("true")
    seat.isAvailable = true
    console.log(seat.isAvailable)
    return seat
  })
}

const handleAvailable = (countReservedSeats) => {

      if (countReservedSeats === 100) {
      console.log(countReservedSeats);
      setAvailable((available) => !available)
      console.log(available);
      return seat.allSection.forEach(seat => seat.isAvailable === false)    
    }

  const length = Seat.length
  console.log(length)
  const unavailableLength = Math.floor(length * countReservedSeats)
  const randomSeatsIndexes = []
  while (randomSeatsIndexes.length !== unavailableLength) {
    const randomIndex = Math.floor(Math.random() * (length - 1))
    console.log(randomIndex);
    
    if (!randomSeatsIndexes.includes(randomIndex)) {
      randomSeatsIndexes.push(randomIndex)
    }
    else {
      console.log(updateSeats(randomSeatsIndexes))
       updateSeats()
      }
    }
}

return (
    <div>
        <label>Choose the percentage(%) of reserved seats</label>
        <select className="select" onChange={(e) => handleAvailable(() => setAvailable(e.target.value))}>
                    {setValue()}
                </select>
    </div>
  )
}

export default Percentage;