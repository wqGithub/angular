import {
  Component,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  NgModule
} from '@angular/core';

export class NonAngularBaseClass {
  greet() {}
}

export class BaseClass extends NonAngularBaseClass {
  @Input() enabled = true;
}

export class SecondBaseClass extends BaseClass {
  toggleEnabled() {
    this.enabled = !this.enabled;
  }
}

export class ThirdBaseClass extends SecondBaseClass {
  @HostListener('focus') onFocus() {}
}

export class FourthBaseClass extends ThirdBaseClass {
  focus() {
    this.onFocus();
  }
}

export class FifthBaseClass {
  constructor(private _elementRef: ElementRef) {}
  protected calculatePosition(): any {}
}

export class MyCompSuperBase {
  @HostBinding('class.hello') hello = true;
}

export class MyCompBase extends MyCompSuperBase {}

@Component({
  selector: 'my-comp',
  template: '',
})
export class MyComp extends MyCompBase {}

export class WrappedMyComp extends MyComp {}

@NgModule({declarations: [MyComp, WrappedMyComp]})
export class TestModule {}

@Directive({selector: null})
export class AbstractDir {}

export class DerivedAbstractDir extends AbstractDir {}

export class WrappedDerivedAbstractDir extends DerivedAbstractDir {}
