import React from 'react';
import './content-wrapper.styles.scss';

const ContentWrapper = ({ children }) => (
    <div className="home">
       <div className="wone-main-wrapper">
        {children} 
       </div>        
    </div>
)

export { ContentWrapper };
