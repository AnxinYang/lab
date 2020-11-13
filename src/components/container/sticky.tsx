import React from 'react';

interface StickContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    top?: number | string
    bottom?: number | string
    left?: number | string
    right?: number | string
}

export function StickyContainer(props: StickContainerProps) {
    return (
        <div
            {...props}
            className={`sticky-container ${props.className ?? ''}`}
            style={{
                ...props.style,
                position: 'sticky',
                top: props.top,
                bottom: props.bottom,
                left: props.left,
                right: props.right,
            }}
        >
            {props.children}
        </div>
    )
}