import React, { useState } from "react";

type Props = {
    rating: (rating: number) => void;
};

export default function RangeStar(props: Props) {
    const [fill, setFill] = useState(0);

    const handleClick = (rating: number) => {
        props.rating(rating);
        setFill(rating);
    };

    return (
        <div>
            <div className="rating gap-1">
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                    onClick={() => handleClick(1)}
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-orange-400"
                    onClick={() => handleClick(2)}
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-yellow-400"
                    onClick={() => handleClick(3)}
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-lime-400"
                    onClick={() => handleClick(4)}
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-green-400"
                    onClick={() => handleClick(5)}
                />
            </div>
            <div>Current Rating: {fill}</div>
        </div>
    );
}
