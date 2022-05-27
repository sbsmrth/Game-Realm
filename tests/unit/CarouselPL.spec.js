import { shallowMount } from "@vue/test-utils";
import CarouselPL from '@/components/details/CarouselPL'
import { game } from '../Mock'


describe('CarouselPL.vue', () => {
  it('should iterate images for carousel', () => {
    const wrapper = shallowMount(CarouselPL, {
      props: {
        images: game.screenshots
      }
    });

    expect(wrapper.findAll('[data-test="image"]')).toHaveLength(4);
  });
}); 