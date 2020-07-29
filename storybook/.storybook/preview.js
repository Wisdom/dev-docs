import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';

import { withPaddings } from 'storybook-addon-paddings';



// Paddings
addDecorator(withPaddings);
addParameters({
    paddings: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px', default: true },
        { name: 'Large', value: '64px' },
    ],
});
