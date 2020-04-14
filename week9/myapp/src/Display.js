import React from 'react';
import Greeter from './Greeter'
import LikeButton from "./LikeButton";
const buttArray = []

for (let i = 0 ; i<10; i++) {
    buttArray.push(<LikeButton/>);
}

const Display = () => {
    return (
    <>
        <Greeter />
        {buttArray}
    </>
    )
};

export default Display;