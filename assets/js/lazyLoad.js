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

