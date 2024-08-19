import { League_Spartan, Tenor_Sans, DM_Sans } from "next/font/google";

export const mainFont = League_Spartan({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-main",
});

export const secondaryFont = Tenor_Sans({
    subsets: ["latin"],
    variable: '--font-minor',
    weight: "400",
});

export const assetFont = DM_Sans({
    subsets: ["latin"],
    variable: '--font-pop',
    weight: ['300', '400', '500', '600', '700', '800'],
});

