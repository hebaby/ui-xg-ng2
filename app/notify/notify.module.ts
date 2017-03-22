import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyService } from './notify.service';

@NgModule({
  imports: [CommonModule],
  providers: [NotifyService],
  declarations: [NotifyComponent],
  exports: [NotifyComponent],
  entryComponents: [NotifyComponent]
})
export class NotifyModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: NotifyModule, providers: [NotifyService]};
  }
}
