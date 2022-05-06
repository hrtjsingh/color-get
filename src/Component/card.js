import React from 'react'
import PropTypes from 'prop-types';
function Card(props) {
    const { color } = props
    return (
        <div style={{ background: `${color.hex}` }}>
            <h2>{color.hex}</h2>
        </div>
    );
}
export default Card
Card.propTypes = {
    color: PropTypes.any
};