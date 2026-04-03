import { Chip } from '@/shared/components';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['next', 'api', 'career', 'modernJs', 'web'],
      description: 'Chip 타입',
    },
  },
};

export const Playground = (args) => <Chip {...args} />;

Playground.args = {
  type: 'next',
};
