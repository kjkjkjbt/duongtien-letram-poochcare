var BackToTop = document.querySelector('.backTotop')



window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY;
    if(scrollValue  > 70)
    {
        BackToTop.style.display = 'block'
    }
    
    else
    {
        BackToTop.style.display = 'none'
    }
    console.log(scrollValue);
});

BackToTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
})