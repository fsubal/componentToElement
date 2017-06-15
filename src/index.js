import ReactDOM from 'react-dom/server';

/**
 * you can do something like this.
 *
 * componentToElement(() => <div>Hello World</div>);
 * componentToElement(<SomeComponent foo={1} />);
 *
 * @param { React.Component } component
 * @return { HTMLElement }
 */
export const componentToElement = (Component) => {
  const t = document.createElement('template');
  t.innerHTML = ReactDOM.renderToStaticMarkup(<Component />);
  return t.firstChild;
};
