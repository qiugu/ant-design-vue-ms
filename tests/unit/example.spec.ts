import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BasicLayout from '@/components/layouts/BasicLayout.vue';

describe('BasicLayout.vue', () => {
  it('renders data when passed', () => {
    //  渲染当前组件
    const wrapper = shallowMount(BasicLayout, {
      data: {
        collapsed: false,
        visible: false,
        messageNumber: 0
      },
    });
    expect(wrapper.find('.menu-fold').exists());
  });
});
