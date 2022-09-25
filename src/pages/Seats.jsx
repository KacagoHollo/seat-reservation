import React from 'react';
import seat from '../data/seat'

function Seats() {

  const aud = seat.auditorium.map(rows => rows.seat)
  console.log(Object.values(aud))

  return (
    <main>
      <div className='auditorium'>
        <div className='A'>
          {seat.auditorium.map(rows => rows.row === 'A' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='B'>
          {seat.auditorium.map(rows => rows.row === 'B' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='C'>
          {seat.auditorium.map(rows => rows.row === 'C' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='D'>
          {seat.auditorium.map(rows => rows.row === 'D' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='E'>
          {seat.auditorium.map(rows => rows.row === 'E' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
      </div>
      <div className='balcony'>
        <div className='balconyA'>
          {seat.balcony.map(rows => rows.row === 'A' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
        <div className='balconyB'>
          {seat.balcony.map(rows => rows.row === 'B' && <div className={rows.category}>{rows.seat}</div>)}
        </div>
      </div>
    </main>
  )
}

export default Seats;