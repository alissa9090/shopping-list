import { observable, autorun } from 'mobx';
import localforage from 'localforage';
import ShopModel from '../models/ShopModel';
import { ShopJson } from '../constants';

const INDEX_DB_KEY = 'shoppingListApp';

export default class ShopsStore {
  @observable shops = [];

  @observable firstRun = true;

  constructor() {
    // will run on change
    autorun(async () => {
      if (this.firstRun) {
        await localforage.setDriver([localforage.INDEXEDDB]);
        const state = await localforage.getItem(INDEX_DB_KEY);
        if (Array.isArray(state)) {
          this.fromJS(state);
          // console.log('get state from storage');
        }
      }

      this.firstRun = false;
    });

    autorun(() => {
      if (!this.firstRun) {
        localforage.setItem(INDEX_DB_KEY, this.toJS());
        // console.log('set state to storage');
      }
    });
  }

  getShopById(shopId: string) {
    return this.shops.find((shop) => shop.id === shopId);
  }

  addShop = (title: string) => {
    const shop = ShopModel.create(title);
    this.shops.push(shop);
  };

  deleteShop = (shopId: string) => {
    const index = this.shops.findIndex((shop) => shop.id === shopId);
    if (index > -1) {
      this.shops.splice(index, 1);
    }
  };

  toJS(): Array<ShopJson> {
    return this.shops.map((shop) => shop.toJS());
  }

  fromJS(shops: any) {
    this.shops = shops.map((shop: ShopJson) => ShopModel.createFromJS(shop));
  }
}
