### Indentation

When writing any block of code that is logically subordinate to the line immediately before and after it, that block should be indented two spaces more than the surrounding lines

* Do not put any tab characters anywhere in your code. You would do best to stop pressing the tab key entirely.
* Increase the indent level for all blocks by two extra spaces
    * When a line opens a block, the next line starts 2 spaces further in than the line that opened

        ```javascript
        // good:
        if(condition){
          action();
        }

        // bad:
        if(condition){
        action();
        }
        ```

    * When a line closes a block, that line starts at the same level as the line that opened the block
        ```javascript
        // good:
        if(condition){
          action();
        }

        // bad:
        if(condition){
          action();
          }
        ```

    * No two lines should ever have more or less than 2 spaces difference in their indentation. Any number of mistakes in the above rules could lead to this, but one example would be:

        ```javascript
        // bad:
        transmogrify({
          a: {
            b: function(){
            }
        }});
        ```

    * use sublime's arrow collapsing as a guide. do the collapsing lines seem like they should be 'contained' by the line with an arrow on it?


### Variable names

* A single descriptive word is best.

    ```javascript
    // good:
    var animals = ['cat', 'dog', 'fish'];

    // bad:
    var targetInputs = ['cat', 'dog', 'fish'];
    ```

* Collections such as arrays and maps should have plural noun variable names.

    ```javascript
    // good:
    var animals = ['cat', 'dog', 'fish'];

    // bad:
    var animalList = ['cat', 'dog', 'fish'];

    // bad:
    var animal = ['cat', 'dog', 'fish'];
    ```

* Name your variables after their purpose, not their structure

    ```javascript
    // good:
    var animals = ['cat', 'dog', 'fish'];

    // bad:
    var array = ['cat', 'dog', 'fish'];
    ```


### Language constructs

* Do not use `for...in` statements with the intent of iterating over a list of numeric keys. Use a for-with-semicolons statement in stead.

  ```javascript
  // good:
  var list = ['a', 'b', 'c']
  for(var i = 0; i < list.length; i++){
    alert(list[i]);
  }

  // bad:
  var list = ['a', 'b', 'c']
  for(var i in list){
    alert(list[i]);
  }
  ```

* Never omit braces for statement blocks (although they are technically optional).
    ```javascript
    // good:
    for(key in object){
      alert(key);
    }

    // bad:
    for(key in object)
      alert(key);
    ```

* Always use `===` and `!==`, since `==` and `!=` will automatically convert types in ways you're unlikely to expect.

    ```javascript
    // good:

    // this comparison evaluates to false, because the number zero is not the same as the empty string.
    if(0 === ''){
      alert('looks like they\'re equal');
    }

    // bad:

    // This comparison evaluates to true, because after type coercion, zero and the empty string are equal.
    if(0 == ''){
      alert('looks like they\'re equal');
    }
    ```

* Don't use function statements for the entire first half of the course. They introduce a slew of subtle new rules to how the language behaves, and without a clear benefit. Once you and all your peers are expert level in the second half, you can start to use the more (needlessly) complicated option if you like.

    ```javascript
    // good:
    var go = function(){...};

    // bad:
    function stop(){...};
    ```


### Semicolons

* Don't forget semicolons at the end of lines

  ```javascript
  // good:
  alert('hi');

  // bad:
  alert('hi')
  ```

* Semicolons are not required at the end of statements that include a block--i.e. `if`, `for`, `while`, etc.


  ```javascript
  // good:
  if(condition){
    response();
  }

  // bad:
  if(condition){
    response();
  };
  ```

* Misleadingly, a function may be used at the end of a normal assignment statement, and would require a semicolon (even though it looks rather like the end of some statement block).

  ```javascript
  // good:
  var greet = function(){
    alert('hi');
  };

  // bad:
  var greet = function(){
    alert('hi');
  }
  ```

# Supplemental reading

### Code density

* Conserve line quantity by minimizing the number lines you write in. The more concisely your code is written, the more context can be seen in one screen.
* Conserve line length by minimizing the amount of complexity you put on each line. Long lines are difficult to read. Rather than a character count limit, I recommend limiting the amount of complexity you put on a single line. Try to make it easily read in one glance. This goal is in conflict with the line quantity goal, so you must do your best to balance them.

### Comments

* Provide comments any time you are confident it will make reading your code easier.
* Be aware that comments come at some cost. They make a file longer and can drift out of sync with the code they annotate.
* Comment on what code is attempting to do, not how it will achieve it.
* A good comment is often less effective than a good variable name.


### Padding & additional whitespace

* Generally, we don't care where you put extra spaces, provided they are not distracting.
* You may use it as padding for visual clarity. If you do though, make sure it's balanced on both sides.

    ```javascript
    // optional:
    alert( "I chose to put visual padding around this string" );

    // bad:
    alert( "I only put visual padding on one side of this string");
    ```

* You may use it to align two similar lines, but it is not recommended. This pattern usually leads to unnecessary edits of many lines in your code every time you change a variable name.

    ```javascript
    // discouraged:
    var firstItem  = getFirst ();
    var secondItem = getSecond();
    ```

* Put `else` and `else if` statements on the same line as the ending curly brace for the preceding `if` block
    ```javascript
    // good:
    if(condition){
      response();
    }else{
      otherResponse();
    }

    // bad:
    if(condition){
      response();
    }
    else{
      otherResponse();
    }
    ```



### Working with files

* Do not end a file with any character other than a newline.
* Don't use the -a or -m flags for `git commit` for the first half of the class, since they conceal what is actually happening (and do slightly different things than most people expect).

    ```shell
    # good:
    > git add .
    > git commit
    [save edits to the commit message file using the text editor that opens]

    # bad:
    > git commit -a
    [save edits to the commit message file using the text editor that opens]

    # bad:
    > git add .
    > git commit -m "updated algorithm"
    ```


### Opening or closing too many blocks at once

* The more blocks you open on a single line, the more your reader needs to remember about the context of what they are reading. Try to resolve your blocks early, and refactor. A good rule is to avoid closing more than two blocks on a single line--three in a pinch.

    ```javascript
    // avoid:
    _.ajax(url, {success: function(){
      // ...
    }});

    // prefer:
    _.ajax(url, {
      success: function(){
        // ...
      }
    });
    ```


### Variable declaration

* Use a new var statement for each line you declare a variable on.
* Do not break variable declarations onto mutiple lines.
* Use a new line for each variable declaration.
* See http://benalman.com/news/2012/05/multiple-var-statements-javascript/ for more details

    ```javascript
    // good:
    var ape;
    var bat;

    // bad:
    var cat,
        dog

    // use sparingly:
    var eel, fly;
    ```

### Capital letters in variable names

* Some people choose to use capitalization of the first letter in their variable names to indicate that they contain a [class](http://en.wikipedia.org/wiki/Class_(computer_science\)). This capitalized variable might contain a function, a prototype, or some other construct that acts as a representative for the whole class.
* Optionally, some people use a capital letter only on functions that are written to be run with the keyword `new`.
* Do not use all-caps for any variables. Some people use this pattern to indicate an intended "constant" variable, but the language does not offer true constants, only mutable variables.


### Minutia

* Don't rely on JavaScripts implicit global variables. If you are intending to write to the global scope, export things to `window.*` explicitly instead.

    ```javascript
    // good:
    var overwriteNumber = function(){
      window.exported = Math.random();
    };

    // bad:
    var overwriteNumber = function(){
      exported = Math.random();
    };
    ```

* For lists, put commas at the end of each newline, not at the beginning of each item in a list

    ```javascript
    // good:
    var animals = [
      'ape',
      'bat',
      'cat'
    ];

    // bad:
    var animals = [
        'ape'
      , 'bat'
      , 'cat'
    ];
    ```

* Avoid use of `switch` statements altogether. They are hard to outdent using the standard whitespace rules above, and are prone to error due to missing `break` statements. See [this article](http://ericleads.com/2012/12/switch-case-considered-harmful/) for more detail.

* Prefer single quotes around JavaScript strings, rather than double quotes. Having a standard of any sort is preferable to a mix-and-match approach, and single quotes allow for easy embedding of HTML, which prefers double quotes around tag attributes.

    ```javascript
    // good:
    var dog = 'dog';
    var cat = 'cat';

    // acceptable:
    var dog = "dog";
    var cat = "cat";

    // bad:
    var dog = 'dog';
    var cat = "cat";
    ```


### HTML

* Do not use ids for html elements. Use a class instead.

    ```html
    <!-- good -->
    <img class="lucy" />

    <!-- bad -->
    <img id="lucy" />
    ```

* Do not include a `type=text/javascript"` attribute on script tags

    ```html
    <!-- good -->
    <script src="a.js"></script>

    <!-- bad -->
    <script src="a.js" type="text/javascript"></script>


    # React/JSX

    *A mostly reasonable approach to React and JSX*


    ## Basic Rules

      - Only include one React component per file.
        - However, multiple [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
      - Always use JSX syntax.
      - Do not use `React.createElement` unless you're initializing the app from a file that is not JSX.

    ## Class vs `React.createClass` vs stateless

      - If you have internal state and/or refs, prefer `class extends React.Component` over `React.createClass` unless you have a very good reason to use mixins. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

        ```jsx
        // bad
        const Listing = React.createClass({
          // ...
          render() {
            return <div>{this.state.hello}</div>;
          }
        });

        // good
        class Listing extends React.Component {
          // ...
          render() {
            return <div>{this.state.hello}</div>;
          }
        }
        ```

        And if you don't have state or refs, prefer normal functions (not arrow functions) over classes:

        ```jsx
        // bad
        class Listing extends React.Component {
          render() {
            return <div>{this.props.hello}</div>;
          }
        }

        // bad (since arrow functions do not have a "name" property)
        const Listing = ({ hello }) => (
          <div>{hello}</div>
        );

        // good
        function Listing({ hello }) {
          return <div>{hello}</div>;
        }
        ```

    ## Naming

      - **Extensions**: Use `.jsx` extension for React components.
      - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
      - **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

        ```jsx
        // bad
        import reservationCard from './ReservationCard';

        // good
        import ReservationCard from './ReservationCard';

        // bad
        const ReservationItem = <ReservationCard />;

        // good
        const reservationItem = <ReservationCard />;
        ```

      - **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

        ```jsx
        // bad
        import Footer from './Footer/Footer';

        // bad
        import Footer from './Footer/index';

        // good
        import Footer from './Footer';
        ```

    ## Declaration

      - Do not use `displayName` for naming components. Instead, name the component by reference.

        ```jsx
        // bad
        export default React.createClass({
          displayName: 'ReservationCard',
          // stuff goes here
        });

        // good
        export default class ReservationCard extends React.Component {
        }
        ```

    ## Alignment

      - Follow these alignment styles for JSX syntax. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

        ```jsx
        // bad
        <Foo superLongParam="bar"
             anotherSuperLongParam="baz" />

        // good
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        />

        // if props fit in one line then keep it on the same line
        <Foo bar="bar" />

        // children get indented normally
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        >
          <Quux />
        </Foo>
        ```

    ## Quotes

      - Always use double quotes (`"`) for JSX attributes, but single quotes for all other JS. eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

      > Why? JSX attributes [can't contain escaped quotes](http://eslint.org/docs/rules/jsx-quotes), so double quotes make conjunctions like `"don't"` easier to type.
      > Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

        ```jsx
        // bad
        <Foo bar='bar' />

        // good
        <Foo bar="bar" />

        // bad
        <Foo style={{ left: "20px" }} />

        // good
        <Foo style={{ left: '20px' }} />
        ```

    ## Spacing

      - Always include a single space in your self-closing tag.

        ```jsx
        // bad
        <Foo/>

        // very bad
        <Foo                 />

        // bad
        <Foo
         />

        // good
        <Foo />
        ```

    ## Props

      - Always use camelCase for prop names.

        ```jsx
        // bad
        <Foo
          UserName="hello"
          phone_number={12345678}
        />

        // good
        <Foo
          userName="hello"
          phoneNumber={12345678}
        />
        ```

      - Omit the value of the prop when it is explicitly `true`. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

        ```jsx
        // bad
        <Foo
          hidden={true}
        />

        // good
        <Foo
          hidden
        />
        ```

      - Always include a non-empty `alt` prop on `<img>` tags. If `alt` is an empty string, the `<img>` must have `role="presentation"`. eslint: [`jsx-a11y/img-uses-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-uses-alt.md)

        ```jsx
        // bad
        <img src="hello.jpg" />

        // bad
        <img src="hello.jpg" alt="" />

        // good
        <img src="hello.jpg" alt="Me waving hello" />

        // good
        <img src="hello.jpg" alt="" role="presentation" />
        ```

      - Do not use words like "image", "photo", or "picture" in `<img>` `alt` props. eslint: [`jsx-a11y/redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-uses-alt.md)

      > Why? Screenreaders already announce `img` elements as images, so there is no need to include this information in the alt text.

        ```jsx
        // bad
        <img src="hello.jpg" alt="Picture of me waving hello" />

        // good
        <img src="hello.jpg" alt="Me waving hello" />
        ```

      - Use only valid, non-abstract [ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions). eslint: [`jsx-a11y/valid-aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/valid-aria-role.md)

        ```jsx
        // bad - not an ARIA role
        <div role="datepicker" />

        // bad - abstract ARIA role
        <div role="range" />

        // good
        <div role="button" />
        ```

      - Do not use `accessKey` on elements. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

      > Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.

      ```jsx
      // bad
      <div accessKey="h" />

      // good
      <div />
      ```

    ## Parentheses

      - Wrap JSX tags in parentheses when they span more than one line. eslint: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

        ```jsx
        // bad
        render() {
          return <MyComponent className="long body" foo="bar">
                   <MyChild />
                 </MyComponent>;
        }

        // good
        render() {
          return (
            <MyComponent className="long body" foo="bar">
              <MyChild />
            </MyComponent>
          );
        }

        // good, when single line
        render() {
          const body = <div>hello</div>;
          return <MyComponent>{body}</MyComponent>;
        }
        ```

    ## Tags

      - Always self-close tags that have no children. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

        ```jsx
        // bad
        <Foo className="stuff"></Foo>

        // good
        <Foo className="stuff" />
        ```

      - If your component has multi-line properties, close its tag on a new line. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

        ```jsx
        // bad
        <Foo
          bar="bar"
          baz="baz" />

        // good
        <Foo
          bar="bar"
          baz="baz"
        />
        ```

    ## Methods

      - Use arrow functions to close over local variables.

        ```jsx
        function ItemList(props) {
          return (
            <ul>
              {props.items.map((item, index) => (
                <Item
                  key={item.key}
                  onClick={() => doSomethingWith(item.name, index)}
                />
              ))}
            </ul>
          );
        }
        ```

      - Bind event handlers for the render method in the constructor. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

      > Why? A bind call in the render path creates a brand new function on every single render.

        ```jsx
        // bad
        class extends React.Component {
          onClickDiv() {
            // do stuff
          }

          render() {
            return <div onClick={this.onClickDiv.bind(this)} />
          }
        }

        // good
        class extends React.Component {
          constructor(props) {
            super(props);

            this.onClickDiv = this.onClickDiv.bind(this);
          }

          onClickDiv() {
            // do stuff
          }

          render() {
            return <div onClick={this.onClickDiv} />
          }
        }
        ```

      - Do not use underscore prefix for internal methods of a React component.

        ```jsx
        // bad
        React.createClass({
          _onClickSubmit() {
            // do stuff
          },

          // other stuff
        });

        // good
        class extends React.Component {
          onClickSubmit() {
            // do stuff
          }

          // other stuff
        }
        ```

      - Be sure to return a value in your `render` methods. eslint: [`require-render-return`](https://github.com/yannickcr/eslint-plugin-react/pull/502)

        ```jsx
        // bad
        render() {
          (<div />);
        }

        // good
        render() {
          return (<div />);
        }
        ```

    ## Ordering

      - Ordering for `class extends React.Component`:

      1. optional `static` methods
      1. `constructor`
      1. `getChildContext`
      1. `componentWillMount`
      1. `componentDidMount`
      1. `componentWillReceiveProps`
      1. `shouldComponentUpdate`
      1. `componentWillUpdate`
      1. `componentDidUpdate`
      1. `componentWillUnmount`
      1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
      1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
      1. *Optional render methods* like `renderNavigation()` or `renderProfilePicture()`
      1. `render`

      - How to define `propTypes`, `defaultProps`, `contextTypes`, etc...

        ```jsx
        import React, { PropTypes } from 'react';

        const propTypes = {
          id: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          text: PropTypes.string,
        };

        const defaultProps = {
          text: 'Hello World',
        };

        class Link extends React.Component {
          static methodsAreOk() {
            return true;
          }

          render() {
            return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
          }
        }

        Link.propTypes = propTypes;
        Link.defaultProps = defaultProps;

        export default Link;
        ```

      - Ordering for `React.createClass`: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

      1. `displayName`
      1. `propTypes`
      1. `contextTypes`
      1. `childContextTypes`
      1. `mixins`
      1. `statics`
      1. `defaultProps`
      1. `getDefaultProps`
      1. `getInitialState`
      1. `getChildContext`
      1. `componentWillMount`
      1. `componentDidMount`
      1. `componentWillReceiveProps`
      1. `shouldComponentUpdate`
      1. `componentWillUpdate`
      1. `componentDidUpdate`
      1. `componentWillUnmount`
      1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
      1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
      1. *Optional render methods* like `renderNavigation()` or `renderProfilePicture()`
      1. `render`

    ## `isMounted`

      - Do not use `isMounted`. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

      > Why? [`isMounted` is an anti-pattern][anti-pattern], is not available when using ES6 classes, and is on its way to being officially deprecated.

      [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

    **[⬆ back to top](#table-of-contents)*