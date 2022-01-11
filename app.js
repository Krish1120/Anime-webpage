const navbarslide = () => {
    const togglebtn = document.querySelector('.togglebtn');
    const navbar = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li')

    togglebtn.addEventListener('click', () =>{
        navbar.classList.toggle('togglebtn-active');

        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navlinkFade 0.5s ease forwards ${index/4}s`
            }
        });
        togglebtn.classList.toggle('toggle')

    });
}
navbarslide();