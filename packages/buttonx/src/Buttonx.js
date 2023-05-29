
//create button component

import React from 'react';
import PropTypes from 'prop-types';
import './Buttonx.scss';

const Buttonx = ({ children, onClick, disabled }) => (
    <button className="buttonx" onClick={onClick} disabled={disabled}>
        {children}
    </button>
);

Buttonx.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Buttonx.defaultProps = {
    onClick: () => {},
    disabled: false,
};

export default Buttonx;
