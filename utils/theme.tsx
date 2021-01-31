import { extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: '#3a3a3a'
            }
        }
    },
    components: {
        Button: {
            variants: {
                ghost: {
                    _hover: {
                        bg: 'transparent'
                    },
                    _active: {
                        bg: 'transparent'
                    }
                }
            }
        }
    }
});

export const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'Varela Round';
                font-style: normal;
                font-weight: 400;
                src: local('Varela Round Regular'), local('VarelaRound-Regular'),
                    url('/fonts/varela-round-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                    url('/fonts/varela-round-v12-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            }
        `}
    />
);
