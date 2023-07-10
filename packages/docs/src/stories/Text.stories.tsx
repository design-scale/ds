import {StoryObj, Meta} from '@storybook/react'
import {Text, TextProps} from '@ds-flow/react'
import React from 'react'
import { elementType } from 'prop-types'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Example Text',
        as: 'strong'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
    
}