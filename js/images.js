var observer = lozad(".lozad", {
    threshold: 0.1,
    load: function(el) {
        el.src = el.getAttribute("data-src");
        el.onload = function() {};
    },
});

var pictureObserver = lozad(".lozad-picture", {
    threshold: 0.1,
});

var backgroundObserver = lozad(".lozad-background", {
    threshold: 0.1,
});

observer.observe();
pictureObserver.observe();
backgroundObserver.observe();