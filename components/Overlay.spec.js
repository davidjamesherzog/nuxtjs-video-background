import { mount } from '@vue/test-utils';
import Overlay from '@/components/Overlay.vue';

describe('Overlay', () => {
  describe('templates', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Overlay);
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should create overlay', () => {
      const wrapper = mount(Overlay);
      const overlay = wrapper.find('[data-overlay]');

      expect(overlay.exists()).toBeTruthy();
      expect(overlay.classes()).toContain('overlay');
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
