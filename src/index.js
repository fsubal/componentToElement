import ReactDOM from 'react-dom/server';

export const componentToElement = (Component) => {
  const t = document.createElement('template');
  t.innerHTML = ReactDOM.renderToStaticMarkup(<Component />);
  return t.firstChild;
};
