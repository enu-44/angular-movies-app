import { CommonModule } from '@angular/common';
import { Component, Input, signal, TemplateRef } from '@angular/core';

export interface TabItem {
  key: string;
  label: string;
  content: TemplateRef<any>;
}
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class TabsComponent<T = unknown> {
  @Input() tabs: TabItem[] = [];
  activeKey = signal<string | null>(null);

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeKey.set(this.tabs[0].key);
    }
  }

  setActive(key: string) {
    this.activeKey.set(key);
  }

  getActiveContent(): TemplateRef<any> | null {
    const tab = this.tabs.find(t => t.key === this.activeKey());
    return tab?.content ?? null;
  }

  isActive(key: string): boolean {
    return this.activeKey() === key;
  }

  get content(): TemplateRef<any> | null {
    return this.getActiveContent();
  }
}
