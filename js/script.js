    console.log('app is alive');{
}
// #6 #switch channel function passing parameters as arguments to change the innerHTML
function switchChannel(channelName, image){
    console.log('tuning into channel' + channelName);
    document.getElementById('chan-name').innerHTML=channelName;
// #6 #function property for #switching location name and hyperlink
    document.querySelector('#chan-location').innerHTML="upgrading.never.helps";
    document.querySelector('#chan-location').href="https://map.what3words.com/upgrading.never.helps";
    document.querySelector('#chan-location').target="_blank";

// #6 content:selector filter is used to identify which #channelTab to highlight 
    $('li').removeClass('selected');
    $('li:contains('+channelName+')').addClass('selected');
// #6 updatestarSource is an invoked on .js file #function that passes an #argument 'image' to the function below to change the star status in the #app-bar 
    updateStarSource(image);
  
}
// #6 updatestarSource methods in order to complete the function
function updateStarSource(image){
    $('#app-star').attr('src','http://ip.lfe.mw.tum.de/sections/' + image +'.png');
}

// #6 #function and methods to change an #unfilled star in the app-bar to #filled
function turnStar(){
    $('#app-star').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
    console.log ('turning star');
}
// #6 the #argument tabId is passed from the invoked function as a #selector in order to identify which tab the user clicked on and select it
function selectTab(tabId){
   $('#tab-bar, button').removeClass('selected');
   $(tabId).addClass('selected');
   console.log('selecting tab');
}
// #6 this function toggles on and off the emoji box
function toggleEmojis(){
    $('#emojis').toggle();
}