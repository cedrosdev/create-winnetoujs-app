import {
 Constructos
} from "winnetoujs/core/constructos";
export class $welcome extends Constructos {
 // ========================================
 /**
  * Welcome to WinnetouJs
  * @param {object} elements
  * @param {any} elements.logo  
  * @param {any} elements.titleStyle  
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
   `welcome-win-${this.identifier}`, elements,
   options, $welcome);
 }
 /**
  * Generate the HTML code for this constructo
  * @param {*} props - The properties object containing all prop values
  * @returns {string} The HTML template string with interpolated values
  * @protected
  */
 code (props) {
  return `
    <div id="welcome-win-${this.identifier}" class="welcome">
        ${props?.logo || ""}
        <h1 style="${props?.titleStyle || ""}">Welcome to WinnetouJs</h1>
        <p>This is a basic template to get you started with WinnetouJs.</p>
        <p>To get started, edit the files in the <code>src/</code> folder and
            run <code>npm start</code> to see your changes in action.</p>
        <p>For more information, visit the <a href="https://winnetoujs.org"
                target="_blank" rel="noopener">WinnetouJs Documentation</a>.</p>
    </div>
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
    welcome: `welcome-win-${this.identifier}`,
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
export class $img extends Constructos {
 // ========================================
 /**
  * image
  * @param {object} elements
  * @param {string} [elements.class]  a custom class for image
  * @param {any} elements.src  
  * @param {any} elements.alt  
  * @param {any} elements.width  
  * @param {any} elements.height  
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
   `img-win-${this.identifier}`, elements,
   options, $img);
 }
 /**
  * Generate the HTML code for this constructo
  * @param {*} props - The properties object containing all prop values
  * @returns {string} The HTML template string with interpolated values
  * @protected
  */
 code (props) {
  return `
    <img id="img-win-${this.identifier}" class="${props?.class || ""}"
        src="${props?.src || ""}" alt="${props?.alt || ""}" width="${props?.width || ""}" height="${props?.height || ""}">
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
    img: `img-win-${this.identifier}`,
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
