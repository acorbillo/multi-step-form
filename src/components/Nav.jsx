import React from 'react'

function Nav({ page }) {


    return (

        // NavBar with BG
        <div className=' bg-mobile bg-no-repeat bg-cover h-40 flex justify-center items-start pt-8 md:bg-desktop md:w-1/4 md:min-w-[180px] md:h-full md:pt-6 md:rounded-lg'>

            {/* Step Container */}
            <div className=' w-1/2 max-w-xs flex justify-between items-center md:w-11/12 md:mx-auto md:flex-col md:items-start md:space-y-5'>

                {/* STEP 1 */}
                <div className='md:flex md:justify-start md:items-center space-x-3'>
                    <div className={page === 0 ? 'active' : 'page-number'}>1</div>
                    <div className='hidden md:block'>
                        <h4 className=' text-xs text-coolGray'>STEP 1</h4>
                        <p className='text-white text-sm'>YOUR INFO</p>
                    </div>
                </div>
                {/* STEP 2 */}
                <div className='md:flex md:justify-start md:items-center space-x-3'>
                    <div className={page === 1 ? 'active' : 'page-number'}>2</div>
                    <div className='hidden md:block'>
                        <h4 className=' text-xs text-coolGray'>STEP 2</h4>
                        <p className='text-white text-sm'>SELECT PLAN</p>
                    </div>
                </div>
                {/* STEP 3 */}
                <div className='md:flex md:justify-start md:items-center space-x-3'>
                    <div className={page === 2 ? 'active' : 'page-number'}>3</div>
                    <div className='hidden md:block'>
                        <h4 className=' text-xs text-coolGray'>STEP 3</h4>
                        <p className='text-white text-sm'>ADD-ONS</p>
                    </div>
                </div>
                {/* STEP 4 */}
                <div className='md:flex md:justify-start md:items-center space-x-3'>
                    <div className={page >= 3 ? 'active' : 'page-number'}>4</div>
                    <div className='hidden md:block'>
                        <h4 className=' text-xs text-coolGray'>STEP 4</h4>
                        <p className='text-white text-sm'>SUMMARY</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav