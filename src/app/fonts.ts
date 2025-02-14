/* eslint-disable camelcase */
import { Barlow_Condensed, Poppins, Anton } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '900'],
  variable: '--font-poppins',
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['800', '900'],
  variable: '--font-barlow-condensed',
});

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-anton',
});