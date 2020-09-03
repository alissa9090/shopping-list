import {observable} from 'mobx';
import ItemModel from './itemModel';
import {uuid} from '../utils';
import {ShopJson} from '../constants';

export default class ShopModel {
	id: string;
	@observable title: string;
	@observable items: Array<ItemModel>;

	constructor(id: string, title: string, items: Array<ItemModel>) {
		this.id = id;
		this.title = title;
		this.items = items;
	}

	getItemById(itemId: string) {
		return this.items.find(item => item.id === itemId);
	}

	addItem = (title: string) => {
		const item = ItemModel.create(title);
		this.items.push(item);
	}

	deleteItem = (itemId: string) => {
		const index = this.items.findIndex(item => item.id === itemId);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}

	deleteAllCompletedItems = () => {
		this.items = this.items.filter(item => !item.completed);
	}

	setTitle(title: string) {
		this.title = title;
	}

	static create(title: string): ShopModel {
		const shop = new ShopModel(uuid(), title, []);
		return shop;
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
			items: this.items.map(item => item.toJS())
		};
	}

	static createFromJS(object: ShopJson) {
		const items = object.items.map(item => ItemModel.createFromJS(item));
		return new ShopModel(object.id, object.title, items);
	}
}