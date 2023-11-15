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



function ClickCarousel(element) {
    var CarouselIndicator = document.querySelectorAll('.carousel-indicators li')
    CarouselIndicator.forEach(function (indicator) {
        indicator.classList.remove('active');
    });

    // Thêm lớp 'active' cho phần tử được nhấp vào
    CarouselIndicator[element].classList.add('active');
    CarouselIndicator[element].style.background = "#189A46"
    CarouselIndicator[element].style.width = "30px"
    CarouselIndicator[element].style.height = "10px"
    CarouselIndicator[element].style.borderRadius = "8px"
}

function handleButton(){
    var btnHeader = document.querySelector(".navbar-toggler .navbar-toggler-icon")
    btnHeader.addEventListener("click", function() {
       

        if(btnHeader.classList.contains("fa-bars" )){
            btnHeader.classList.remove('fa-bars')
            btnHeader.classList.add('fa-solid', 'fa-xmark')
            btnHeader.style.display = "block"
            
        }

        else{
            btnHeader.classList.add('fa-bars')
            btnHeader.classList.remove('fa-solid', 'fa-xmark')
            
        }
        
       
    })
}

handleButton()