import React from 'react'

function AddOn({ yearly }) {
    return (
        <div className='space-y-4'>
            <div className='w-full flex justify-between items-center border border-lightGray p-3 rounded-md' >
                <div className='flex gap-3'>
                    <input className='w-5 accent-purplishBlue' type="checkbox" />
                    <div>
                        <h3 className='text-md text-marineBlue font-semibold'>Online Service</h3>
                        <p className='text-sm text-coolGray'>Access to multiplayer games.</p>
                    </div>
                </div>
                <div>
                    <p className='text-md text-purplishBlue' >{yearly ? '+$10/yr' : '+$1/mo'}</p>
                </div>
            </div>
            <div className='w-full flex justify-between items-center border border-lightGray p-3 rounded-md'>
                <div className='flex gap-3'>
                    <input className='w-5 accent-purplishBlue' type="checkbox" />
                    <div>
                        <h3 className='text-md text-marineBlue font-semibold'>Larger storage</h3>
                        <p className='text-sm text-coolGray'>Extra 1TB of cloud save</p>
                    </div>
                </div>
                <div>
                    <p className='text-md text-purplishBlue' >{yearly ? '+$20/yr' : '+$2/mo'}</p>
                </div>
            </div>
            <div className='w-full flex justify-between items-center border border-lightGray p-3 rounded-md'>
                <div className='flex gap-3'>
                    <input className='w-5 accent-purplishBlue' type="checkbox" />
                    <div>
                        <h3 className='text-md text-marineBlue font-semibold'>Customizable profile</h3>
                        <p className='text-sm text-coolGray'>Custom theme on your profile</p>
                    </div>
                </div>
                <div>
                    <p className='text-md text-purplishBlue' >{yearly ? '+$20/yr' : '+$2/mo'}</p>
                </div>
            </div>
        </div>
    )
}

export default AddOn