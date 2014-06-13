var gaPlugin;

///////////////
// LISTENERS //
///////////////

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("backbutton", onBackKeyDown, false);

///////////////////
// MAIN ACTIVITY //
///////////////////

$(document).ready(function() 
{
	$(".live-tile").liveTile();
	//localStorage.removeItem("launchCounter"); // for debugging
	checkLaunchCounter();
	initFirstLevelView();
	if (parseInt(localStorage.getItem("launchCounter")) == 1)
	{
	  firstLaunch();
	}
	suggestNextWorkout();
	$("#loading").fadeOut("slow");
});

///////////////////////////////////
// FUNCTIONS CALLED BY LISTENERS //
///////////////////////////////////

function onDeviceReady() 
{
  gaPlugin = window.plugins.gaPlugin;
  gaPlugin.init(successHandler, errorHandler, "UA-51549024-1", 1);
  gaPlugin.trackPage(nativePluginResultHandler, nativePluginErrorHandler, "index.html");
  gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}

function onBackKeyDown() 
{
  if(workoutBeingViewed != 0)
  {
    rememberWorkout(workoutBeingViewed);
  }
}

////////////////////////////
// DEBUG MESSAGE HANDLERS //
////////////////////////////

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