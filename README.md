[![NPM](https://img.shields.io/npm/v/react-conditional-block.svg)](https://www.npmjs.com/package/react-conditional-block)

# React-Conditional-Block

React Conditional Block is a light weight component that gives you a conditional block to help you clean up your react code. A 
common pattern in React is to have multiple conditions in your render method which control when certain blocks are rendered. This
can turn into a mess quite quickly. 

For example, with React Conditional Block, something which might originally have looked like this:

```js
import React from 'react';
import {First, Second, Thirdm, Other} from 'some-components';

const Component = ({first, second, third, ...rest}) => {
  return (
    <div>
      {
        first && ( 
          <First {...rest} />
        )
      }
      { 
        second && (
          <Second {...rest}>
            { 
              third && (
                <Third {...rest} />
              )
            }
            <Other>
              <div>Inner</div>
            </Other>
          </Second>
        )
      }
    </div>
  );
};
```

Becomes something like this:

```js
import React from 'react';
import {First, Second, Thirdm, Other} from 'some-components';
import Conditional from 'react-conditional-block';

const Component = ({first, second, third, ...rest}) => {
  return (
    <div>
      <Conditional predicate={first}><First {...rest} /></Conditional>
      <Conditional predicate={second}>
        <Second {...rest}>
          <Conditional predicate={third}><Third {...third} /></Conditional>
            <Other>
              <div>Inner</div>
            </Other>
        </Second>
      </Conditional>
    </div>
  );
};
```

## Installation and usage

The easiest way to use react-conditional-block is to install it from npm and build it into your app with Webpack

	npm install --save react-conditional-block

Then use it in your app:


```javascript
import React from 'react';
import Conditional from 'react-conditional-block';

const App = ({somethingTruthy, somethingFalsy}) => {
	return (
		<div>
			<Conditional predicate={somethingTruthy}>I am rendered!</Conditional>
			<Conditional predicate={somethingFalsy}>I am NOT rendered!</Conditional>
		</div>
	);
};

export default App;
```

## Props

Props you may want to specify include:

* `children` - Any renderable content. Will be displayed when `predicate` is truthy.
* `predicate` - Boolean. This determines whether or not to render the children wrapped by `Conditional`.

## Thanks

If you are interested you can [follow me on twitter](https://twitter.com/mshirlaw)

## License

MIT Licensed. Copyright (c) Matt Shirlaw 2019.

