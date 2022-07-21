// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import "@fontsource/space-mono";
// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
    ...config,
    fonts: {

        body: 'Space Mono'
    }
})

export default theme