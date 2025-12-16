import React from 'react';

const Card = () => {
    return (
        <div className="zodiac-card max-w-sm">
            <a href="#">
                <div className="overflow-hidden rounded-2xl mb-4 border border-slate-700/70 bg-slate-900/80">
                    <img className="w-full h-44 object-cover" src="/docs/images/blog/image-1.jpg" alt="" />
                </div>
            </a>
            <div className="space-y-3">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-slate-50">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="text-sm text-slate-300">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <a
                    href="#"
                    className="cosmic-button text-xs px-4 py-2 inline-flex items-center gap-2"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Card;
