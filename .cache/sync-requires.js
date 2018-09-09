// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/src/templates/blogTemplate.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/src/pages/index.js")),
  "component---src-pages-opensources-js": preferDefault(require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/src/pages/opensources.js"))
}

exports.json = {
  "offline-plugin-app-shell-fallback.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/offline-plugin-app-shell-fallback.json"),
  "blog-2017-tools-i-use.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2017-tools-i-use.json"),
  "blog-2017-http-vs-http-2.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2017-http-vs-http-2.json"),
  "blog-2017-best-practices-for-push-notifications.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2017-best-practices-for-push-notifications.json"),
  "blog-2017-what-is-web-accessibility.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2017-what-is-web-accessibility.json"),
  "blog-2017-how-to-setup-webpack.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2017-how-to-setup-webpack.json"),
  "blog-2016-css-4-selectors.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2016-css-4-selectors.json"),
  "blog-2015-web-performance-optimization.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2015-web-performance-optimization.json"),
  "blog-2014-chrome-devtools.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/blog-2014-chrome-devtools.json"),
  "404.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/404.json"),
  "about.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/about.json"),
  "index.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/index.json"),
  "opensources.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/opensources.json"),
  "404-html.json": require("/Users/gokulkal/Codelabs/gokulkrishh.github.io/.cache/json/404-html.json")
}