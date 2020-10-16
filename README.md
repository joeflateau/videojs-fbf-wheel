# videojs-fbf-wheel

[Stackblitz Demo](https://typescript-fbf-wheel-npm.stackblitz.io)

Step frame-by-frame\* through videos.

_\* Technically you cannot step through HTML5 video frame-by-frame, so you must specify a frame rate and we will step through at the specified frame rate._

## Usage

1. install `npm i videojs-fbf-wheel` or `yarn add videojs-fbf-wheel`

1. Import the plugin javascript using a script tag, require or import statement

   ```typescript
   import videojs from "video.js";
   import "videojs-fbf-wheel";
   ```

1. Initialize the plugin

   ```typescript
   const player = videojs(videoEl);
   player.fbfWheel({
     fps: 60, // framerate of your content, we'll step 1/fps seconds for each wheel event
     direction: 1, // which direction to move based on the mouse wheel. -1 by default which means mousewheel down on a Mac will move the video forward one frame. adjust to suit your needs
   });
   ```
