import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSectionsService {
  private sections: HTMLElement[] = [];
  private rafId: number | null = null;

  register(node: HTMLElement) {
    if (!this.sections.includes(node)) {
      this.sections.push(node);
    }
  }

  unregister(node: HTMLElement) {
    this.sections = this.sections.filter(s => s !== node);
  }

  private absTop(el: HTMLElement) {
    return el.getBoundingClientRect().top + window.scrollY;
  }

  scrollToNext(fromNode: HTMLElement) {
    const absTop = (el: HTMLElement) =>
      el.getBoundingClientRect().top + window.scrollY;
  
    const sorted = [...this.sections].sort((a, b) => absTop(a) - absTop(b));
  
    const fromY = absTop(fromNode) + 5;

    const next = sorted.find(el => absTop(el) > fromY);
    if (!next) return;
  
    const NAV_OFFSET = 96;
    const targetY = absTop(next) - NAV_OFFSET;
  
    this.smoothScrollTo(targetY, 1000);
  }

  // =========================
  // SMOOTH SCROLL (CUSTOM)
  // =========================
  private smoothScrollTo(targetY: number, duration = 900) {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    const startY = window.scrollY || window.pageYOffset;
    const maxY =
      document.documentElement.scrollHeight - window.innerHeight;

    const clampedTarget = Math.min(Math.max(0, targetY), maxY);

    const delta = clampedTarget - startY;
    if (Math.abs(delta) < 2) return;

    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo({
        top: startY + delta * eased,
        left: 0,
      });

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      } else {
        this.rafId = null;
      }
    };

    this.rafId = requestAnimationFrame(step);
  }
}
