<h1>
    <img width="32" height="32" src="https://raw.githubusercontent.com/pjpscriv/blocks-redirector/main/firefox/icons/blocks-redirect-219.png">
    bl.ocks Redirector
</h1>

<p>
  <picture>
    <a href="https://chromewebstore.google.com/detail/blocks-redirector/cknihpkcmplnaglhkficemnbicejdjhl">
      <img src="https://img.shields.io/chrome-web-store/users/cknihpkcmplnaglhkficemnbicejdjhl?style=flat-square&logo=google-chrome&logoColor=white&label=Chrome%20users&color=%234285F4" alt="Chrome Web Store">
    </a>
  </picture>
  <picture>
    <a href="https://addons.mozilla.org/en-GB/firefox/addon/bl-ocks-redirector/">
      <img src="https://img.shields.io/amo/users/bl-ocks-redirector?style=flat-square&logo=firefox&logoColor=white&label=Firefox%20users&color=%23FF7139" alt="Firefox add-ons">
    </a>
  </picture>
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
