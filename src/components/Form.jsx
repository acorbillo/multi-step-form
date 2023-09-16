import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Personal from '../pages/personal'
import Plan from '../pages/Plan'
import AddOn from '../pages/AddOn'
import Summary from '../pages/Summary'
import ThankYou from '../pages/ThankYou'
import Buttons from './Buttons'

function Form() {

    const [page, setPage] = useState(0)
    const [yearly, setYearly] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [valid, setValid] = useState(null)

    const header = [
        {
            title: "Personal info",
            sub: "Please provide your name, email address, and phone number."
        },
        {
            title: "Select your plan",
            sub: "You have the option of monthly or yearly billing."
        },
        {
            title: "Pick add-ons",
            sub: "Add-ons help enhance your gaming experience."
        },
        {
            title: "Finishing up",
            sub: "Double-check everything looks OK before confirming."
        },
    ]

    const getTitle = () => {

        switch (page) {
            case 0:
                return header[0].title
                break
            case 1:
                return header[1].title
                break
            case 2:
                return header[2].title
                break
            case 3:
                return header[3].title
                break
        }
    }

    const getSubTitle = () => {

        switch (page) {
            case 0:
                return header[0].sub
                break
            case 1:
                return header[1].sub
                break
            case 2:
                return header[2].sub
                break
            case 3:
                return header[3].sub
                break
        }
    }

    const renderPage = () => {

        switch (page) {
            case 0:
                return <Personal
                    name={name}
                    email={email}
                    number={number}
                    valid={valid}
                    setName={setName}
                    setEmail={setEmail}
                    setNumber={setNumber}
                    setValid={setValid}
                />
                break
            case 1:
                return <Plan yearly={yearly} setYearly={setYearly} handlePlan={handlePlan} />
                break
            case 2:
                return <AddOn yearly={yearly} />
                break
            case 3:
                return <Summary yearly={yearly} />
                break
            case 4:
                return <ThankYou />
        }
    }

    const handlePlan = () => {
        setYearly(!yearly)
    }

    return (

        <div className='relative max-w-lg mx-auto font-ubuntu bg-white md:w-8/12 md:rounded-lg md:max-w-none md:flex md:justify-between md:items-start md:p-3 md:h-3/4'>

            <Nav page={page} />

            {/* Form Container */}
            <div className=' w-11/12 max-w-md mx-auto -mt-16 bg-white p-5 pt-7 rounded-md md:mt-0 md:rounded-xl md:w-7/12 md:mx-0 md:max-w-none'>

                {/* This is the Heading of the form */}
                <div>
                    <div className='mb-4'>
                        <h2 className=' text-marineBlue font-bold text-2xl mb-2'>{getTitle()}</h2>
                        <p className=' text-coolGray text-md font-medium'>{getSubTitle()}</p>
                    </div>
                </div>

                {/* This is the form */}
                <div>{renderPage()}</div>

                {/* buttons for desktop */}
                <div className={`hidden md:w-7/12 md:flex md:justify-between md:items-center md:absolute md:bottom-0 md:right-3 md:p-5 
                ${page === header.length && "md:hidden"}`}>

                    <Buttons page={page} setPage={setPage} header={header} valid={valid} />

                </div>
            </div>

            {/* buttons for mobile */}

            <div className={`fixed left-0 bottom-0 right-0 bg-white p-3 flex justify-between md:hidden 
            ${page === header.length && 'hidden'}`
            }>

                <Buttons page={page} setPage={setPage} header={header} />

            </div>
        </div>

    )
}

export default Form