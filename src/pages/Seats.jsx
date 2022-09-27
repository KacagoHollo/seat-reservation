import React, {useState} from 'react';
import seat from '../data/seat';
import Percentage from '../components/Percentage';

function Seats() {
  const [values, setValues] = useState([20, 30, 40, 50, 60, 70, 80, 90, 100])
  const [perc, setPerc] = useState(20)
  let aud = seat.auditorium;
  let balc = seat.balcony;
  
  let common = aud.concat(balc)
  // console.log(common);
  
  let commonAv = common.map(rows => rows.isAvailable);
  const [available, setAvailable] = useState(commonAv)
  
  console.log(!available)
  return (
    <main>
      <div className='auditorium'>
        <div className='A'>
          {common.map(rows => rows.row === 'A' && rows.section === 'Auditorium' && <div className={available ? rows.isAvailable.toString() : "false"} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='B'>
          {common.map(rows => rows.row === 'B' && rows.section === 'Auditorium' && <div className={rows.isAvailable.toString()} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='C'>
          {common.map(rows => rows.row === 'C' && rows.section === 'Auditorium' && <div className={rows.isAvailable.toString()} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='D'>
          {common.map(rows => rows.row === 'D' && rows.section === 'Auditorium' && <div className={rows.isAvailable.toString()} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='E'>
          {common.map(rows => rows.row === 'E' && rows.section === 'Auditorium' && <div className={rows.isAvailable.toString()} id={rows.category}>{rows.seat}</div>)}
        </div>
      </div>
      <div className='balcony'>
        <div className='balconyA'>
          {common.map(rows => rows.row === 'A' && rows.section === 'Balcony' && <div className={rows.isAvailable.toString()} id={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='balconyB'>
          {common.map(rows => rows.row === 'B' && rows.section === 'Balcony' && <div className={rows.isAvailable.toString()} id={rows.category}>{rows.seat}</div>)}
        </div>
      </div>
      <Percentage common={common} commonAv={commonAv} values={values} setValues={setValues} available={available} setAvailable={setAvailable}/>
    </main>
  )
}

export default Seats;