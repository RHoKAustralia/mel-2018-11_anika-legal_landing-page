/* eslint-disable */
import React from 'react'

const AnikaIntroVideo = ({ className }) => (
  <div
    className={className}
    style={{ padding: '56.25% 0 0 0', position: 'relative' }}
  >
    <iframe
      src="https://player.vimeo.com/video/262817127?title=0&byline=0&portrait=0"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      frameBorder="0"
      allowFullScreen
    />
    <script src="https://player.vimeo.com/api/player.js" />
  </div>
)

export default AnikaIntroVideo
