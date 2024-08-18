interface FacadeColor {
  id: number;
  title: string;
  image: string;
  lacquerPercentages: { id: number; title: string; }[]
  facadeColors: {
    id: number;
    title: string;
    hex: string;
    colorCategory: string;
  }[]
}

interface FacadeColorState {
  facadeColors: FacadeColor[];
}
