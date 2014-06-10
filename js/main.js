var gaPlugin;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() 
{
  gaPlugin = window.plugins.gaPlugin;
  gaPlugin.init(successHandler, errorHandler, "UA-51549024-1", 1);
  gaPlugin.trackPage(nativePluginResultHandler, nativePluginErrorHandler, "index.html");
  gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}

function successHandler() // for gaPlugin
{
  // alert("Init success.");
}

function errorHandler() // for gaPlugin
{
  // alert("Init failed.");
}

function nativePluginResultHandler() // for gaPlugin
{
  // alert("Tracking success.");
}

function nativePluginErrorHandler() // for gaPlugin
{
  // alert("Tracking failed.");
}