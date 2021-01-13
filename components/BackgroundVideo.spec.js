import { mount } from '@vue/test-utils';
// import BackgroundVideo from '@/components/BackgroundVideo.vue';
import {
  // eslint-disable-next-line import/no-named-default
  default as BackgroundVideo,
  __RewireAPI__ // eslint-disable-line import/named
} from '@/components/BackgroundVideo.vue';

describe('BackgroundVideo', () => {
  describe('data', () => {
    test('returns defaults', () => {
      expect(BackgroundVideo.data()).toEqual({
        video: null
      });
    });
  });

  describe('mounted', () => {
    test('should set create video.js instance and start video', () => {
      const mockContext = {
        src: 'video.mp4'
      };
      const mockVideo = {
        src: jest.fn()
      };
      const spy = jest.fn(() => mockVideo);
      __RewireAPI__.__Rewire__('videojs', spy);
      BackgroundVideo.mounted.bind(mockContext)();

      expect(spy).toHaveBeenCalledWith('video-player', {
        autoplay: true,
        loop: true,
        muted: true,
        controls: false,
        techOrder: ['html5']
      });
      expect(mockContext.video).toBeDefined();
      expect(mockContext.video.src).toHaveBeenCalledWith([
        {
          type: 'video/mp4',
          src: mockContext.src
        }
      ]);
    });
  });

  describe('templates', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(BackgroundVideo, {
        propsData: {
          src: 'some.mp4'
        }
      });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should have video element', () => {
      const wrapper = mount(BackgroundVideo, {
        propsData: {
          src: 'some.mp4'
        }
      });
      const video = wrapper.find('[data-background-video]');

      expect(video.exists()).toBeTruthy();
      expect(video.classes()).toContain('video-js');
      expect(video.classes()).toContain('vjs-theme-sea');
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
