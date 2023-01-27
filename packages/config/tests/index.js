"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeFrameworkPathInImports = exports.removeCode = exports.dynamicImports = exports.changeImports = exports.extractImports = void 0;
const extractImports = (framework) => new RegExp(`// import ${framework}(.*?)// end import ${framework}`, 'gs');
exports.extractImports = extractImports;
const changeImports = (framework) => new RegExp(`import(.*?)from.*?\@storefront-ui\/${framework}.*?\;`, 'gs');
exports.changeImports = changeImports;
const dynamicImports = (framework) => new RegExp(`@storefront-ui/${framework}/index`, 'gm');
exports.dynamicImports = dynamicImports;
const removeCode = (framework) => new RegExp(`// ${framework}.*?// end ${framework}`, 'gs');
exports.removeCode = removeCode;
const changeFrameworkPathInImports = (framework) => new RegExp(`(import.*?from.*?)(\/${framework}\/)(.*?;)`, 'gs');
exports.changeFrameworkPathInImports = changeFrameworkPathInImports;
