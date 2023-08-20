import React from 'react'
import {Link} from 'react-router-dom'

function Music() {
  return (
    <div>
      <div className="container d-none d-lg-block" id="container-div">
        <div className="black center-text">
          <h1 className="monoton">LATEST RELEASES</h1>
          <div className="music-container">
            <iframe className="track d-none d-lg-block" src="https://bandcamp.com/EmbeddedPlayer/track=1856865821/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/were-gonna-make-it'></a>
            </iframe>
            <iframe className="track d-none d-lg-block" src="https://bandcamp.com/EmbeddedPlayer/track=2459908476/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/brightly-lit-room'></a>
            </iframe>
            <iframe className="album d-none d-lg-block" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/track=1856865821/size=small/bgcol=333333/linkcol=e32c14/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/were-gonna-make-it'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/track=2459908476/size=small/bgcol=333333/linkcol=e32c14/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/brightly-lit-room'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=3946968099/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=3898717670/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=903824012/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=1810433489/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
          </div>
        </div>
      </div>

      <div className="d-lg-none" id="mobile-container">
        <div className="black center-text">
          <h1 className="monoton">LATEST RELEASES</h1>
          <div className="music-container">
            <iframe className="track d-none d-lg-block" src="https://bandcamp.com/EmbeddedPlayer/track=1856865821/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/were-gonna-make-it'></a>
            </iframe>
            <iframe className="track d-none d-lg-block" src="https://bandcamp.com/EmbeddedPlayer/track=2459908476/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/brightly-lit-room'></a>
            </iframe>
            <iframe className="album d-none d-lg-block" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/track=1856865821/size=small/bgcol=333333/linkcol=e32c14/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/were-gonna-make-it'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/track=2459908476/size=small/bgcol=333333/linkcol=e32c14/transparent=true/">
              <a href='https://stilted.bandcamp.com/track/brightly-lit-room'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=3946968099/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=3898717670/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=903824012/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
            <iframe className="track-mobile d-lg-none" src="https://bandcamp.com/EmbeddedPlayer/album=775819202/size=small/bgcol=333333/linkcol=e32c14/track=1810433489/transparent=true/">
              <a href='https://stilted.bandcamp.com/album/the-big-picture-aside'></a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music