//
// Favourites.propTypes = {
//   quotes: PropTypes.array.isRequired
// };
//
// export default Favourites;

import React from 'react';

const Favourites = ({ quotes }) => {
    console.log(quotes);
    return (
        <>
            <h1>Ulubione</h1>
            { quotes.map(quote => {
                return <h1>{quote.quote}</h1>
            })}
        </>
    )
}

export default Favourites;
