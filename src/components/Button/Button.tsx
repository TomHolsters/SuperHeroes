import React from 'react';
import './button.scss'

export default function Button ({ text, disabled = false, onClick, type = '' }) {
    
    return(
        <div className={`button${disabled ? ' disabled' : ''}${type==='delete' ? ' delete' : ''}`} onClick={onClick}>
            <div className="button-fill">
            </div>
            <span className="button-text">{text}</span>
        </div>
    )
}