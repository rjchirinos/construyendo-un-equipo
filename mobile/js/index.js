$(document).ready(function {
    $('.marquee').marquee({
        duration: 2000,
        gap: 1,
        delayBeforeStart: 1500,
        direction: 'up',
        duplicated: true,
      startVisible: true
    });
});