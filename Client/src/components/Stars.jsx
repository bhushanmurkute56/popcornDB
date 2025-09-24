import React from 'react'

function Stars({rating}) {
  return (
    <>
    <span className="text-3xl">
            {Array.from({ length : rating}).map((_, index) => {
                return (
                    <span className='text-amber-500' key={index}>
                        ★
                    </span>
                )
            })}

            {Array.from({length: 5 - rating}).map((_, index) => {
                return(
                    <span className='text-white' key={index}>
                        ★
                    </span>
                )
            })}
        </span>
    </>
  )
}

export default Stars;