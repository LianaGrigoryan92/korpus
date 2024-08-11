interface Color {
  id: number;
  hex: string;
  name: string;
  colorCategory: string;
}

interface ColorsState {
  colors: Color[];
}
