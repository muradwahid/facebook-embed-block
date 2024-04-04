import { InspectorControls } from '@wordpress/block-editor';
import { Fragment, useEffect } from 'react';
import Facebook from './Components/FacebookEmbed/Facebook';
import Setting from './Components/Setting/Setting';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { cId } = attributes;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  return (
    <Fragment>
      <InspectorControls>
        <Setting attributes={attributes} setAttributes={setAttributes} />
      </InspectorControls>
      <div className={className} id={`fbeb-social-media-embed-${cId}`}>
        <Facebook attributes={attributes} />
      </div>
    </Fragment>
  );
};
export default Edit;
