import videojs, { VideoJsPlayer } from "video.js";

const Plugin = videojs.getPlugin("plugin");

export class VideoJsFbfWheelPlugin extends Plugin {
  static defaultOptions: VideoJsFbfWheelPluginOptions = {
    fps: 30,
    direction: -1,
  };
  constructor(
    player: VideoJsPlayer,
    options: Partial<VideoJsFbfWheelPluginOptions>
  ) {
    super(player);
    const { fps, direction } = {
      ...VideoJsFbfWheelPlugin.defaultOptions,
      ...options,
    };
    player.ready(() => {
      (player.el() as HTMLElement).addEventListener(
        "wheel",
        (e: WheelEvent) => {
          e.preventDefault();
          const frames = (e.deltaY > 0 ? 1 : -1) * direction;
          player.currentTime(player.currentTime() + (1 / fps) * frames);
        }
      );
    });
  }
}

videojs.registerPlugin("fbfWheel", VideoJsFbfWheelPlugin);

declare module "video.js" {
  // tell the type system our plugin method exists...
  export interface VideoJsPlayer {
    fbfWheel: (
      options?: Partial<VideoJsFbfWheelPluginOptions>
    ) => VideoJsFbfWheelPlugin;
  }
  // tell the type system our plugin options exist...
  export interface VideoJsPlayerPluginOptions {
    fbfWheel?: Partial<VideoJsFbfWheelPluginOptions>;
  }
}

export interface VideoJsFbfWheelPluginOptions {
  fps: number;
  direction: 1 | -1;
}
