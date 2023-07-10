import {StoryObj, Meta} from '@storybook/react'
import {Avatar, AvatarProps} from '@ds-flow/react'
import React from 'react'

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: 'https://github.com/gustavocabraltv.png',
        alt: 'Diego Fernandes'
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
    
}

export const WithFallback: StoryObj<AvatarProps> = { 
    args: {
        src: undefined
    }
}