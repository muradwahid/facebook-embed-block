import {
  __experimentalNumberControl as NumberControl,
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { Fragment } from 'react';
import { typeOptions } from '../../utils/options';

const Setting = ({ attributes, setAttributes }) => {
  const { facebook } = attributes;
  const update = (property, value, secondProperty) => {
    let updatedData;
    if (secondProperty) {
      updatedData = produce(facebook, (draft) => {
        draft[property][secondProperty] = value;
      });
    } else {
      updatedData = produce(facebook, (draft) => {
        draft[property] = value;
      });
    }
    setAttributes({ facebook: updatedData });
  };
  return (
    <PanelBody title={__('Embed', 'social-media-embed')} initialOpen={true}>
      <div className="fbebPanelStyle">
        <span>{__('App Id', 'social-media-embed')}</span>
        <TextControl
          value={facebook.appId}
          onChange={(value) => update('appId', value)}
        />
      </div>
      <div style={{marginTop:"-18px",marginBottom:"10px"}}>
        <small>{"Don't have an APP ID "} <a href="https://developers.facebook.com/apps/"
          target='_blank' rel='noreferrer'>click here</a> </small>
      </div>
      <div className="fbebPanelStyle">
        <span>{__('Type', 'social-media-embed')}</span>
        <SelectControl
          style={{ width: '140px', marginBottom: '0' }}
          value={facebook.type}
          onChange={(value) => update('type', value)}
          options={typeOptions}
        />
      </div>
      <TextControl
        label={__('URL', 'social-media-embed')}
        value={facebook.url[facebook.type]}
        onChange={(value) => update('url', value, [facebook.type])}
      />
      <ToggleControl
        label={__('Full Post', 'social-media-embed')}
        checked={facebook.fullPost}
        onChange={(value) => update('fullPost', value)}
      />
      {facebook.type === 'video' && (
        <Fragment>
          <ToggleControl
            label={__('Show Caption', 'social-media-embed')}
            checked={facebook.caption}
            onChange={(value) => update('caption', value)}
          />
          <ToggleControl
            label={__('Full Screen', 'social-media-embed')}
            checked={facebook.fullScreen}
            onChange={(value) => update('fullScreen', value)}
          />
          <ToggleControl
            label={__('Auto Play', 'social-media-embed')}
            checked={facebook.autoPlay}
            onChange={(value) => update('autoPlay', value)}
          />
        </Fragment>
      )}
      <div className="fbebPanelStyle">
        <span>{__('Width', 'social-media-embed')}</span>
        <NumberControl
          style={{ width: '140px', marginBottom: '0' }}
          value={facebook.width}
          onChange={(value) => update('width', value)}
          min={1}
          max={1200}
          step={5}
        />
      </div>
    </PanelBody>
  );
};

export default Setting;
