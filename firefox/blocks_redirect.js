browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    let path = details.url.split('bl.ocks.org')[1];
    console.log(`bl.ocks Redirector: redirecting ${path}`);
    return { redirectUrl: `https://blocks.roadtolarissa.com${path}` }
  },
  { urls: [ "*://bl.ocks.org/*" ] },
  [ "blocking" ]
)