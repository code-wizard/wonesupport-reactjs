import React from 'react';


const WoneInnerMain = ({ children }) => (
    <div className="wone-inner-main">
        <div className="wone-tab-content">
            <article>
                { children }
            </article>
        </div>
    </div>
) 

export { WoneInnerMain };