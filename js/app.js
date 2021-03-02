document.addEventListener("DOMContentLoaded", () => {
  let tl = new TimelineMax();

  tl.fromTo(
    ".bg-loader",
    1,
    { width: "100%" },
    { width: "0%", delay: 5, ease: Expo.easeInOut }
  )

  tl.fromTo(
    ".bg-video",
    2,
    { width: "0%", opacity: 0 },
    { width: "100%", opacity:1, ease: Expo.easeInOut },'-=1'
  )

  tl.fromTo(
    ".logo",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".home",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".story",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".wallpaper",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".beyourself",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".nav-social-media",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )


  tl.fromTo(
    ".spider-man-logo",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".main-description",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".buttons",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".logos",
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut },'-=0.5'
  )

  tl.fromTo(
    ".container-spider-man",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity:1, duration: 3, ease: "slow(0.7, 0.7, false)", y: 0 },'-=0.5'
  )

  tl.fromTo(
    "footer",
    0.9,
    { y:-30, opacity: 0 },
    { y: 0, opacity:1, ease: Expo.easeInOut},'-=0.5'
  )
});


