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

var resource = document.createElement('link');
resource.setAttribute("rel", "stylesheet");
resource.setAttribute("href","https://cdn.rawgit.com/konpa/devicon/4f6a4b08efdad6bb29f9cc801f5c07e263b39907/devicon.min.css");
resource.setAttribute("type","text/css");
var head = document.getElementsByTagName('head')[0];
head.appendChild(resource);
