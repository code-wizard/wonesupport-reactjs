import React from 'react';

const WoneInnerMain = ({ children, adminChat, noTab, grayBg }) => (
    <div className={`wone-inner-main ${adminChat ? 'wone__admin-chat': ''} ${grayBg ? 'gray__bg': ''}`}>
        <div className={`wone-tab-content ${noTab ? 'no-tabs': ''}`}>
            { children }
        </div>
    </div>
) 

export { WoneInnerMain };