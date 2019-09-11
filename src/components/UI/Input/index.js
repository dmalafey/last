import React from 'react';

import classes from './Input.css';


const input = ( {   elementType,
                    elementConfig,
                    value,
                    invalid,
                    shouldValidate,
                    touched,
                    changed,
                    label }) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed}
                required={shouldValidate.required}/>;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed}
                required={shouldValidate.required}/>;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={value}
                    onChange={changed}
                    required={shouldValidate.required}>
                    {elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed}
                required={shouldValidate.required}/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );

};

export default input;