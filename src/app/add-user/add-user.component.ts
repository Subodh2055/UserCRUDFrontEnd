import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RealworldService} from "../services/realworld.service";
import {User} from "../user";
import {ObjectUtil} from "../ObjectUtil";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  submitted = false
  @Input() formValue: User;
  user: User;
  userData: any
  users: User[];

  constructor(
    private formBuilder: FormBuilder,
    private realworldService: RealworldService,
    private route: Router,
    private router: ActivatedRoute,) {
  }

  addForm: FormGroup

  ngOnInit(): void {
    this.formMaker();
    if (!ObjectUtil.isEmpty(this.formValue)) {
      this.user = this.formValue;
      this.formMaker();
    }

  }

  formMaker() {
    this.addForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      phone: [undefined, Validators.required],
      address: [undefined, Validators.required],
      dob: [undefined, Validators.required],
      password: [undefined],
      imgUrl: [undefined]
    });
  }

  onSubmit() {
    if(this.addForm.invalid){
      this.submitted = false
    }else{
      this.realworldService.addUser(this.addForm.value).subscribe(
        response=>{
          console.log(response,'response')
          this.getUserData();
          this.backToUserList()
        })
    }


  }

  getUserData(){
    this.realworldService.getUsers().subscribe(
      response=>{
        console.log(response,'users');
        this.users = response;
        this.userData = response;
        console.log(this.userData,'user data')

      },
      error => {
        console.log(error)
      }
    )
  }
  backToUserList() {
    this.route.navigate(['view-user'])
  }

  get userFormControl() {
     return this.addForm.controls;
  }
}
