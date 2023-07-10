import { 
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space } from '@ds-flow/tokens'
import {createStitches, defaultThemeMap} from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, createTheme, theme, config } = createStitches({
    themeMap:{
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
        borderRadius: 'radii'
    },
    theme: {
        colors,
        fonts,
        fontSizes,
        fontWeights,
        lineHeights,
        radii,
        space
    }
})