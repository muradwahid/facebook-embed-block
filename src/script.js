import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import FacebookFront from './Components/FacebookEmbed/FacebookFront';
import './style.scss';
// Block Name
function FrontEnd({ attributes }) {
  return (
    <Fragment>
      <FacebookFront attributes={attributes} />
    </Fragment>
  );
}

const container = document.querySelectorAll('.wp-block-facebook-fbeb-embed');
container?.forEach((ele) => {
  const attributes = JSON.parse(ele.dataset.attributes);
  const root = createRoot(ele);
  root.render(<FrontEnd attributes={attributes} />);
  ele?.removeAttribute('data-attributes');
});
