import { Component, OnInit } from '@angular/core';
import {RealworldService} from "../services/realworld.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-list',
  templateUrl:'./user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user: any
  users: User[] =[]

  constructor( private  userService: RealworldService,
               private router: Router,
               public activeModal: NgbActiveModal,
               private modalService: NgbModal) { }


  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe(response=> {
      this.user = response;
      console.log(this.user)
    })
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe((response=>{
      this.getUserList();
      this.modalService.dismissAll();
    }))

  }
   navigateToAddUser() {
    this.router.navigate(['view-user/add-user'])
   }
  open(content: any) {
    this.modalService.open(content);

  }

}
