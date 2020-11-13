import React from 'react';
import './section.css';

export function Section(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
    return (
        <section
            {...props}
            className={`section ${props.className ?? ''}`}
        >
            {props.children}
        </section>
    )
}