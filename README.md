![Logo](https://user-images.githubusercontent.com/6104940/111038514-52a0f700-8421-11eb-824e-5f2d2d125005.png)

# Three.js TypeScript Webpack Starter

A starter project for using Three.js, TypeScript, SCSS and Webpack.

## Features
- Webpack 5 + HMR
- TypeScript + Three.js
- SCSS + Autoprefixing 


## 🚀 Getting Started

Get up and running with these simple steps:

1. Clone the project
2. Run `npm install`
3. Run `npm run dev`


## Configuration
Optional configuration for the project can be done in the following files below.

Open [env.config.js](/env.config.js) and you will see the default configuration for the project.


| Config      | Description |
| ----------- | ----------- |
| `.browerslistrc`      | Open [.browserslist](/.browserslist) to configure Browser support for TypeScript + SCSS compiliation. [Read more here about Browerslist](https://github.com/browserslist/browserslist). Defaults are set for last 2 versions, > 1% and IE 11.   |
| `outputConfig.destPath` | The folder in which you want your app to compile to. By default this is `dist`.               |
| `entryConfig` | Webpack Entry points, by default this will look for the TypeScript + SCSS entry point files.  More info on [Entry points here](https://webpack.js.org/concepts/entry-points/ )               |
| `copyPluginPatterns.patterns` | Configure folders you want copied over when compiling your app. Useful to copy over entire folder structures of images or fonts. |
| `devServer` | Configure the Webpack development server. Enable `https`, specify a particular `port`, or `host`. [More information on these options here](https://webpack.js.org/configuration/dev-server/)
| `scssConfig.destFileName` | Specify the output for your css. E.g `css/app.css`
| `terserPluginConfig` | Full [Terser config can be found here](https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions).


## Images, Fonts and output 

Here's an example of the default generated output to our `dist` folder.
```
- index.html
-- js
-- css
-- fonts
---- some-font-file.woff
-- images
---- path-to-example-image.jpg
```

- By default, fonts and images are copied to the `dist` folder.
- To include a reference to an image or font, it should be relative to where your css would output.

For example: 

`stylesheets/some-folder/some-file-somewhere.scss`
```css
.example {
    background-image: url("../images/path-to-image-example.jpg");
}

@font-face {
    font-family: "Example-font";
    src: url("../fonts/some-font-file.woff");
}
``` 

Would output to the folder `css/app.css` 

```
- index.html
-- js
-- css
---- app.css
-- fonts
---- some-font-file.woff
-- images
---- path-to-example-image.jpg
```


## Development

```shell
npm install
npm run dev
```

## Production
Note: This will compile to a `dist` folder.
```shell
npm run build
```

### Build tools

* [Three.js](https://threejs.org/) - Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.
* [TypeScript](https://www.typescriptlang.org) - TypeScript is a superset of JavaScript that compiles to clean JavaScript.
* [Webpack 5](https://webpack.js.org/) - App bundler for JavaScript.
* [SCSS](https://sass-lang.com/) - Preprocessor for SCSS to CSS.


### 📝License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details