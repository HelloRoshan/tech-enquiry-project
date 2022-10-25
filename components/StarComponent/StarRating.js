import { useState } from "react";
import Star from "./Star";

function StarRating({ clickable, onChange, score }) {
    const [rating, setRating] = useState(score || 0);

    const changeRating = (newRating) => {
        setRating(newRating);
        onChange?.(newRating);
    };

    const ratingLabels = [
        'You are improving',
        'You are doing good',
        'Good Job',
        'Well Done',
        'Fantastic Work'
    ]

    return (
        <>
            <span style={{cursor: clickable ? 'pointer': 'default'}}>
                {
                    [1, 2, 3, 4, 5].map((value) => (
                        <Star 
                        key={value} 
                        filled={value <= rating}
                        onClick={() => clickable ? changeRating(value) : false} />
                    ))
                }
            </span>
            <div className="mt-2 text-prime-2">{ratingLabels[clickable ? score - 1 : rating - 1]}</div>
        </>
    );
}
export default StarRating;