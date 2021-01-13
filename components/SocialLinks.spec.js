import { mount } from '@vue/test-utils';
import SocialLinks from '@/components/SocialLinks.vue';

describe('SocialLinks', () => {
  describe('templates', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(SocialLinks);
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should create menu', () => {
      const wrapper = mount(SocialLinks);
      const links = wrapper.find('[data-social-links]');
      const facebook = wrapper.find('[data-social-links-facebook]');
      const facebookImg = wrapper.find('[data-social-links-facebook-img]');
      const twitter = wrapper.find('[data-social-links-twitter]');
      const twitterImg = wrapper.find('[data-social-links-twitter-img]');
      const instagram = wrapper.find('[data-social-links-instagram]');
      const instagramImg = wrapper.find('[data-social-links-instagram-img]');

      expect(links.exists()).toBeTruthy();
      expect(links.classes()).toContain('social');
      expect(facebook.exists()).toBeTruthy();
      expect(facebook.attributes().href).toEqual('#');
      expect(facebookImg.exists()).toBeTruthy();
      expect(facebookImg.attributes().src).toEqual(
        '~/assets/images/facebook.png'
      );
      expect(twitter.exists()).toBeTruthy();
      expect(twitter.attributes().href).toEqual('https://twitter.com/@videojs');
      expect(twitterImg.exists()).toBeTruthy();
      expect(twitterImg.attributes().src).toEqual(
        '~/assets/images/twitter.png'
      );
      expect(instagram.exists()).toBeTruthy();
      expect(instagram.attributes().href).toEqual('#');
      expect(instagramImg.exists()).toBeTruthy();
      expect(instagramImg.attributes().src).toEqual(
        '~/assets/images/instagram.png'
      );
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
