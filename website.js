const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector(' .header.container');

hamburger.addEventListener('click',()=>{
    hamburger .classList.toggle('active');
    mobile_menu .classList.toggle('active');
});
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position>250){
        header.style.backgroundcolor = "#29323c";
    }else{
        header.style.backgroundcolor =  "transparent";
    }

});
menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger .classList.toggle('active');
        mobile_menu .classList.toggle('active');
    });
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx_PwKhS8Td5IfYgY0cUAmvuaYf2MAUddnth7yrDv2w0n6l_64iC8FMRG50-otK5gAk/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""  
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })