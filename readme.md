React Project Start-up
-------------------------

This repository provides initial configuration for a project
incorporating

* Webpack 4
* React 16
* Redux 4
* Babel 7

Fork this repository into a new repository to begin development
of an React/Redux app build with Webpack 4.

## Webpack 4 Changes

There were several changes I had to make to accommodate Webpack 4.

**References**

* [Hacker Noon](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)

### Babel Presets

The Babel presets got more powerful; but their configuration got more
complicated.

**References**

* [Babel Page](https://babeljs.io/docs/en/next/babel-preset-env.html)


### Webpack Dev Server Host Header Checking

As a security precaution, Webpack Dev Server now checks that the HTTP 
`HOST` header matches the host on which devServer listens.  This breaks 
if we are using localhost.  This is discussed in the following links.

**References**

* [Webpack Dev Server Security Issues](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a)
* [Stack Overflow](https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we/43621275#43621275)


### CSS/SCSS

The new kid on the block is MiniCssExtractPlugin
(replaces [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)).

**References**

* [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
* [Splitting Chunks](https://stackoverflow.com/questions/49410921/webpack-4-mini-css-extract-plugin-sass-loader-splitchunks)

