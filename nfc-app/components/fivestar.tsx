import React, { Dispatch, useState } from "react";
import { Star } from "./star";

type props = {
    rating : (rating : number) => void;
};

export default function RangeStar(props : props) {
    const [fill, setFill] = useState(0);


    const handleClick = (rating : number) => {
        props.rating(rating);
        setFill(rating);
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <button key={index} onClick={() => handleClick(index + 1)}>
                    <Star fill={index < fill ? true : false} />
                </button>
            ))}
        </div>
    );
}
