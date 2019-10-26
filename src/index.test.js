import React from 'react';
import Conditional from './index';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// eslint-disable-next-line
const component = ({children, ...rest}) => <Conditional {...rest}>{children}</Conditional>;

describe('Conditional', () => {

    test('should render correctly when predicate is truthy', () => {
        const props = { predicate: true, children: <div>Hello World</div> };
        const { getByText } = render(component(props));
        expect(getByText('Hello World')).toBeInTheDocument();
    });

    test('should render NULL when predicate is falsy', () => {
        const props = { predicate: false, children: <div>Hello World</div> };
        const { queryByText } = render(component(props));
        expect(queryByText('Hello World')).toBeNull();
    });
});