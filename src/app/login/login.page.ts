import { Component, OnInit, ViewChild } from '@angular/core';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(
    private toastCtrl: ToastController,
    private _apiService: ApiserviceService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
  ) {}


  async presentToast(msg: any, color: any, icon: any) {
    const toast = await this.toastCtrl.create({
      icon: icon,
      message: msg,
      duration: 1500,
      color: color,
      position: 'top',
    });
    toast.present();
  }

  default() {
    this.username = '';
    this.password = '';
  }

  async login() {
    if (this.username == '' || this.password == '') {
      this.presentToast('Username dan password tidak boleh kosong!', 'danger', "alert-circle-outline");
      this.default();
    } else {
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
        spinner: "lines",
      });
      loader.present();
      this._apiService.login(this.username, this.password).then((res) => {
        if (res == 'success') {
          loader.dismiss();
          this.navCtrl.navigateRoot(['/tabs/tab1']);
          this.presentToast('Login Success...', 'success', "checkmark-circle-outline");
        } else if (res == 'notFound') {
          loader.dismiss();
          this.presentToast('Account not found !', 'danger', "alert-circle-outline");
        } else if (res == 'err') {
          loader.dismiss();
          this.presentToast('Something went wrong !', 'danger', "alert-circle-outline");
        }
        this.default();
      });
    }
  }

  register(){
    this.navCtrl.navigateForward('/register');
  }

  ngOnInit(): void {}
}