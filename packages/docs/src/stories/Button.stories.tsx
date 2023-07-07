import {StoryObj, Meta} from '@storybook/react'
import {Button} from '@ds-flow/react'

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