import React from "react";
import cn from "classnames";

function Button({onClick, className, outline, headerBtn, children}){ 
              
        return (
        <button
        onClick={onClick}
        className={cn('btn',
        {'btn-outline' : outline}, {'cart__button-header' : headerBtn})}>
        {children}
        </button>)
    
}

export default Button;