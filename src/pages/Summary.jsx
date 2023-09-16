import React from 'react'

function Summary({ yearly }) {
    return (
        <div className=' w-full'>
            <div className=' bg-magnolia p-4 mb-6 rounded-lg'>
                <div className=' flex items-center justify-between'>
                    <div>
                        <p className=' text-marineBlue font-semibold'>Arcade {yearly ? '(Yearly)' : '(Monthly)'}</p>
                        <p className=' text-coolGray font-semibold underline'>Change</p>
                    </div>
                    <div className=' text-marineBlue font-semibold'>$9/{yearly ? 'yr' : 'mo'}</div>
                </div>
                <div className=' w-full border border-lightGray my-2'></div>
                <ul className='space-y-2 mt-4 text-coolGray'>
                    <li className='flex justify-between items-center'>
                        <p>Online Service</p>
                        <p className=' text-marineBlue'>+$1/mo</p>
                    </li>
                    <li className='flex justify-between items-center'>
                        <p>Larger Storage</p>
                        <p className=' text-marineBlue'>+$2/mo</p>
                    </li>
                </ul>
            </div>
            <div className=' p-4 flex justify-between items-center'>
                <p className=' text-coolGray'>Total {yearly ? '(per year)' : '(per month)'}</p>
                <p className=' text-purplishBlue font-semibold'>$12/{yearly ? 'yr' : 'mo'}</p>
            </div>
        </div>
    )
}

export default Summary