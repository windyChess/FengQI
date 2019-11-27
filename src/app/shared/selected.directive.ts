/*
 * @Author: huangfengqi
 * @Date: 2019-11-27 16:45:54
 * @LastEditors: huangfengqi
 * @LastEditTime: 2019-11-27 17:50:23
 * @FilePath: \FengQI\src\app\shared\selected.directive.ts
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {

  constructor(private  el:ElementRef,
              private rd:Renderer2) { }

  ngOnInit(){
    const item = this.el.nativeElement.innerText;
    if(item === '首页'){
      this.rd.addClass(this.el.nativeElement,'a-selected');
    }else{
      this.rd.addClass(this.el.nativeElement,'a-unselected');
    }
  }

  @HostListener('click') onClick(){
    //这个处理逻辑效率太低了，有待改进
    const childs = document.getElementsByClassName('menu')[0].childNodes;
    childs.forEach(item => {
      if(item['className'] === 'a-selected'){
        this.rd.removeClass(item,'a-selected');
        this.rd.addClass(item,'a-unselected');
      }
    });
    this.rd.removeClass(this.el.nativeElement,'a-unselected');
    this.rd.addClass(this.el.nativeElement,'a-selected');
  }

}
