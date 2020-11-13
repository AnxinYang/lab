import React from 'react';
import './popup.css';

interface PopupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export function Popup(props: PopupProps) {
    return (
        <div
            {...props}
            className={`popup ${props.className ?? ''}`}
        >
            {props.children}
        </div>
    )
}