import React, {useState} from 'react';
import seat from '../data/seat';
import Percentage from '../components/Percentage';

function Seats() {
  const [values, setValues] = useState([20, 30, 40, 50, 60, 70, 80, 90, 100])
  
  let commonAv = seat.allSection.map(rows => rows.isAvailable);
  const [available, setAvailable] = useState("true")

  console.log(commonAv)
  return (
    <main>
      <div className='auditorium'>
        <div className='A'>
          {seat.allSection.map(rows => rows.row === 'A' && rows.section === 'Auditorium' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='B'>
          {seat.allSection.map(rows => rows.row === 'B' && rows.section === 'Auditorium' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='C'>
          {seat.allSection.map(rows => rows.row === 'C' && rows.section === 'Auditorium' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='D'>
          {seat.allSection.map(rows => rows.row === 'D' && rows.section === 'Auditorium' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='E'>
          {seat.allSection.map(rows => rows.row === 'E' && rows.section === 'Auditorium' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
      </div>
      <div className='balcony'>
        <div className='balconyA'>
          {seat.allSection.map(rows => rows.row === 'A' && rows.section === 'Balcony' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='balconyB'>
          {seat.allSection.map(rows => rows.row === 'B' && rows.section === 'Balcony' && <div className={rows.isAvailable === true ? "true" : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
      </div>
      <Percentage seat={seat} commonAv={commonAv} values={values} setValues={setValues} available={available} setAvailable={setAvailable} />
    </main>
  )
}

export default Seats;