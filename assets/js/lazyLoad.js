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