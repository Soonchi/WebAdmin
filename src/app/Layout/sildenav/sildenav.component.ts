import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sildenav',
  templateUrl: './sildenav.component.html',
  styleUrls: ['./sildenav.component.scss']
})
export class SildenavComponent implements   OnInit {

  constructor() {
  }
   ngOnInit(): void {
     let sidebar = document.querySelector(".sidebar") as HTMLElement;
     let closeBtn = document.querySelector("#btn") as HTMLElement;
     let searchBtn = document.querySelector(".bx-search") as HTMLElement;

     closeBtn.addEventListener("click", ()=>{
       sidebar.classList.toggle("open");
       menuBtnChange();//calling the function(optional)
     });

     searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
       sidebar.classList.toggle("open");
       menuBtnChange(); //calling the function(optional)
     });

     // following are the code to change sidebar button(optional)
     function menuBtnChange() {
       if(sidebar.classList.contains("open")){
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
       }else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
       }
     }
  }
}
