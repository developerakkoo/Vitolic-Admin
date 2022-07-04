import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutoTab]',
})
export class AutotabDirective {
  @Input('appAutoTab') appAutoTab: { focus: () => void } | any;

  @HostListener('input', ['$event.target']) onInput(input: any) {
    const length = input.value.length;
    const maxLength = input.attributes.maxlength.value;
    if (length >= maxLength) {
      this.appAutoTab.focus();
    }
  }
}
