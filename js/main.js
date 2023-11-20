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
    
});

BackToTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
})



function handleButton(){
    var btnHeader = document.querySelector(".navbar-toggler .navbar-toggler-icon")
    btnHeader.onclick = function() {
       

        if(btnHeader.classList.contains("fa-bars" )){
            btnHeader.classList.remove('fa-bars')
            btnHeader.classList.add('fa-solid', 'fa-xmark')
            btnHeader.style.display = "block"
            
        }

        else{
            btnHeader.classList.add('fa-bars')
            btnHeader.classList.remove('fa-solid', 'fa-xmark')
            
        }
        
       
    }
}

handleButton()

function changeColor(){
    var btnMoon = document.querySelector('.icon__dark')
    var btnSun = document.querySelector('.icon__light')
    var sectionHeader = document.querySelector('.header')
    var navLink = document.querySelectorAll('.nav-item .nav-color')
    var sectionAbout = document.querySelector('.aboutUs')
    var sectionTitle = document.querySelectorAll('.section__title h3')
    var sectionText = document.querySelectorAll('.text__layout')
    var readMore = document.querySelectorAll('.read-more')
    var sectionService = document.querySelector('.services')
    var servicesItem = document.querySelectorAll('.service__item-inner')
    var servicesTitle = document.querySelectorAll('.title-head')
    var sectionOffer = document.querySelector('.offer')
    var sectionItemOffer = document.querySelectorAll('.offer__item li span')
    var sectionPackages = document.querySelector('.packages')
    var packagesItem = document.querySelectorAll('.packages__item')
    var packagesItemInner = document.querySelectorAll('.packages__item--inner h6')
    var packagesList = document.querySelectorAll('.packages__item-list li')
    var sectionNutrition = document.querySelector('.nutrition')
    var sectionFeeabacks = document.querySelector('.feedbacks')
    var feedbacksItem = document.querySelectorAll('.feedbacks__item')
    var feedbacksName = document.querySelectorAll('.feedbacks__avt-name h4')
    var feedbacksText = document.querySelectorAll('.feedbacks__avt-name p')
    var sectionfollow = document.querySelector('.follow')
    var followText = document.querySelector('.follow__title p')
    btnMoon.onclick = function(){
        btnMoon.classList.add('active')
        btnSun.classList.remove('active')
        sectionHeader.style.backgroundColor = '#151515'
        navLink.forEach(item => {
            item.style.color = '#DDD'
        })

        sectionTitle.forEach(title => {
            title.style.color = '#DDD'
        })

        sectionText.forEach(title => {
            title.style.color = '#afafaf'
        })

        // servicesItem.forEach(items => {
        //     items.style.backgroundColor = '#000'
        // })
        
        servicesTitle.forEach(item => {
            
            item.classList.add('text-color')
        })

        readMore.forEach(item => {
            item.classList.add('text-color')
            
        })

        servicesItem.forEach(item => {
            item.classList.add('service__item--dark')
        })

        sectionItemOffer.forEach(item => {
            item.classList.add('text-color')
        })

    packagesItem.forEach(item =>{
        item.classList.add('bg-black')
        
    })

        packagesItemInner.forEach(item => {
            item.classList.add('text-color')
        })

        packagesList.forEach(item =>{
            item.style.color = '#afafaf'
        })

        feedbacksItem.forEach(item => {
            item.classList.add('bg-black')
        })

        feedbacksName.forEach(item => {
            item.style.color = '#DDDD'
        })

        feedbacksText.forEach(item => {
            item.style.color = '#7777'
        })

        followText.style.color = '#afafaf'

        sectionAbout.style.backgroundColor = '#151515'
        sectionService.style.backgroundColor = '#222'
        sectionOffer.style.backgroundColor = '#151515'
        sectionPackages.style.backgroundColor = '#222'
        sectionNutrition.style.backgroundColor = '#151515'
        sectionFeeabacks.style.backgroundColor = '#222'
        sectionfollow.style.backgroundColor = '#151515'
    }
     
    
    btnSun.onclick = function(){
        btnSun.classList.add('active')
        btnMoon.classList.remove('active')

        sectionHeader.style.backgroundColor = '#fff'
        navLink.forEach(item => {
            item.style.color = '#000'
        })

        sectionTitle.forEach(title => {
            title.style.color = '#000C04'
        })

        sectionText.forEach(title => {
            title.style.color = '#696969'
        })

        // 

        servicesTitle.forEach(item => {
            
            item.classList.remove('text-color')
        })

        readMore.forEach(item => {
            item.classList.remove('text-color')
            
        })

        servicesItem.forEach(item => {
            item.classList.remove('service__item--dark')
        })

        sectionItemOffer.forEach(item => {
            item.classList.remove('text-color')
        })

        packagesItem.forEach(item =>{
            item.classList.remove('bg-black')
            
        })
    
            packagesItemInner.forEach(item => {
                item.classList.remove('text-color')
            })
    
            packagesList.forEach(item =>{
                item.style.color = '#696969'
            })
    
            feedbacksItem.forEach(item => {
                item.classList.remove('bg-black')
            })
    
            feedbacksName.forEach(item => {
                item.style.color = '#000C04'
            })
    
            feedbacksText.forEach(item => {
                item.style.color = '#7777'
            })

            followText.style.color = '#696969'

            sectionAbout.style.backgroundColor = '#ffff'
            sectionService.style.backgroundColor = 'rgba(147, 107, 232, 0.05)'
            sectionOffer.style.backgroundColor = '#fff'
            sectionPackages.style.backgroundColor = 'rgba(147, 107, 232, 0.05)'
            sectionNutrition.style.backgroundColor = '#fff'
            sectionFeeabacks.style.backgroundColor = 'rgba(147, 107, 232, 0.05)'
            sectionfollow.style.backgroundColor = '#fff'
    

    }
}

changeColor()