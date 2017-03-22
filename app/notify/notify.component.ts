import {Component, Input} from '@angular/core';
import {NotifyService} from './notify.service';

@Component({
	selector: 'ng2-notify',
	template: `
		<ul class="{{corner}}">
			<li *ngFor="let notification of notifications" class="{{notification.type || 'default' }}" [ngClass]="{'animate': notification.notify}">
				{{ notification.message }}
			</li>
		</ul>
	`,
})

export class NotifyComponent {
	public notifications: any;
	public corner: string = null;

	constructor(public notifyService: NotifyService) {
		this.notifyService.notify.subscribe(uploaded => {
				this.setNotify(uploaded);
		});
		this.notifications = [];
	};

	// private clear(obj) {
	// 	clearTimeout(obj);
	// }

	public createTimeout(notification) {
		notification.timeout = setTimeout(() => {
			notification.notify = !notification.notify;
			setTimeout(() => {
				this.notifications.shift();
			}, 500);
		}, notification.delay);
	}

	public setNotify(obj) {
		obj.notify = true;
		this.corner = obj.corner;
		this.notifications.push(obj);
		this.createTimeout(obj);
	}
}