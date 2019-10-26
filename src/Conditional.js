import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Conditional = props => {
    if (predicate) {
        return <Fragment>{children}</Fragment>;
    }
    return null;
};

Conditional.propTypes = {
    children: PropTypes.node.isRequired,
    predicate: PropTypes.bool.isRequired
};

export default Conditional;
