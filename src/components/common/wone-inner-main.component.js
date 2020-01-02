import React from 'react';

const WoneInnerMain = ({ children, adminChat, noTab }) => (
    <div className={`wone-inner-main ${adminChat ? 'wone__admin-chat': ''}`}>
        <div className={`wone-tab-content ${noTab ? 'no-tabs': ''}`}>
            { children }
        </div>
    </div>
) 

export { WoneInnerMain };