import { Component } from '@angular/core';
import { ScrollSectionDirective } from '../../directive/scroll-section';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollSectionDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  success = false;
  error = false;
  loading = false;

  async submit(event: Event) {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    if (!form) return;
  
    this.success = false;
    this.error = false;
    this.loading = true;
  
    try {
      const res = await fetch('https://formspree.io/f/meegnakz', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
  
      if (!res.ok) throw new Error('Failed');
  
      this.success = true;
      form.reset();
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}
