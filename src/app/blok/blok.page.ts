import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiserviceService } from '../apiservice.service';
import { ToastController, NavController , AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blok',
  templateUrl: './blok.page.html',
  styleUrls: ['./blok.page.scss'],
})
export class BlokPage implements OnInit {

  public info!: string; // Ganti dengan nama yang sesuai
  isMenuOpen = false;
  infoData: any[] = [];
  tahunList: any[] = []; // Pastikan inisialisasi
  alertController: AlertController;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private _apiService: ApiserviceService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
    this.getBlok();
    this.alertController = alertCtrl;
  }

  ngOnInit() {
    this.info = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // Inisialisasi tahunList jika diperlukan
     // Isi dengan data tahun yang diperlukan
  }


  getPayment() {
    // Panggil metode sesuai kebutuhan Anda, contoh:
    // this._apiService.getPaymentByYear(this.searchYear).then((res: any) => { ... });
  }

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

  async getBlok() {
    await this.storage.create();
    this._apiService.getBlok().then((res: any) => {
      console.log('Response from getBlok:', res);
      if (res.msg == 'ok') {
        this.infoData = res.data;
      } else if (res.msg == 'err') {
        this.presentToast('Something went wrong:' + String(res.err), 'danger', 'alert-circle-outline');
      }
    });
  }
  edit(kd_blok: string) {
    console.log('kd_info:', kd_blok);

    if (kd_blok !== undefined && kd_blok !== null && kd_blok.trim() !== '') {
      this.navCtrl.navigateRoot('/e-blok?kd_blok=' + kd_blok);
    } else {
      this.presentToast('Invalid kd value', 'danger', 'alert-circle-outline');
    }
  }
  async confirmDelete(kd_blok: string) {
    try {
      const res = await this._apiService.deleteBlok(kd_blok);

      if (res.msg === 'ok') {
        this.presentToast('Data berhasil dihapus!', 'success', 'checkmark-circle-outline');
        this.getBlok(); // Refresh data setelah penghapusan
      } else if (res.msg === 'notOk') {
        this.presentToast('Data gagal dihapus!', 'danger', 'alert-circle-outline');
      } else {
        this.presentToast('Something went wrong!', 'danger', 'alert-circle-outline');
      }
    } catch (err: any) {
      console.error('Error in deleteBlok:', err);
      this.presentToast('Error: ' + err.err, 'danger', 'alert-circle-outline');
    }
  }


  async delete_Pesan(kd_blok: string) {
    try {
      const res = await this._apiService.deleteBlok(kd_blok);

      if (res.msg === 'ok') {
        this.presentToast('Data berhasil dihapus!', 'success', 'checkmark-circle-outline');
        this.getBlok(); // Refresh data setelah penghapusan
      } else if (res.msg === 'notOk') {
        this.presentToast('Data gagal dihapus!', 'danger', 'alert-circle-outline');
      } else {
        this.presentToast('Something went wrong!', 'danger', 'alert-circle-outline');
      }
    } catch (err: any) {
      console.error('Error in deleteBlok:', err);
      this.presentToast('Error: ' + err.err, 'danger', 'alert-circle-outline');
    }
  }
  async logout() {
    this.storage.remove('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    this.navCtrl.navigateRoot(['/login']);
  }
}
