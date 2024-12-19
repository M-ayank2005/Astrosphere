import React from 'react';
import './ShimmerButton.css';

const ShimmerButton = () => {
    return (
        <div className="flex items-center justify-center">
            <button
                className="bubbleeffectbtn"
                type="button"
            >
                <span className="text-sm font-medium">Hover me</span>
            </button>
        </div>
    );
};

export default ShimmerButton;