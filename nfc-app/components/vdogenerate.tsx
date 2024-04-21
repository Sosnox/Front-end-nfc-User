import React from 'react';

export const YouTubeVideo = ({ videoId }: {videoId : string}) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0 }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={src}
        title='YouTube video player'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

