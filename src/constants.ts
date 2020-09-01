
interface ItemJson {
  id: string;
  title: string;
  completed: boolean;
};

interface ShopJson {
  id: string;
  title: string;
  items: Array<ItemJson>;
};


const shops = [
  {
    id: 'lidl',
    title: 'Lidl',
    items: [
      {
        id: 'sdgfsdg',
        title: 'молоко',
        completed: false
      },
      {
        id: 'sdfg',
        title: 'хлеб',
        completed: false
      }
    ]
  },
  {
    id: 'aldi',
    title: 'Aldi',
    items: []
  },
  {
    id: 'dm',
    title: 'DM',
    items: []
  },
  {
    id: 'rewe',
    title: 'Rewe',
    items: []
  },
  {
    id: 'ikea',
    title: 'Ikea',
    items: []
  },
  {
    id: 'edeka',
    title: 'Edeka',
    items: []
  }
];


export {
  shops,
  ItemJson,
  ShopJson
};