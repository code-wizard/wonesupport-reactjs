import React from 'react';
import './common.styles.scss';

const WoneInnerHeader = ({ children, flexEnd, wonePadd_15 }) => (
    <header className={`wone-inner-header ${flexEnd ? 'flex-end': ''} ${wonePadd_15 ? 'wone__padd_15': ''}`}>
        {children}
    </header>
)

export { WoneInnerHeader };