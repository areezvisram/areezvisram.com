import React from 'react';
import Title from '../Title';

export default {
    title: 'Title',
    component: Title,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <Title {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Title',
  };