// Nav scroll to's
function scrollToAbout() {
	document.querySelector('main .about').scrollIntoView({
		behavior: 'smooth'
	});
}
function scrollToProjects() {
	document.querySelector('main .projects').scrollIntoView({
		behavior: 'smooth'
	});
}

var currentSlides = [0, 0];

// Slideshow arrows onClick
var arrows = document.querySelectorAll('.slideshow-arrow');
function arrowClick(e) {
	e = e || window.event;
	var target = e.currentTarget || e.srcElement;
	// target = arrow div

	var left = target.classList.contains("left-arrow");
	var slides = target.parentElement.querySelector('.slides');
	var numSlides = slides.children.length;
	var timeline = target.parentElement.querySelector('.timeline-container');
	var slideshowID = target.parentElement.id;
	var idNum = slideshowID[slideshowID.length - 1];
	var oldSelectedDot = timeline.querySelector('.selected');
	oldSelectedDot.classList.remove('selected');

	// Edge cases
	if (currentSlides[idNum] === numSlides-1 && !left) {
		currentSlides[idNum] = 0;
		$(slides).animate({
			left: '0'
		}, 800, 'easeOutQuart');
		timeline.childNodes[1].classList.add('selected');
		return;
	}
	else if (currentSlides[idNum] === 0 && left) {
		currentSlides[idNum] = numSlides-1;
		$(slides).animate({
			left: '-' + (numSlides-1)*100 + '%'
		}, 800, 'easeOutQuart');
		timeline.childNodes[numSlides].classList.add('selected');
		return;
	}

	var direction = left ? '+=' : '-=';
	$(slides).animate({
		left: direction + '100%'
	}, 600, 'easeOutQuart');

	if (left) {
		currentSlides[idNum]--;
		oldSelectedDot.previousSibling.classList.add('selected');
	}
	else {
		currentSlides[idNum]++;
		oldSelectedDot.nextSibling.classList.add('selected');
	}
}
for (var i = 0; i < arrows.length; i++) {
	arrows[i].addEventListener('click', arrowClick);
}

// Timeline dots onClick
var dots = document.querySelectorAll('.timeline-dot');
function dotClick(e) {
	e = e || window.event;
	var target = e.currentTarget || e.srcElement;
	// target = dot div

	var slides = target.closest('.slides-and-timeline').querySelector('.slides');
	var slideshowID = target.parentElement.id;
	var idNum = slideshowID[slideshowID.length - 1];
	var timeline = target.parentElement;
	var oldSelectedDot = timeline.querySelector('.selected');
	oldSelectedDot.classList.remove('selected');
	var newSelectedDotClass = target.classList.item(0);
	var newSelectedDotIndex = newSelectedDotClass[newSelectedDotClass.length - 1];

	$(slides).animate({
		left: '-' + (newSelectedDotIndex-1)* 100 + '%'
	}, 600, 'easeOutQuart');
	target.classList.add('selected');
	currentSlides[idNum] = newSelectedDotIndex;
}
for (var j = 0; j < dots.length; j++) {
	dots[j].addEventListener('click', dotClick);
}