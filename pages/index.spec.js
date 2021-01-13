import { shallowMount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Index', () => {
  describe('data', () => {
    test('returns defaults', () => {
      expect(Index.data()).toEqual({
        active: false
      });
    });
  });

  describe('methods', () => {
    describe('toggleMenu', () => {
      test('should set active to true', () => {
        const mockContext = {
          active: false
        };
        Index.methods.toggleMenu.bind(mockContext)();
        expect(mockContext.active).toBeTruthy();
      });

      test('should set active to false', () => {
        const mockContext = {
          active: true
        };
        Index.methods.toggleMenu.bind(mockContext)();
        expect(mockContext.active).toBeFalsy();
      });
    });
  });

  describe('templates', () => {
    test('is a Vue instance', () => {
      const wrapper = shallowMount(Index);
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should not add active class', () => {
      const wrapper = shallowMount(Index, {
        data: () => {
          return {
            active: false
          };
        }
      });
      const section = wrapper.find('[data-index-section]');

      expect(section.exists()).toBeTruthy();
      expect(section.classes()).toContain('showcase');
      expect(section.classes()).not.toContain('active');
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should add active class', () => {
      const wrapper = shallowMount(Index, {
        data: () => {
          return {
            active: true
          };
        }
      });
      const section = wrapper.find('[data-index-section]');

      expect(section.exists()).toBeTruthy();
      expect(section.classes()).toContain('showcase');
      expect(section.classes()).toContain('active');
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should validate text', () => {
      const wrapper = shallowMount(Index, {
        data: () => {
          return {
            active: false
          };
        }
      });
      const text = wrapper.find('[data-index-text]');
      const title = wrapper.find('[data-index-title]');
      const subtitle = wrapper.find('[data-index-subtitle]');
      const paragraph = wrapper.find('[data-index-paragraph]');
      const link = wrapper.find('[data-index-link]');

      expect(text.exists()).toBeTruthy();
      expect(text.classes()).toContain('text');
      expect(title.exists()).toBeTruthy();
      expect(title.text()).toContain('Make your player yours');
      expect(subtitle.exists()).toBeTruthy();
      expect(subtitle.text()).toContain(
        'most popular open source HTML5 player framework'
      );
      expect(paragraph.exists()).toBeTruthy();
      expect(paragraph.text()).toContain('Lorem ipsum dolor');
      expect(link.exists()).toBeTruthy();
      expect(link.text()).toContain('Get Started');
      expect(link.attributes().href).toEqual(
        'https://videojs.com/getting-started'
      );
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
