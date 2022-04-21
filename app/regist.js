$(document).ready(function(){
  $('#signup_form button[type="submit"]').click((event)=>{
    event.preventDefault();
    $.get('./signup', {
      account: $('#signup_form input[name=account]').val(),
      password: $('#signup_form input[name=password]').val(),
      username: $('#signup_form input[name=username]').val(),
      email: $('#signup_form input[name=email]').val()
    },(data)=>{
      $('#test').html(data)
    })
  })
})