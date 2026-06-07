// Modules expose init() and, when Turbo snapshots need cleanup, cleanup().
// Site wires those module hooks into the initial page load and Turbo visits.
const HeaderParallax = {
  state: null,

  init() {
    // Turbo can re-enter a page from cache, so replace any old listeners before wiring new ones.
    this.cleanup();

    // Shift hero image backgrounds only while visible; requestAnimationFrame keeps scroll work bounded.
    const headers = Array.from(document.querySelectorAll(".intro-header.big-img"));
    if (!headers.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = true;
    let ticking = false;

    const update = () => {
      if (!active) return;

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      headers.forEach((header) => {
        const rect = header.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        // Decorative page heroes are shorter, so they get a lighter background shift.
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

    this.state = {
      headers,
      stop() {
        active = false;
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
      }
    };
  },

  cleanup() {
    if (!this.state) return;

    this.state.stop();
    this.state.headers.forEach((header) => {
      header.style.backgroundPosition = "";
    });
    this.state = null;
  }
};

const BootstrapTooltips = {
  init() {
    if (!window.bootstrap) return;
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((trigger) => {
      window.bootstrap.Tooltip.getOrCreateInstance(trigger);
    });
  },

  cleanup() {
    if (!window.bootstrap) return;
    // Bootstrap appends transient DOM; dispose it before Turbo stores the page snapshot.
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((trigger) => {
      window.bootstrap.Tooltip.getInstance(trigger)?.dispose();
    });
  }
};

const DeadlinePopovers = {
  init() {
    // AoE deadline controls keep the canonical UTC instant in markup; the popover formats it locally.
    const triggers = Array.from(document.querySelectorAll("[data-local-deadline]"));
    if (!triggers.length || !window.bootstrap) return;

    triggers.forEach((trigger) => {
      const deadlineUtc = trigger.getAttribute("data-deadline-utc");
      const originalDeadline = trigger.getAttribute("data-original-deadline") || trigger.textContent.trim();
      if (!deadlineUtc) return;

      const deadline = new Date(deadlineUtc);
      if (Number.isNaN(deadline.getTime())) return;

      const formatter = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      });
      const localDeadline = formatter.format(deadline);

      // Keep the local deadline available to assistive tech without requiring the popover to open.
      trigger.setAttribute("aria-label", `${originalDeadline}. Your local time: ${localDeadline}.`);

      window.bootstrap.Popover.getOrCreateInstance(trigger, {
        container: "body",
        content: localDeadline,
        customClass: "deadline-date-popover",
        placement: "top",
        title: "Your local time",
        // Hover covers desktop discovery; click covers pinned and touch interaction.
        trigger: "hover click"
      });
    });
  },

  cleanup() {
    if (!window.bootstrap) return;
    // Avoid caching open popovers or stale Bootstrap instances across Turbo visits.
    document.querySelectorAll("[data-local-deadline]").forEach((trigger) => {
      window.bootstrap.Popover.getInstance(trigger)?.dispose();
    });
  }
};

const Site = {
  modules: [
    HeaderParallax,
    DeadlinePopovers,
    BootstrapTooltips
  ],

  init() {
    this.modules.forEach((module) => module.init());
  },

  cleanup() {
    this.modules.forEach((module) => module.cleanup?.());
  }
};

document.addEventListener("DOMContentLoaded", () => Site.init());
document.addEventListener("turbo:load", () => Site.init());
document.addEventListener("turbo:before-cache", () => Site.cleanup());
