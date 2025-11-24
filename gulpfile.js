//npm i -D gulp gulp-replace gulp-rename gulp-svgmin gulp-wrap
const gulp = require("gulp");
const replace = require("gulp-replace");
const rename = require("gulp-rename");
const svgMin = require("gulp-svgmin");
const wrap = require("gulp-wrap");
const fs = require("fs");
const source_folder = "./public/svg_icons";
const destination_folder = "./src/app/_components/icons/";

//--------------------------------------------------------------------------------------------------------
const component_template = 
`import {BaseIcon} from "../base_icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <%= contents %>
    </BaseIcon>
  );
}`;

//--------------------------------------------------------------------------------------------------------
let components = [];
gulp.task("new_component", function () {
  return gulp.src([`${source_folder}/*.svg`])
  .pipe(  
   svgMin({
    multipass: true,
    full: true, 
    plugins: [
       {
          name: "cleanupIDs",
          params: { remove: true, minify: true },
       },
       "removeDoctype",
       "removeComments",
       "removeTitle",
       "removeDimensions",
       "collapseGroups",
       {
          name: "cleanupNumericValues",
          params: { floatPrecision: 4 },
       },
       {
          name: "convertColors",
          params: { names2hex: true, rgb2hex: true },
       },
       "removeStyleElement",
       "removeEmptyContainers",
       {
          name: "removeAttrs",
          params: {
             attrs: [
                "(filter|fill|stroke|stroke-linejoin|stroke-width|fill-rule|stroke-linecap|transform|style|class|data.*)",
                "svg:(width|height)",
             ],
          },
       },
       "removeUselessDefs",
    ],
 })
)
    .pipe(replace(/^[\s\S]*?<svg/g, "<svg"))  
    .pipe(replace(/<\/?svg(.*?)>/g, ""))  
    .pipe(wrap(component_template))  
    .pipe(rename(function (path) {
        components.push(path.basename); 
        path.extname = ".tsx"; 
      })
    )
    .pipe(gulp.dest(`${destination_folder}/icons`));  
});

//--------------------------------------------------------------------------------------------------------
gulp.task("final_component", function (cb) {
  const module_import =components.map((component) => {
                                                const component_name = component.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^./, str => str.toUpperCase()); 
                                                return `export { default as Icon${component_name} } from './icons/${component}';`;
                                           }).join("\n");

  fs.writeFile(`${destination_folder}/icons.tsx`, module_import, cb); 
});

//--------------------------------------------------------------------------------------------------------
gulp.task("default", gulp.series("new_component", "final_component"));