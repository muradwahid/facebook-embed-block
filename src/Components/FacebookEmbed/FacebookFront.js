import React from 'react';

const FacebookFront = ({ attributes }) => {
  const { facebook } = attributes;
  const fbAppId = "2217305878329791"
    React.useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.FB.init({
          xfbml: true,
          version: 'v18.0',
          appId: facebook.appId || fbAppId,
        });
      };
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  return (
    <div className='fbeb-facebookEmbed-wrapper'>
      {facebook.type === 'video' && (
        <div
          className="fb-video"
          data-href={facebook.url.video}
          data-width={facebook.width}
          data-show-text={facebook.fullPost}
          data-show-captions={facebook.caption}
          data-autoplay={facebook.autoPlay}
          data-allowfullscreen={facebook.fullScreen}
        ></div>
      )}
      {facebook.type === 'post' && (
        <div
          className="fb-post"
          data-href={facebook.url.post}
          data-width={facebook.width}
          data-show-text={facebook.fullPost}
        ></div>
      )}
      {/* <script
        async
        defer
        crossOrigin="anonymous"
        src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=${facebook.appId}`}
        nonce="CAr8Z5Od"
      ></script> */}
    </div>
  );
};

export default FacebookFront;