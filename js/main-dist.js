function scrollToAbout(){document.querySelector("main .about").scrollIntoView({behavior:"smooth"})}function scrollToProjects(){document.querySelector("main .projects").scrollIntoView({behavior:"smooth"})}function arrowClick(e){var t=(e=e||window.event).currentTarget||e.srcElement,r=t.classList.contains("left-arrow"),l=t.parentElement.querySelector(".slides"),s=l.children.length,i=t.parentElement.querySelector(".timeline-container"),n=t.parentElement.id,c=n[n.length-1],o=i.querySelector(".selected");if(o.classList.remove("selected"),currentSlides[c]===s-1&&!r)return currentSlides[c]=0,$(l).animate({left:"0"},800,"easeOutQuart"),void i.childNodes[1].classList.add("selected");if(0===currentSlides[c]&&r)return currentSlides[c]=s-1,$(l).animate({left:"-"+100*(s-1)+"%"},800,"easeOutQuart"),void i.childNodes[s].classList.add("selected");var a=r?"+=":"-=";$(l).animate({left:a+"100%"},600,"easeOutQuart"),r?(currentSlides[c]--,o.previousSibling.classList.add("selected")):(currentSlides[c]++,o.nextSibling.classList.add("selected"))}function dotClick(e){var t=(e=e||window.event).currentTarget||e.srcElement,r=t.closest(".slides-and-timeline").querySelector(".slides"),l=t.parentElement.id,s=l[l.length-1];t.parentElement.querySelector(".selected").classList.remove("selected");var i=t.classList.item(0),n=i[i.length-1];$(r).animate({left:"-"+100*(n-1)+"%"},600,"easeOutQuart"),t.classList.add("selected"),currentSlides[s]=n}for(var currentSlides=[0,0],arrows=document.querySelectorAll(".slideshow-arrow"),i=0;i<arrows.length;i++)arrows[i].addEventListener("click",arrowClick);for(var dots=document.querySelectorAll(".timeline-dot"),j=0;j<dots.length;j++)dots[j].addEventListener("click",dotClick);