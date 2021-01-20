import React from "react";
import cn from "classnames";
import pt from 'prop-types';

function Button({ onClick, className, outline, headerBtn, children }) {

        return (
                <button
                        onClick={onClick}
                        className={cn('btn',
                                { 'btn-outline': outline }, { 'cart__button-header': headerBtn })}>
                        {children}
                </button>)

}

Button.propTypes = {
        onClick: pt.func,
}

export default Button;