import React from 'react';
import './common.styles.scss';

const WoneInnerHeader = ({ children, flexEnd }) => (
    <header className={`wone-inner-header ${flexEnd ? 'flex-end': ''}`}>
        {children}
    </header>
)

export { WoneInnerHeader };