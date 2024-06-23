import React from 'react';

const Input = ({ type, name, placeholder, id }) => {
    return (
        <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className="input"
        />
    );
};

export default Input;
