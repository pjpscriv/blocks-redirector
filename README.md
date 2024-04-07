<p align="center"><img width="128" height="128" src="https://raw.githubusercontent.com/pjpscriv/blocks-redirector/main/firefox/icons/blocks-redirect-219.png"></p>
<h1 align="center">bl.ocks Redirector</h1>

<p align="center">
  </br></br>
  <a href="https://chrome.google.com/webstore/detail/#">
    <picture style="filter: grayscale(1)">
      <source srcset="https://i.imgur.com/XBIE9pk.png" media="(prefers-color-scheme: dark)">
      <img height="58" src="https://i.imgur.com/oGxig2F.png" alt="Chrome Web Store"></picture></a>
  <a href="https://addons.mozilla.org/firefox/addon/#">
    <picture style="filter: grayscale(1)">
      <source srcset="https://i.imgur.com/ZluoP7T.png" media="(prefers-color-scheme: dark)">
      <img height="58" src="https://i.imgur.com/4PobQqE.png" alt="Firefox add-ons"></picture></a>
  </br></br>
  <i>(Extensions currently pending approval)</i>
</p>

Chrome & Firefox extensions for redirecting now-dead [bl.ocks.org](https://bl.ocks.org) links to [blocks.roadtolarissa.com](https://blocks.roadtolarissa.com).

## Installation
See the links above.

## Development
All the required files for each extension live in their seperate folders.

All of the Chrome extension files live in `chrome/`. For details for how to load these files into Chrome see [this page](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).

All of the Firefox addon files live in `firefox/`. For details on the development workflow see [this page](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Firefox uses the node `web-ext` package for packaging the extension, this can be installed with:

```
npm install --global web-ext
```
