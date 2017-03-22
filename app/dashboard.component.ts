import { Component } from '@angular/core';
import { NotifyService } from './notify2/index';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

	constructor(private notifyService: NotifyService) {

	}
	name = 'john';
	message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
	sayNotify() {
		this.notifyService.show('default', {
        message: 'Type your message here!'
      });
	}
}
