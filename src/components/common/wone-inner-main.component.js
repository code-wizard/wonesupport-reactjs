import React from 'react';


const WoneInnerMain = ({ children }) => (
    <div className="wone-inner-main">
        <div className="wone-tab-content">
            <article>
                <div className="col-sm-12 col-md-12 col-lg-12 p-0 mb-5">
                    { children }
                </div>
            </article>
        </div>
    </div>
) 

export { WoneInnerMain };