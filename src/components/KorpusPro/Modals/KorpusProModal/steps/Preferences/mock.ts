export const preferencesData = {
  position: {
    name: 'Position',
    items: [
      {
        id: 1,
        name: 'TableCloth',
        value: [12, 28, 30],
        default: 28,
        isFixed: false,
        editable: true,
      },
      {
        id: 2,
        name: 'Support',
        value: [60, 100, 120],
        default: 100,
        editable: true,
        isFIxed: false,
      },
      {
        id: 3,
        name: 'Depth',
        value: 560,
        default: 560,
        editable: false,
        isFixed: true,
      },
    ],
  },
  totalSize: {
    name: 'Total Size',
    items: [
      [
        {
          id: 1,
          name: 'Size',
          value: '70*60',
          default: '70*60',
          editable: false,
          isFixed: false,
        },
        {
          id: 2,
          name: 'Depth',
          value: [560],
          default: 560,
          editable: false,
          isFixed: true,
        },
      ],
    ],
  },
  type: {
    name: 'Type',
    items: [
      {
        id: 1,
        name: 'With Handle',
        type: 'withHandle',
        value: 1,
        editable: true,
        default: true,
        isFixed: false,
        selectable: true,
      },
      {
        id: 2,
        name: 'Without Handle',
        type: 'withoutHandle',
        value: 2,
        editable: true,
        isFixed: false,
        selectable: true,
      },
      {
        id: 3,
        name: 'Gola',
        type: 'gola',
        value: 3,
        editable: true,
        isFixed: false,
        selectable: true,
      },
    ],
  },
};

export interface IPreferenceItem {
  id: number;
  name: string;
  value: number | number[] | string | string[];
  editable?: boolean;
  isFixed?: boolean;
  selectable?: boolean;
  default?: boolean;
}
