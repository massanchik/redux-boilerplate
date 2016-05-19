import React, {PropTypes} from 'react';
import {VisibilityFilters} from '../actions/todo';
import FilterLink from '../containers/FilterLink';

const links = Object.values(VisibilityFilters).map((filter, index) => (
    <span key={index}>
        {index > 0 ? ', ' : null}<FilterLink filter={filter}>{filter}</FilterLink>
    </span>
));

const Footer = ({active, children, onClick}) => (
    <div>
        Show:{" "}
        {links}
    </div>
);

export default Footer;