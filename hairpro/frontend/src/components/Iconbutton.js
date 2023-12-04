import React from 'react';

const Iconbutton = () => {
    return (
        <div class="iconbutton">
            <a href="#scrollup">
                {/* Add the code here for the logo to appear and the icon to be actionable */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
        </div>
    );
};

export default Iconbutton;