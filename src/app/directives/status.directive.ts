import {Directive, ComponentRef, ElementRef, ViewContainerRef, OnInit, OnDestroy, Input} from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

import { StatusComponent } from "../status/status.component";

@Directive({
  selector: '[status]'
})
export class StatusDirective implements OnInit, OnDestroy {

  private element!: HTMLElement;
  private statusRef!: ComponentRef<StatusComponent>;

  @Input()
  status: string = '';


/*  @HostBinding({
    hostPropertyName: any;
  })*/

  @HostListener('click') onclick(): void {
    this.showStatus();
  }

  @HostListener('mouseleave') onmouseleave(): void {
    this.hideStatus();
  }

  hideStatus(): void {
    if (this.statusRef) {
      this.statusRef.destroy();
      // this.statusRef = null;
    }
  }
  showStatus(): void {
    this.statusRef = this.createStatus(this.status);
    const statusEl = this.statusRef.location.nativeElement;
    console.log(this.status);
  }

  private createStatus(content: string): ComponentRef<StatusComponent> {
    this.viewContainer.clear();
    const statusComponentRef = this.viewContainer.createComponent(StatusComponent);
    statusComponentRef.instance.content = content;
    return statusComponentRef;
  }

  constructor(private elementRef: ElementRef,
              private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement;
  }

  ngOnDestroy(): void {
    this.hideStatus();
  }

}
