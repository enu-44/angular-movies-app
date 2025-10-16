import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { IconInput } from './icon-input';
import { FormControl, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass, heroUsers } from '@ng-icons/heroicons/outline';

const meta: Meta<IconInput> = {
  title: 'Molecules/IconInput',
  component: IconInput,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ heroUsers, heroMagnifyingGlass })],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<IconInput>;

export const Default: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    type: 'text',
    control: new FormControl('', { validators: [Validators.required] }),
    icon: 'heroMagnifyingGlass'
  },
};