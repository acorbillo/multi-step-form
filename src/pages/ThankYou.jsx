import React from 'react'
import thankyou from '../assets/images/icon-thank-you.svg'

function ThankYou() {
    return (
        <div className=' text-center p-3'>
            <img className=' w-14 mx-auto mb-6' src={thankyou} alt="" />
            <h4 className=' text-3xl text-marineBlue font-bold mb-4'>Thank you!</h4>
            <p className=' text-coolGray'>Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default ThankYou