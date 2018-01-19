function initNavbar(){
  var toggleBtn = document.querySelector('.navbar-toggle');
  var collapsibleMenu = document.querySelector('.navbar-collapse')
  if(!toggleBtn || !collapsibleMenu) return;
  // console.log(toggleBtn, collapsibleMenu)

  toggleBtn.addEventListener('click', function(e){
    if(collapsibleMenu.classList.contains('collapse')) {
      collapsibleMenu.classList.remove('collapse');
    }
    else{
      collapsibleMenu.classList.add('collapse');
    }
    e.stopPropagation();
  })
  document.body.addEventListener('click', function(){
    collapsibleMenu.classList.add('collapse');
  })
}

function initJumbotrons() {
  var jumbotrons = document.querySelectorAll('.jumbotron');
  jumbotrons.forEach(function(jumbo){
    // console.log(jumbo)
    jumbo.style.backgroundImage = 'url("'+ jumbo.dataset.image + '")'
  })
  // background-image: url("/assets/images/illustrations/creative_1280.jpg"), linear-gradient(to right, white 0%, #aaa 100%);
}

function initCarousels() {
  
}

(function(){
  initNavbar();
  initCarousels();
  initJumbotrons();
})();