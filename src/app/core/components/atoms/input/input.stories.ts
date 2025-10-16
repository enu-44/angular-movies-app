import { Meta, StoryObj } from '@storybook/angular';
import { Input } from './input';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
    type: 'text',
    control: new FormControl(''),
    errorMessage: 'Invalid name',
  },
};

export const Validate: Story = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
    control: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    errorMessage: 'Invalid email',
  },
};

export const WithoutFormControl: Story = {
  args: {
    placeholder: 'Search...',
    type: 'text',
    errorMessage: '',
  },
};
