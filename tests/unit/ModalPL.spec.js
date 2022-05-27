import { shallowMount } from "@vue/test-utils";
import ModalPL from '@/components/details/ModalPL'
import { game } from '../Mock'


describe('ModalPL.vue', () => {
  it('should iterate requirements for modal view', () => {
    const wrapper = shallowMount(ModalPL, {
      props: {
        requirements: game.minimum_system_requirements
      }
    });

    expect(wrapper.findAll('[data-test="modal-rq"]')).toHaveLength(5);
  });
}); 