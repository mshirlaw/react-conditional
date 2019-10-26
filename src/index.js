import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Conditional = props => {
    const { children, predicate } = props;
    if (predicate) {
        return <Fragment>{children}</Fragment>;
    }
    return null;
};

Conditional.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    predicate: PropTypes.bool.isRequired
};

export default Conditional;
