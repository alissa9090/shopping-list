/* eslint-disable no-bitwise */
import { ShopJson, ItemJson } from './constants';

export function uuid(): string {
  /* jshint bitwise:false */
  let i: number;
  let random: number;
  let id: string = '';

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += '-';
    }
    // eslint-disable-next-line no-nested-ternary
    id += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }

  return id;
}

function formatItems(items: Array<ItemJson>) {
  const str = items.reduce(
    // eslint-disable-next-line no-tabs
    (result: string, item: ItemJson) => `${result}	- ${item.title}
`,
    ''
  );
  return str;
}

export function formatShoppingList(shops: Array<ShopJson>): string {
  const str = shops.reduce((result: string, shop: ShopJson) => {
    if (shop.items.length <= 0) {
      return result;
    }
    return `${result}${shop.title}:
${formatItems(shop.items)}`;
  }, '');
  return str;
}
