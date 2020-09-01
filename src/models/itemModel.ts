import {observable} from 'mobx';
import {uuid} from '../utils';
import {ItemJson} from '../constants';

export default class ItemModel {
	id: string;
	@observable title: string;
	@observable completed: boolean;

	constructor(id: string, title: string, completed: boolean) {
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	toggle = () => {
		this.completed = !this.completed;
	}

	setTitle(title: string) {
		this.title = title;
	}

  toJS() {
		return {
			id: this.id,
			title: this.title,
			completed: this.completed
		};
	}

	static create(title: string): ItemModel {
		const item = new ItemModel(uuid(), title, false);
		return item;
	}

	static fromJS(object: ItemJson) {
		return new ItemModel(object.id, object.title, object.completed);
	}
}