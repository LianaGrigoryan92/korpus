interface PreferenceItem {
  id: number;
  name: string;
  default: string | number | undefined;
  editable: boolean;
  isFixed: boolean;
  selectable: boolean;
  type: string | null;
  items: string[];
}

interface Preference {
  id: number;
  name: string;
  type?: string;
  preferenceItems: PreferenceItem[];
}

interface PreferenceState {
  preferences: Preference[];
}
