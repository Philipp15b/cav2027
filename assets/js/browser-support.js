(function () {
  var supportsCss = window.CSS && CSS.supports &&
    CSS.supports("display", "flex") &&
    CSS.supports("display", "grid");
  var supportsModules = "noModule" in document.createElement("script");
  var requiredApis = [
    "fetch",
    "customElements",
    "IntersectionObserver",
    "URLSearchParams",
    "requestAnimationFrame"
  ];
  var supportsApis = Boolean(window.Intl && Intl.DateTimeFormat);

  for (var index = 0; index < requiredApis.length; index += 1) {
    supportsApis = supportsApis && (requiredApis[index] in window);
  }

  if (!(supportsCss && supportsModules && supportsApis)) {
    document.documentElement.classList.add("site-browser-warning");
  }
}());
