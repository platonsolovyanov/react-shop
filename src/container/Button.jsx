import React from "react";
import cn from "classnames";

function Button({onClick, className, outline, children}){ 
              
        return (
        <button
        onClick={onClick}
        className={cn('btn',
        {'btn-outline' : outline})}>
        {children}
        </button>)
    
}

export default Button;