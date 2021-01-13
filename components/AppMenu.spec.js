import { mount } from '@vue/test-utils';
import AppMenu from '@/components/AppMenu.vue';

describe('AppMenu', () => {
  describe('templates', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(AppMenu);
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should create menu', () => {
      const wrapper = mount(AppMenu);
      const menu = wrapper.find('[data-app-menu]');
      const getStarted = wrapper.find('[data-app-menu-get-started]');
      const customize = wrapper.find('[data-app-menu-customize]');
      const docs = wrapper.find('[data-app-menu-docs]');
      const blog = wrapper.find('[data-app-menu-blog]');
      const github = wrapper.find('[data-app-menu-github]');

      expect(menu.exists()).toBeTruthy();
      expect(menu.classes()).toContain('menu');
      expect(getStarted.exists()).toBeTruthy();
      expect(getStarted.text()).toContain('Get Started');
      expect(getStarted.attributes().href).toEqual(
        'https://videojs.com/getting-started'
      );
      expect(customize.exists()).toBeTruthy();
      expect(customize.text()).toContain('Customize');
      expect(customize.attributes().href).toEqual(
        'https://videojs.com/getting-started/#customize'
      );
      expect(docs.exists()).toBeTruthy();
      expect(docs.text()).toContain('Docs');
      expect(docs.attributes().href).toEqual('https://docs.videojs.com/');
      expect(blog.exists()).toBeTruthy();
      expect(blog.text()).toContain('Blog');
      expect(blog.attributes().href).toEqual('https://videojs.com/blog');
      expect(github.exists()).toBeTruthy();
      expect(github.text()).toContain('Github');
      expect(github.attributes().href).toEqual(
        'https://github.com/videojs/video.js'
      );
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
