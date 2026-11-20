import { Component } from '@angular/core';
import { TABS, LANGUAGES, Tab } from '../../data/skills';

export interface ChipView {
  name: string;
  note: string | null;
  key: boolean;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  tabs = TABS;
  languages = LANGUAGES.map((l) => this.chip(l));
  view: 'stack' | 'keywords' = 'stack';
  activeTab: Tab['id'] = 'software';
  openSub: Record<string, number | null> = { software: 0, dataeng: 0, ml: 0 };
  openProject: number | null = null;

  get current(): Tab {
    return this.tabs.find((t) => t.id === this.activeTab)!;
  }

  chip(raw: string): ChipView {
    const key = raw.startsWith('*');
    const [name, note] = raw.replace(/^\*/, '').split('|');
    return { name, note: note ?? null, key };
  }

  chips(list: string[]): ChipView[] {
    return list.map((c) => this.chip(c));
  }

  selectTab(id: Tab['id']): void {
    this.activeTab = id;
  }

  toggleSub(tabId: string, i: number): void {
    this.openSub[tabId] = this.openSub[tabId] === i ? null : i;
  }

  toggleProject(i: number): void {
    this.openProject = this.openProject === i ? null : i;
  }
}
