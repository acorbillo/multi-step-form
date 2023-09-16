import React from 'react'

import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'


function Plan({ yearly, handlePlan }) {
    return (
        <div className='w-full'>
            <div className=' space-y-4 mb-8 md:flex md:justify-center md:items-start md:space-y-0 md:space-x-2'>
                <div className='w-full flex justify-start items-center p-3 border border-lightGray rounded-md space-x-3 md:flex-col md:justify-start md:items-start md:space-x-0'>
                    <div className='md:mb-6'>
                        <img src={arcade} alt="" />
                    </div>
                    <div className=' md:flex md:flex-col md:items-start'>
                        <h3 className=' text-marineBlue font-semibold'>Arcade</h3>
                        <p className=' text-coolGray text-sm'>$9/mo</p>
                        <p className={`text-marineBlue text-sm ${!yearly ? 'hidden' : 'block'}`}>2 months free</p>
                    </div>
                </div>
                <div className='w-full flex justify-start items-center p-3 border border-lightGray rounded-md space-x-3 md:flex-col md:justify-start md:items-start md:space-x-0'>
                    <div className='md:mb-6'>
                        <img src={advanced} alt="" />
                    </div>
                    <div className=' md:flex md:flex-col md:items-start'>
                        <h3 className=' text-marineBlue font-semibold'>Advanced</h3>
                        <p className=' text-coolGray text-sm'>$12/mo</p>
                        <p className={`text-marineBlue text-sm ${!yearly ? 'hidden' : 'block'}`}>2 months free</p>
                    </div>
                </div>
                <div className='w-full flex justify-start items-center p-3 border border-lightGray rounded-md space-x-3 md:flex-col md:justify-start md:items-start md:space-x-0'>
                    <div className='md:mb-6'>
                        <img src={pro} alt="" />
                    </div>
                    <div className=' md:flex md:flex-col md:items-start'>
                        <h3 className=' text-marineBlue font-semibold'>Pro</h3>
                        <p className=' text-coolGray text-sm'>$15/mo</p>
                        <p className={`text-marineBlue text-sm ${!yearly ? 'hidden' : 'block'}`}>2 months free</p>
                    </div>
                </div>
            </div>

            {/* Toggle Switch */}
            <div className='bg-alabaster p-3 flex justify-center items-center gap-3 rounded-md'>
                <h4 className={`${yearly ? `text-coolGray` : `text-marineBlue`} font-bold`}>Monthly</h4>
                <label className="switch">
                    <input type="checkbox" onChange={handlePlan} checked={yearly} />
                    <span className="slider round"></span>
                </label>
                <h4 className={`${yearly ? `text-marineBlue` : `text-coolGray`} font-bold`}>Yearly</h4>
            </div>
        </div>
    )
}

export default Plan