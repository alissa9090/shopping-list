import {observable, computed, reaction, action} from 'mobx';
import ShopModel from '../models/ShopModel';
import {ShopJson} from '../constants';

export default class ShopsStore {
	@observable shops = [];
	
	getShopById(shopId: string) {
		return this.shops.find(shop => shop.id === shopId);
	}

	addShop = (title: string) => {
		const shop = ShopModel.create(title);
		this.shops.push(shop);
	}

	deleteShop = (shopId: string) => {
		const index = this.shops.findIndex(shop => shop.id === shopId);
		if (index > -1) {
			this.shops.splice(index, 1);
		}
	}

	toJS() {
		return this.shops.map(shop => shop.toJS());
	}

	static fromJS(shops: Array<ShopJson>) {
		const shopsStore = new ShopsStore();
		shopsStore.shops = shops.map(shop => ShopModel.fromJS(shop));
		return shopsStore;
	}
}
