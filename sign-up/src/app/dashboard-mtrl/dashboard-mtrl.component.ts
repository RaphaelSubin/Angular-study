import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserServiceService } from '../user-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup ,Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard-mtrl',
  templateUrl: './dashboard-mtrl.component.html',
  styleUrls: ['./dashboard-mtrl.component.scss'],
})
export class DashboardMtrlComponent implements OnInit {
  closeResult = '';
  userData : any
  userDetails :any
  updatedData : any
  authToken : any


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private user:UserServiceService,
    private modalService: NgbModal,
  ) {
   
  }

  ngOnInit(): void {
     this.user.refreshDataNeeded.subscribe(() => {
      this.getAllUserData()
    })

    this.getAllUserData()
  }



  userUpdateForm = new FormGroup({
    id: new FormControl(''),
    firstName : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    lastName : new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phoneNo : new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
      Validators.maxLength(10),
    ])
  })

  
  get firstName() {
    return this.userUpdateForm.get('firstName');
  }
  get lastName() {
    return this.userUpdateForm.get('lastName');
  }
  get email() {
    return this.userUpdateForm.get('email');
  }
  get phoneNo() {
    return this.userUpdateForm.get('phoneNo');
  }

  popup(content:any='') {
    this.modalService.open(content, {ariaLabelledBy: 'popup-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.userUpdateForm.patchValue({
      id:this.userDetails.id,
      firstName : this.userDetails.firstName,
      lastName : this.userDetails.lastName,
      email : this.userDetails.email,
      phoneNo : this.userDetails.phoneNo,
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
 private getAllUserData() {
  
    this.user.getUserData().subscribe((resp:any) => {
      this.userDetails = resp.data;
      
      console.log(this.userDetails);
    }) 
  
 }
  

  getAuth(){
    this.userData = localStorage.getItem(JSON.parse('loginData'))
    
  }
  
  updateUserData(data:any=''){
    this.user.updateData(data).subscribe((result:any) => {
      console.log(result);
      const updatedData = JSON.stringify('loginData',result)
      localStorage.setItem('loginData',updatedData)
      this.userDetails = result.data
      
    })
  }

  
  
}
