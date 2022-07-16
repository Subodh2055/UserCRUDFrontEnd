import {Component, Input, OnInit} from '@angular/core';
import {RealworldService} from "../services/realworld.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ObjectUtil} from "../ObjectUtil";
import {User} from "../user";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  users: User[];
  userId: number
  user= new User
  userForm: FormGroup
  @Input() formValue: User;



  constructor(private realworldService: RealworldService,
              private router: ActivatedRoute,
              private route: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userId = this.router.snapshot.params['id'];
    this.formMaker();
    if (!ObjectUtil.isEmpty(this.formValue)) {
      this.user = this.formValue;
      this.formMaker();
    }
    this.getUserById();


    this.realworldService.getUserById(this.userId).subscribe((response) => {
      console.log(response, 'response from on init')
      this.userForm = new FormGroup({
        name: new FormControl(response['name']),
        email: new FormControl(response['email']),
        phone: new FormControl(response['phone']),
        dob: new FormControl(response['dob']),
        address: new FormControl(response['address'])
      })
    })
  }


  getUserById(){
    this.realworldService.getUsers().subscribe((user)=> {
      this.users = user;
    })
  }
  updateUser(){
    this.realworldService.updateUser(this.router.snapshot.params.id,this.userForm.value).subscribe((response)=>{
      this.backToUserList();

    })
  }
  onSubmit() {
    this.user.name = this.userForm.get('name')?.value;
    this.user.phone = this.userForm.get('phone')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.address = this.userForm.get('address')?.value;
    this.user.dob= this.userForm.get('dob')?.value;
  }
  formMaker() {
    this.userForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.email],
      phone: [undefined,Validators.required, Validators.maxLength(10), Validators.minLength(10)],
      address: [undefined],
      dob: [undefined]
    })
  }

  backToUserList() {
    this.route.navigate(['view-user'])
  }
}
