import localfont from "next/font/local";
import {Inter} from "next/font/google";

export const inter=Inter({
  display:"swap",
  variable:"--font-google-inter",
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
  style:"normal"
});



export const iranSans=localfont({
  src:[
    {
      path:"../../public/fonts/IRANSansFaNum_Regular.woff2",
      style:"normal",
      weight:"200"
    },
    {
      path:"../../public/fonts/IRANSansFaNum_Medium.woff2",
      style:"normal",
      weight:"500"
    },
    {
      path:"../../public/fonts/IRANSansFaNum_Bold.woff2",
      style:"normal",
      weight:"800"
    },
  ],
  display:"swap",
  variable:"--font-local-iranSans"
});