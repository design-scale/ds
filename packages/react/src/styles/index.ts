import {colors,space, fonts} from '@ds-flow/tokens'
import {createStitches, defaultThemeMap} from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, createTheme, theme, config } = createStitches({
    themeMap:{
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    theme: {
        colors: colors,
        space: space,
        fonts: fonts 
    }
})