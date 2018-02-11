import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	form;
	
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      emailId: new FormControl("", Validators.required),
      mobNo: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required)
});
  }
  processForm() {
    let msg=this.alertCtrl.create({title:"Invalid Data",message:"All Required Values",buttons:[{text:'Ok',}]});
    let alert = this.alertCtrl.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.firstName + " " + this.form.value.lastName + " " + this.form.value.emailId + " " + this.form.value.mobNo+ " " + this.form.value.city,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
    if (this.form.status === 'INVALID') {
      msg.present()
    }
}

}
