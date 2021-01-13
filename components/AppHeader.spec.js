import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
  describe('data', () => {
    test('returns defaults', () => {
      expect(AppHeader.data()).toEqual({
        active: false
      });
    });
  });

  describe('methods', () => {
    describe('toggleMenu', () => {
      test('should set active to true', () => {
        const mockContext = {
          active: false,
          $emit: jest.fn()
        };
        AppHeader.methods.toggleMenu.bind(mockContext)();
        expect(mockContext.active).toBeTruthy();
        expect(mockContext.$emit).toHaveBeenCalledWith('menu');
      });

      test('should set active to false', () => {
        const mockContext = {
          active: true,
          $emit: jest.fn()
        };
        AppHeader.methods.toggleMenu.bind(mockContext)();
        expect(mockContext.active).toBeFalsy();
        expect(mockContext.$emit).toHaveBeenCalledWith('menu');
      });
    });
  });

  describe('templates', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(AppHeader);
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should not add active class', () => {
      const wrapper = mount(AppHeader, {
        data: () => {
          return {
            active: false
          };
        }
      });
      const logo = wrapper.find('[data-app-header-logo]');
      const toggle = wrapper.find('[data-app-header-toggle]');

      expect(logo.exists()).toBeTruthy();
      expect(logo.classes()).toContain('logo');
      expect(logo.text()).toContain('video.js');

      expect(toggle.exists()).toBeTruthy();
      expect(toggle.classes()).toContain('toggle');
      expect(toggle.classes()).not.toContain('active');
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should add active class', () => {
      const wrapper = mount(AppHeader, {
        data: () => {
          return {
            active: true
          };
        }
      });
      const logo = wrapper.find('[data-app-header-logo]');
      const toggle = wrapper.find('[data-app-header-toggle]');

      expect(logo.exists()).toBeTruthy();
      expect(logo.classes()).toContain('logo');
      expect(logo.text()).toContain('video.js');

      expect(toggle.exists()).toBeTruthy();
      expect(toggle.classes()).toContain('toggle');
      expect(toggle.classes()).toContain('active');
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
