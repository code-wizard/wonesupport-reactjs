import React from 'react';
import './content-wrapper.styles.scss';

const ContentWrapper = ({ children, hidden }) => (
    <div className={`home`}>
       <div className={`wone-main-wrapper`}>
        {children} 
       </div>        
    </div>
)

export { ContentWrapper };
