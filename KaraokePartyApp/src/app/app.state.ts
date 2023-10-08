import { VideoNamesState } from './store/video-names-store/video-names.reducer';
import { YouTubeState } from './store/you-tube-store/you-tube-store.reducer';

export interface AppState {
  videoId: YouTubeState;
  videoNames: VideoNamesState;
}
