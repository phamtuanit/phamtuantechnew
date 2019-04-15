$.getScript('js/components/glocal-component.js', function () {
    console.info("Glocal-component.js is loaded");
    $.getScript('js/components/app.js', function () {
        console.info("App.Js is loaded");
    });
});