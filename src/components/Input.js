import React  from 'react';
const Input = ({id, text, value, onChangeHandler}) => {
    return(
        <>
            <label htmlFor={id} className=''>{text}</label>
            <input type="input" id={id} value={value} onChange={onChangeHandler}/>
        </>
    );
};
export default Input;