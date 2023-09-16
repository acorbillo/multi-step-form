import { useEffect } from "react";


function Personal({ name, email, number, valid, setName, setEmail, setNumber, setValid }) {

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const formValidation = () => {

        if (name === "" || email === "" || number === "" || !email.includes('@')) {
            setValid(false)
        } else {
            setValid(true)
        }
    }

    useEffect(() => {
        // Call formValidation whenever the input values change
        formValidation();
    }, [name, email, number]);

    return (
        <form className='flex flex-col w-full pb-12 space-y-3'>
            <div>
                <label htmlFor='name' className='text-marineBlue text-md font-semibold'>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    placeholder='e.g. Stephen King'
                    value={name}
                    onChange={handleNameChange}
                    className={`w-full p-2 border ${valid ? 'border-coolGray' : 'border-strawberryRed'} rounded-md outline-none`}
                />
            </div>
            <div>
                <label htmlFor='email' className='text-marineBlue text-md font-semibold'>
                    Email Address
                </label>
                <input
                    type='text'
                    id='email'
                    placeholder='e.g. stephenking@lorem.com'
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full p-2 border ${valid ? 'border-coolGray' : 'border-strawberryRed'} rounded-md outline-none`}
                />
            </div>
            <div>
                <label htmlFor='number' className='text-marineBlue text-md font-semibold'>
                    Phone Number
                </label>
                <input
                    type='text'
                    id='number'
                    placeholder='e.g. +1 234 567 890'
                    value={number}
                    onChange={handleNumberChange}
                    className={`w-full p-2 border ${valid ? 'border-coolGray' : 'border-strawberryRed'} rounded-md outline-none`}
                />
            </div>
        </form>
    );
}

export default Personal;
