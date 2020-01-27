import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent implements OnInit {
  @HostBinding('class.content-container') class = 'content-container';
  tab = 'email-template';
  addLayout = 'dot-circle';
  addComponent = 'circle';
  saveTemplate = 'circle';
  templateReady = false;
  alert = null;
  constructor() { }

  ngOnInit() {
  }
  step(selectedStep, sidenavflag?) {
    this.tab = selectedStep;
    if (selectedStep === 'save-template') {
      this.alert = 'Template Created Successfully';
    }
  }
  addedComponent(val) {
    this.templateReady = true;
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
    const dropArea = document.getElementById('content-section');
    dropArea.style.background = 'yellow';
  }
  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const container = 'tr[show-info="' + data + '"]';
    console.log(container);
    const content = document.querySelector(container).cloneNode(true);
    console.log('content');
    // img.src = document.getElementById(data).src;
    console.log(document.querySelector(container));
    ev.target.appendChild(content);
    const dropArea = document.getElementById('content-section');
    dropArea.style.background = '';
    this.templateReady = true;

  }
}
