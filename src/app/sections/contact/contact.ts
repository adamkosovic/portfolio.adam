import { Component, NgZone } from '@angular/core';
import { ScrollSectionDirective } from '../../directive/scroll-section';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollSectionDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  loading = false;
  success = false;
  error = false;

  constructor(private zone: NgZone) {}

  async submit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement | null;
    if (!form) return;

    // Sätt state INNE i zonen
    this.zone.run(() => {
      this.loading = true;
      this.success = false;
      this.error = false;
    });

    try {
      const res = await fetch('https://formspree.io/f/meegnakz', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) throw new Error('Failed');

      this.zone.run(() => {
        this.success = true;
        form.reset();
      });
    } catch (e) {
      this.zone.run(() => {
        this.error = true;
      });
    } finally {
      this.zone.run(() => {
        this.loading = false; // <-- nu släpper "Sending..."
      });
    }
  }
}
