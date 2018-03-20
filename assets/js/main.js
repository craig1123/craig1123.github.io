(function() {
		// lazy load
		var lazyImgs = [].slice.call(document.querySelectorAll('.lazy-load'));
		if ('IntersectionObserver' in window) {
		    var config = {
		        rootMargin: '100px 0px',
		        threshold: 0.01,
		    };
		    var onChange = function(changes) {
		        changes.forEach(function(change) {
		            if (change.intersectionRatio > 0) {
		                change.target.src = change.target.dataset.src;
		                observer.unobserve(change.target);
		            }
		        });
		    };
		    var observer = new IntersectionObserver(onChange, config);
		    lazyImgs.forEach(function(img) {
		        observer.observe(img)
		    });
		} else {
		    lazyImgs.forEach(function(image) {
		        image.src = image.dataset.src;
		    });
		}

		// lazy insert css
		var head = document.getElementsByTagName('head')[0];
		var devicon = document.createElement('link');
		var fontAwesome = document.createElement('link');
		devicon.setAttribute("rel", "stylesheet");
		devicon.setAttribute("href","https://cdn.rawgit.com/konpa/devicon/4f6a4b08efdad6bb29f9cc801f5c07e263b39907/devicon.min.css");
		devicon.setAttribute("type","text/css");
		fontAwesome.setAttribute("rel", "stylesheet");
		fontAwesome.setAttribute("href","./assets/css/font-awesome.min.css");
		fontAwesome.setAttribute("type","text/css");
		head.appendChild(fontAwesome);
		head.appendChild(devicon);

		// scrolling header
		function getElementY(query) {
			return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
		}
		function doScrolling(element, duration) {
				var startingY = window.pageYOffset;
				var elementY = getElementY(element);
				var diff = elementY - startingY;
				var start;

				window.requestAnimationFrame(function step(timestamp) {
						if (!start) start = timestamp;
						var time = timestamp - start;
						var percent = Math.min(time / duration, 1);

						window.scrollTo(0, startingY + diff * percent);

						if (time < duration) {
							window.requestAnimationFrame(step)
						}
				})
		}
		document.getElementById('scrolly').addEventListener('click', doScrolling.bind(null, '#bio', 1000));

		// clicking on history
		var clickIcon = function(e) {
				var el = e.currentTarget;
				if (!el.classList.contains('.current-square')) {
					var currentSquare = document.getElementsByClassName('current-square')[0];
					var activeEvent = document.getElementsByClassName('active-event')[0];
					var mainBioText = document.getElementsByClassName('main-bio-text')[0];
					var target = el.getAttribute('data-target');
					var targetId = document.getElementById(target);

					currentSquare.classList.remove('current-square');
					activeEvent.classList.remove('active-event');
					activeEvent.style.display = 'none';
					el.classList.add('current-square');
					targetId.classList.add('active-event');
					targetId.style.display = 'block';
				}
		}
		var timelineCircle = document.getElementsByClassName('timeline-circle');
		for (var i = 0; i < timelineCircle.length; i += 1) {
				timelineCircle[i].addEventListener('click', clickIcon);
		}

		// loading initial banner
		var mobile = window.innerWidth < 980;
		var body = document.body;
		var header = document.getElementById('header');
		var banner = document.getElementById('banner');

		body.classList.add('is-loading');
		window.addEventListener("load", function() {
				window.setTimeout(function() {
						body.classList.remove('is-loading');
				}, 0);
		},false);

		if (mobile) body.classList.add('is-mobile');

		function isScrolledIntoView(el) {
				var sizes = el.getBoundingClientRect();
				return sizes.top < window.innerHeight && sizes.bottom >= 10
		};
		function debounce(func, wait, immediate) {
				var timeout;
				return function() {
						var context = this, args = arguments;
						var later = function() {
								timeout = null;
								if (!immediate) func.apply(context, args);
						};
						var callNow = immediate && !timeout;
						clearTimeout(timeout);
						timeout = setTimeout(later, wait);
						if (callNow) func.apply(context, args);
				};
		};
		var scrollHeader = debounce(function() {
				if (isScrolledIntoView(banner) && !header.classList.contains('alt')) {
						header.classList.add('alt');
				} else if (!isScrolledIntoView(banner) && header.classList.contains('alt')) {
						header.classList.remove('alt');
				}
		}, 10);
		window.addEventListener('scroll', scrollHeader);
})();
