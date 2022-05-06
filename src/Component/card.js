import React from 'react'
function Card(props) {
    const { color } = props
    return (
        <div style={{ background: `${color.hex}` }}>
            <h2>{color.hex}</h2>
        </div>
    );
}
export default Card