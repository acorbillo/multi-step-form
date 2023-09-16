import React from 'react'

function Buttons({ page, setPage, header, valid }) {

    const goNext = () => {
        if (page < header.length && valid === true) {
            setPage(page + 1)
        }
    }

    return (
        <>
            <button
                className={`back-btn ${page === 0 && 'opacity-0'}`}
                onClick={() => (
                    page != 0 && setPage(page - 1)
                )}
            >Go Back</button>

            <button
                className="next-btn"
                onClick={goNext}
            >{page < 3 ? 'Next Step' : 'Confirm'}</button>
        </>
    )
}

export default Buttons