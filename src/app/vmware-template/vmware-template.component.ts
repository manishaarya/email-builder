import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-vmware-template, [app-vmware-template]',
  templateUrl: './vmware-template.component.html',
  styleUrls: ['./vmware-template.component.css']
})
export class VmwareTemplateComponent implements OnInit {
  @HostBinding('class.content-container') class = 'content-container';
  alert = null;
  tab = 'product-announcement';
  constructor() { }

  ngOnInit() {
  }
  save() {
    const editElement = document.getElementById(this.tab);
    const userEditedContent = editElement.innerHTML;
    localStorage.setItem[(this.tab)] = '';
    localStorage.getItem[(this.tab)] = userEditedContent;
    this.alert = 'content-saved';
  }
  showTab(tabName) {
    this.tab = tabName;
    const storedTemplate = localStorage.getItem[this.tab];
    if (storedTemplate) {
      setTimeout(() => {
        const editElement = document.getElementById(tabName);
        if (editElement) {
          editElement.innerHTML = storedTemplate;
          this.alert = 'Showing previously saved data';
        }
      }, 0);
    }
  }
}
