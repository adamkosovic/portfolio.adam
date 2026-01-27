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
  
    const form = event.target as HTMLFormElement | null;
    if (!form) return;
  
    this.loading = true;
    this.success = false;
    this.error = false;
  
    const endpoint = 'https://formspree.io/f/meegnakz'; // <-- DIN endpoint
  
    // timeout så den inte kan fastna för evigt
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10000);
  
    try {
      console.log('Submitting to:', endpoint);
  
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
  
      console.log('Status:', response.status);
  
      const data = await response.json().catch(() => null);
      console.log('Response:', data);
  
      if (!response.ok) throw new Error('Formspree failed');
  
      this.success = true;
      form.reset();
    } catch (err) {
      console.error('Submit error:', err);
      this.error = true;
    } finally {
      clearTimeout(t);
      this.loading = false;
    }
  }
}
