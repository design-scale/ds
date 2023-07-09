import {StoryObj, Meta} from '@storybook/react'
import {Button} from '@ds-flow/react'
import React from 'react'

export default {
    title: 'button',
    component: Button,
    args: {
        children: 'Botão'
    }
} as Meta


export const Primary: StoryObj = {
   
}


export const Big: StoryObj = {
    args: {
        size: 'big'
    }
}

export const Accessible = () => <button>Accessible button</button>;
export const Inaccessible = () => (
    <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
  );