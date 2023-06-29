// List

import React from 'react';

const List = ({ list, counter, onSave, onRemove }) => {
    return (
        <>
            <button onClick={() => onSave(counter)}>Zapisz</button>
            <ul>
                { list.map((item, index) => {
                    return <li onClick={() => onRemove(index)} key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default List;
