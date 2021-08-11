(function () {
  // lazy load
  var lazyImgs = [].slice.call(document.querySelectorAll(".lazy-load"));
  if ("IntersectionObserver" in window) {
    var config = {
      rootMargin: "100px 0px",
      threshold: 0.01,
    };
    var onChange = function (changes) {
      changes.forEach(function (change) {
        if (change.intersectionRatio > 0) {
          change.target.src = change.target.dataset.src;
          observer.unobserve(change.target);
        }
      });
    };
    var observer = new IntersectionObserver(onChange, config);
    lazyImgs.forEach(function (img) {
      observer.observe(img);
    });
  } else {
    lazyImgs.forEach(function (image) {
      image.src = image.dataset.src;
    });
  }

  // lazy insert css
  var devicon = document.createElement("link");
  devicon.setAttribute("rel", "stylesheet");
  devicon.setAttribute(
    "href",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
  );
  devicon.setAttribute("type", "text/css");
  document.head.appendChild(devicon);

  // scrolling header
  function getElementY(query) {
    return (
      window.pageYOffset +
      document.querySelector(query).getBoundingClientRect().top
    );
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
        window.requestAnimationFrame(step);
      }
    });
  }
  document
    .getElementById("scrolly")
    .addEventListener("click", doScrolling.bind(null, "#mobile-apps", 1000));

  // loading initial banner
  var mobile = window.innerWidth < 980;
  var body = document.body;
  var header = document.getElementById("header");
  var banner = document.getElementById("banner");

  window.addEventListener(
    "load",
    function () {
      window.setTimeout(function () {
        body.classList.remove("is-loading");
      }, 0);
    },
    false
  );

  if (mobile) body.classList.add("is-mobile");

  // add in year
  var year = new Date().getFullYear();
  document.getElementById("year").innerText = year;

  function isScrolledIntoView(el) {
    var sizes = el.getBoundingClientRect();
    return sizes.top < window.innerHeight && sizes.bottom >= 10;
  }
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  var scrollHeader = debounce(function () {
    if (isScrolledIntoView(banner) && !header.classList.contains("alt")) {
      header.classList.add("alt");
    } else if (
      !isScrolledIntoView(banner) &&
      header.classList.contains("alt")
    ) {
      header.classList.remove("alt");
    }
  }, 10);
  window.addEventListener("scroll", scrollHeader);
})();

(function ($) {
  "use strict";
  /* Slider Active
	=============================*/
  var gallerySlide = $(".gallery-slide");
  gallerySlide.owlCarousel({
    loop: true,
    margin: 0,
    lazyLoad: true,
    responsiveClass: true,
    nav: false,
    items: 5,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    startPosition: 0,
    // navText: [
    //   '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    //   '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1280: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
  });
  var apps = [
    {
      title: "Memorize By Heart",
      description:
        "Memorize By Heart is a tool used by professionals that uses memorization techniques for a faster and longer lasting memory. Features include 7 fun memorization games, spaced repetition, dark mode, and more!",
      apple:
        "https://apps.apple.com/us/app/memorize-by-heart-learn-texts/id1436935583",
      google:
        "https://play.google.com/store/apps/details?id=com.memorize_by_heart",
    },
    {
      title: "Hangman",
      description:
        "With over 12,000 downloads in the App Store, this 2 player supported game of hangman is becoming the #1 hangman app in the store. Make your way up the high scores list!",
      apple: "https://itunes.apple.com/us/app/hangman/id1278680007",
      google:
        "https://play.google.com/store/apps/details?id=com.memorize_by_heart",
    },
    {
      title: "Mastermind - Break the Code",
      description:
        "Mastermind is a classic mind game: a secret code is given, and you must figure it out using guesses and the hints provided on the puzzle.",
      apple:
        "https://apps.apple.com/us/app/mastermind-break-the-code/id1435716874",
      google:
        "https://play.google.com/store/apps/details?id=com.craig.mastermind",
    },
    {
      title: "Picture Sliding Block Puzzle",
      description:
        "Picture Sliding Block Puzzle delivers a simple and addicting classic 15 slider puzzle. Tap or slide the tiles to solve the puzzle.",
      apple:
        "https://itunes.apple.com/us/app/picture-sliding-block-puzzle/id1367738676",
      google:
        "https://play.google.com/store/apps/details?id=com.goodturn.pictureslidingpuzzle",
    },
  ];
  var screenshotTitle = $("#screenshot-title");
  var screenshotDescription = $("#screenshot-description");
  var appleLink = $("#apple-link");
  var googlePlayLink = $("#google-play-link");

  function writeScreenShot(event) {
    var currentScreen = event.item.index % event.item.count;
    var currentApp = apps[currentScreen];
    if (!currentApp) {
      return;
    }
    screenshotTitle.text(currentApp.title);
    screenshotDescription.text(currentApp.description);
    appleLink.attr("href", currentApp.apple);
    googlePlayLink.attr("href", currentApp.google);
  }

  var width = window.innerWidth;
  var itemIndex = 3;
  if (width >= 1500) {
    itemIndex = 4;
  } else if (width < 600) {
    itemIndex = 1;
  } else if (width < 1280) {
    itemIndex = 2;
  }

  writeScreenShot({ item: { index: itemIndex, count: 5 } });

  // Listen to owl events:
  gallerySlide.on("changed.owl.carousel", writeScreenShot);

  $(".carousel-inner .item:last-child").addClass("active");
})(jQuery);
