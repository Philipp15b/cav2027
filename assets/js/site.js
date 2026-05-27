const Site = {
  init() {
    this.initHeaderParallax();
    this.initLocalDeadlines();
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
  },

  initLocalDeadlines() {
    document.querySelectorAll("[data-local-deadline]").forEach((deadlineBar) => {
      const value = deadlineBar.querySelector(".deadline-local__value");
      const note = deadlineBar.querySelector(".deadline-local__note");
      const deadlineUtc = deadlineBar.getAttribute("data-deadline-utc");
      const originalDeadline = deadlineBar.getAttribute("data-original-deadline");
      if (!value || !deadlineUtc) return;

      const deadline = new Date(deadlineUtc);
      if (Number.isNaN(deadline.getTime())) return;

      const locale = navigator.language;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const formatter = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      });

      value.textContent = formatter.format(deadline);
      if (note && originalDeadline) {
        const localeText = locale ? `browser locale ${locale}` : "your browser locale";
        const zoneText = timeZone ? `browser time zone ${timeZone}` : "your browser time zone";
        note.textContent = `Original deadline: ${originalDeadline} (UTC-12). Shown using ${localeText} and ${zoneText}.`;
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => Site.init());
