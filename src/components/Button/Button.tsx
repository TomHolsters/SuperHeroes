import React from 'react';
import './button.scss'

export default function Button ({ text, disabled = false, clickCallBack, type = '' }) {
    
    return(
        <div className={`button${disabled ? ' disabled' : ''}${type==='delete' ? ' delete' : ''}`} onClick={clickCallBack}>
            <div className="button-fill">
            </div>
            <span className="button-text">{text}</span>
        </div>
    )
}