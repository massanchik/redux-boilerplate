import React, {PropTypes} from 'react';

const Link = ({active, children, onClick}) => (
    <a href="#"
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}>
        {children}
    </a>
);

Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;