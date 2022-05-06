import React from 'react'
import Card from './card'
import PropTypes from 'prop-types';
import useGetColor from '../Hooks/useGetColor'
import Masonry from "react-masonry-css";
function Cards(props) {
    const { input } = props
    const { getColors } = useGetColor(input)
    let mainData;
    if (getColors.length > 0) {
        mainData = getColors.map((color, i) => (
            <Card color={color} key={i} />
        ))
    } else {
        mainData = `No Data Founf For ${input}`
    }
    return (
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {mainData}
        </Masonry>
    )
}
export default Cards

Cards.propTypes = {
    input: PropTypes.string
};