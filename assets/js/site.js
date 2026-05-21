const Site = {
  init() {
    this.initHeaderParallax();
    this.initTooltips();
  },

  initHeaderParallax() {
    const headers = Array.from(document.querySelectorAll(".intro-header.big-img"));
    if (!headers.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      headers.forEach((header) => {
        const rect = header.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const strength = header.classList.contains("decorative-hero") ? -0.05 : -0.08;
        const offset = Math.round(rect.top * strength);
        const basePosition = header.classList.contains("decorative-hero") ? "46%" : "50%";
        header.style.backgroundPosition = `center calc(${basePosition} + ${offset}px)`;
      });
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  },

  initTooltips() {
    if (!window.bootstrap) return;
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((trigger) => {
      window.bootstrap.Tooltip.getOrCreateInstance(trigger);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => Site.init());
