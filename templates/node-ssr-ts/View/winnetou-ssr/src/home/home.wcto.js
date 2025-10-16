import {
 Constructos
} from "winnetoujs/core/constructos";
export class $html extends Constructos {
 // ========================================
 /**
  * 
  * @param {object} [elements]
  * @param {object} [options]
  * @param {string} [options.identifier]
  */
 constructor (elements, options) {
  super();
  /**@protected */
  this.identifier = this._getIdentifier(options ?
   options.identifier || "notSet" : "notSet");
  const digestedPropsToString = this
   ._mutableToString(elements);
  /**@protected */
  this.component = this.code(
   digestedPropsToString);
  this._saveUsingMutable(
   `html-win-${this.identifier}`, elements,
   options, $html);
 }
 /**
  * Generate the HTML code for this constructo
  * @param {*} props - The properties object containing all prop values
  * @returns {string} The HTML template string with interpolated values
  * @protected
  */
 code (props) {
  return `
  <html lang="en" id="html-win-${this.identifier}">
    <head>
      <meta charset="UTF-8" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" >
      <title>The Small Arkon</title>
      <link         rel="icon"
        type="image/png"
        href="/Public/images/arkon-favicon.png" >
      <link rel="stylesheet" href="/css/arkon.css" >
      <meta         name="description"
        content="The Small Arkon is a web application built with Winnetou SSR and Arkon UI library." >
      <meta         name="keywords"
        content="Winnetou, Arkon, SSR, Web Application, UI Library" >
      <meta name="author" content="Cedros Development" >
    </head>
    <body>
      <div id="app"></div>
      <script src="/js/arkon.js" type="module"></script>
    </body>
  </html>
`;
 }
 /**
  * Create Winnetou Constructo
  * @param  {object|string} output The node or list of nodes where the component will be created
  * @param  {object} [options] Options to control how the construct is inserted. Optional.
  * @param  {boolean} [options.clear] Clean the node before inserting the construct
  * @param  {boolean} [options.reverse] Place the construct in front of other constructs
  */
 create (output, options) {
  this.attachToDOM(this.component, output,
   options);
  return {
   ids: {
    html: `html-win-${this.identifier}`,
   },
  };
 }
 /**
  * Get the constructo as a string
  * @returns {string} The component HTML string
  */
 constructoString () {
  return this.component;
 }
}
