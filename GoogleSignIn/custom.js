function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $('.g-signin2').css('display','none');
  $('.name').html('ID: '+profile.getName());
  $('.image').attr('src', profile.getImageUrl())
  $('.email').text('Email: ' + profile.getEmail());
  $('.button').css('display','block');
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
