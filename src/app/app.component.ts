import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  clickCounter:number = 0;

  ngusername:string = "";  // ya ngModel usr kia ha ya html ma bhi agar same name ho to wo khud bind karlata h
  ngpassword:string = "";

  usernamevalueget = "";
  passwordvalue = "";
  usernamevalue = "";
  checkusernamelocal = "";
  checkpasseordlocal = "";
  errorMessage = "";
  HomemethodFromHomeComponentVariable = "";

  constructor(private toastr: ToastrService) {}

  methodSuccessToaster()
  {
    this.toastr.success("You Have SuccessFuly Login");
  }
  methodFailedToaster()
  {
    this.toastr.error("Please Try AGain");
  }
  methodBlockedToaster()
  {
    this.toastr.error("Your Id Has Been Blocked");
  }

  usernameEventCalled(getUsername: any)
  {
    this.usernamevalueget = getUsername.target.value;
  }

  nameAndPassword = [
    {
        name: 'ali',
        password:'123',
        blocked: false       // ya index 0 ha
    },
    {
      name: 'haider',
      password:'123',
      blocked: false        // ya index 1 ha
  }
]



pressHomemethodFromHomeComponent(data: any)
{
  this.HomemethodFromHomeComponentVariable = data;
}

 checkNameAndPassword()
 {

console.warn('Login Method Called')

      for (let index = 0; index < this.nameAndPassword.length; index++)
      {
        let user = this.nameAndPassword[index];  // index 0 ka sara data user ma agaya ha//ya abject of arrays ka index sa sa phala 0 index pa chala ga phir 1 pa karaga
        let username_u = user.name;
      if(user.blocked == false)
      {
        console.warn('block == false');
        if(username_u===this.ngusername)
        {
          if(user.password === this.ngpassword)
          {
              this.clickCounter = 0;
              user.blocked = false;
              console.warn(this.nameAndPassword.length);
              this.methodSuccessToaster();
              break;
          }
          else
          {
            this.methodFailedToaster();
            this.clickCounter++;
          }
        }
             if(this.clickCounter == 3)
              {
                  user.blocked=true;
                  this.errorMessage = "Your Id Has Been Blocked.... : "+user.name;
              }
              if(username_u !=this.ngusername && user.password != this.ngpassword)
              {
                this.methodFailedToaster();
                  console.warn('This User Is Not Registered.....');
                  this.errorMessage = "This User Is Not Registered : "+user.name;
              }
        }

        else
        {
          this.methodBlockedToaster();
          console.warn('Your Id Has Been Blocked');
          this.errorMessage = "Your Id Has Been Blocked : "+user.name;
        }


      }



//  // this.AfterSubmit = this.usernamevalue;
//   //get into variables username and password from fields in the form
//   //for
//   //match values of username and password one by one with
//   //if matched
//   //if user blocked is false
//   // this.AfterSubmit='Login';
//   //this.clickedCounter = 0;
//   //else if not matched
//   //this.clickCounter++;
//   //if clickCounter ==3
 }

}




// for (let index = 0; index < this.nameAndPassword.length; index++)
// {
//   let user = this.nameAndPassword[index];  // index 0 ka sara data user ma agaya ha//ya abject of arrays ka index sa sa phala 0 index pa chala ga phir 1 pa karaga
//   let username_u = user.name;

//   if(username_u===this.ngusername)
//   {
//     if(user.password === this.ngpassword)
//     {
//         this.clickCounter = 0;
//         user.blocked = false;
//         console.warn(this.nameAndPassword.length);
//     }

//   }
// }

// if(this.clickCounter ==0 || this.clickCounter ==1 || this.clickCounter ==2)
// {
//   this.clickCounter++;
//   console.warn('counter added'+this.clickCounter);
// }
// if(this.clickCounter == 3)
// {
//   this.clickCounter = 0;
//   this.errorMessage = "Your Id Has Been Blocked"
// }
