import {StoryObj, Meta} from '@storybook/react'
import {Heading, HeadingProps} from '@ds-flow/react'
import React from 'react'


export default {
    title: 'Typography/Heading',
    component: Heading,
    tags: ['autodocs'],
    args: {
        children: 'Example Heading',
        as: 'strong'
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
    
}

export const CustonTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading'
    },
    parameters: { 
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas pode ser alteros com a propriedade `as` '
            }
        }
    }
}