import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {isNullOrUndefined, isUndefined} from 'util';

@Component({
  selector: 'app-modal-dialog-sampel',
  templateUrl: './modal-dialog-sampel.component.html',
  styleUrls: ['./modal-dialog-sampel.component.css']
})
export class ModalDialogSampelComponent implements OnInit {

  domModalDialogElRef: any;

  @ViewChild('simpeldialog') domDialogModalViewChild;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.getNilaiDOM();
  }

  getNilaiDOM(): void {
    // get nilai dom modal dengan id
    // this.domModalDialog = document.getElementById('simpelDialog');
    this.domModalDialogElRef = this.elementRef.nativeElement.getElementsByClassName('modal')[0];

    // jika klik dilakukan di luar dialog, dengarkan event nya
    this.renderer.listen('window', 'click', (event) => {
      if (!isNullOrUndefined(event.target) && event.target === this.domModalDialogElRef) {
        this.outsideClicks();
      }
    });
  }

  showDialogButtonViewChild() {
    console.log('button klik show dialog');
    // this.domModalDialog.style.display = 'block';
    this.domDialogModalViewChild.nativeElement.style.display = 'block';
  }

  showDialogButtonElementRef() {
    console.log('button klik show dialog dengan dom element ref');
    // this.domModalDialogElRef.style.display = 'block';
    this.renderer.setStyle(this.domModalDialogElRef, 'display', 'block');
  }

  closeDialogButton() {
    // this.domModalDialog.style.display = 'none';
    this.domDialogModalViewChild.nativeElement.style.display = 'none';
  }

  outsideClicks() {
    console.log('outside click');
    this.domDialogModalViewChild.nativeElement.style.display = 'none';
  }

}

