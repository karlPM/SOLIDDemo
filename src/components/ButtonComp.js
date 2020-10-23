import React from 'react';

export default function ButtonComp({onClick, title, styles}) {
    return (
        <div>
            <button
                onClick={onClick}
                style={styles}
            >
                <p>{title}</p>
            </button>
        </div>
    )
}