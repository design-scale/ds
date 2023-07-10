import { ArrowRight } from 'phosphor-react'

import {StoryObj, Meta} from '@storybook/react'
import {Button, ButtonProps} from '@ds-flow/react'
import React from 'react'

export default {
    title: 'Form/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Send'
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new',
        disabled: false
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
        disabled: false
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
        disabled: false
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true
    }
}


export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Solicitar demonstração
                <ArrowRight weight='bold'/>
            </>
        )
    },

}