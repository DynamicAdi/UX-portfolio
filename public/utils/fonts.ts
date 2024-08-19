import { League_Spartan, Tenor_Sans, DM_Sans } from "next/font/google";
import localFont from "next/font/local";


export const mainFont = League_Spartan({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-main",
});

// export const  = Tenor_Sans({
//     subsets: ["latin"],
//     variable: '',
//     weight: "400",
// });

export const assetFont = DM_Sans({
    subsets: ["latin"],
    variable: '--font-pop',
    weight: ['300', '400', '500', '600', '700', '800'],
});

export const secondaryFont = localFont({
    src: [
        {
            path: './astralaga-font/astralaga-light.ttf',
            weight: "300",
            style: 'normal',
        },
        {
            path: './astralaga-font/astralaga-regular.ttf',
            weight: "400",
            style: 'normal',
        },
        {
            path: './astralaga-font/astralaga-medium.ttf',
            weight: "500",
            style: 'normal',
        },
        {
            path: './astralaga-font/astralaga-semibold.ttf',
            weight: "600",
            style: 'normal',
        },
        {
            path: './astralaga-font/astralaga-bold.ttf',
            weight: "700",
            style: 'normal',
        },
    ],
    variable: '--font-minor',
})


export const customUiFont = localFont({
    src: [
        {
            path: './Monarque-Font/Monarque-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './Monarque-Font/Monarque-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: './Monarque-Font/Monarque-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Monarque-Font/Monarque-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Monarque-Font/Monarque-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Monarque-Font/Monarque-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: './Monarque-Font/Monarque-Bold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './Monarque-Font/Monarque-BoldItalic.ttf',
            weight: '800',
            style: 'italic',
        },
        

    ],
    variable: '--font-custom',
})