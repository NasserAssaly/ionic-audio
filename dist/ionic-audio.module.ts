import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { IonicModule } from 'ionic-angular';

import {AudioTrackComponent} from './ionic-audio-track-component';
import {AudioTrackProgressComponent, AudioTrackProgressBarComponent} from './ionic-audio-track-progress-component';
import {AudioTrackPlayComponent} from './ionic-audio-track-play-component';
import {AudioTimePipe} from './ionic-audio-time-pipe';
import {AudioProvider, audioProviderfactory} from './ionic-audio-providers';

@NgModule({
  imports:      [ CommonModule, IonicModule  ],
  declarations: [ 
    AudioTrackComponent,
    AudioTrackProgressComponent, 
    AudioTrackProgressBarComponent,
    AudioTrackPlayComponent,
    AudioTimePipe
  ],
  exports:      [
    AudioTrackComponent,
    AudioTrackProgressComponent, 
    AudioTrackProgressBarComponent,
    AudioTrackPlayComponent,
    AudioTimePipe
  ],
  providers:    [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IonicAudioModule { 
  /**
   * Configures Ionic Audio to use either Cordova or HTML5 audio.
   * If no ```audioProvider``` is set it will automatically choose one based on the current environment
   */
  static forRoot(audioProvider?: AudioProvider): ModuleWithProviders {
    let audioProviderInit = audioProvider ? 
      { provide: AudioProvider, useValue: audioProvider } : 
      { provide: AudioProvider, useFactory: audioProviderfactory };
    return {
      ngModule: IonicAudioModule,
      providers: [
        audioProviderInit
      ]
    };
  }
}
