import GameDetailsPL from '@/components/details/GameDetailsPL';
import { shallowMount } from '@vue/test-utils';
import { game } from '../Mock'

describe('GameDetailsPL.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(GameDetailsPL, {
      props: {
        game,
      }
    });
  })

  it('should iterate details cards', () => {

    const all_rq = wrapper.findAll('[data-test="item-rq"]');

    expect(all_rq).toHaveLength(6);
  });

  it('should not render loading component', () => {
       
    const profile = wrapper.find('#loading')

    expect(profile.exists()).toBeFalsy()
  });
}); 