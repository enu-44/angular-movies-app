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
  cache = new Map<string, TemplateRef<any>>();

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeKey.set(this.tabs[0].key);
      this.cache.set(this.tabs[0].key, this.tabs[0].content);
    }
  }

  setActive(key: string) {
    this.activeKey.set(key);
    const tab = this.tabs.find(t => t.key === key);
    if (tab && !this.cache.has(key)) {
      this.cache.set(key, tab.content);
    }
  }

  get content(): TemplateRef<any> | null {
    const key = this.activeKey();
    return key ? this.cache.get(key) ?? null : null;
  }

  isActive(key: string): boolean {
    return this.activeKey() === key;
  }
}