import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiserviceService } from '../apiservice.service';
import { ViewDidEnter, ToastController, NavController, AlertController } from '@ionic/angular';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-suratkeluar',
  templateUrl: './suratkeluar.page.html',
  styleUrls: ['./suratkeluar.page.scss'],
})
export class SuratkeluarPage implements ViewDidEnter {
  public info!: string;
  isMenuOpen = false;
  suratData: any[] = [];
  alertController: AlertController;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private navCtrl: NavController,
    private _apiService: ApiserviceService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    this.getSurat();
    this.alertController = alertCtrl;
  }

  ionViewDidEnter() {
    this.getSurat();
    this.alertController = this.alertCtrl;
  }

  async presentToast(msg: string, color: string, icon: string) {
    const toast = await this.toastCtrl.create({
      icon: icon,
      message: msg,
      duration: 1500,
      color: color,
      position: 'top',
    });
    toast.present();
  }

  async getSurat() {
    try {
      await this.storage.create();
      const res = await this._apiService.getSurat();

      if (res.msg === 'ok') {
        this.suratData = res.data || [];
      } else if (res.msg === 'notFound') {
        this.presentToast('Belum ada info!', 'warning', 'alert-circle-outline');
      } else {
        this.presentToast('Terjadi kesalahan', 'danger', 'alert-circle-outline');
      }
    } catch (err: any) {
      console.error('Error in getInfo:', err);
      this.presentToast('Gagal mengambil data', 'danger', 'alert-circle-outline');
    }
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getSurat();
      event.target.complete();
    }, 2000);
  }

  edit(kd_surat_keluar: string) {
    console.log('kd_surat_keluar:', kd_surat_keluar);

    if (kd_surat_keluar) {
      this.navCtrl.navigateRoot(`/e-surat?kd_surat_keluar=${kd_surat_keluar}`);
    } else {
      this.presentToast('Nilai kd tidak valid', 'danger', 'alert-circle-outline');
    }
  }

  async confirmDelete(kd_surat_keluar: string) {
    const alert = await this.alertCtrl.create({
      header: 'Konfirmasi Hapus',
      message: 'Apakah Anda yakin ingin menghapus informasi ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Penghapusan dibatalkan');
          },
        },
        {
          text: 'Hapus',
          handler: () => {
            this.deleteSurat(kd_surat_keluar);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteSurat(kd_surat_keluar: string) {
    try {
      const res = await this._apiService.Delete_surat(kd_surat_keluar);

      if (res.msg === 'ok') {
        this.presentToast('Data berhasil dihapus!', 'success', 'checkmark-circle-outline');
        this.getSurat(); // Refresh data setelah penghapusan
      } else if (res.msg === 'notOk') {
        this.presentToast('Gagal menghapus data!', 'danger', 'alert-circle-outline');
      } else {
        this.presentToast('Terjadi kesalahan!', 'danger', 'alert-circle-outline');
      }
    } catch (err: any) {
      console.error('Error in deleteSurat:', err);
      this.presentToast(`Error: ${err.err}`, 'danger', 'alert-circle-outline');
    }
  }

  exportToExcel() {
    if (this.suratData.length > 0) {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.suratData);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'suratData');
      XLSX.writeFile(wb, 'surat_data.xlsx');
    } else {
      this.presentToast('Tidak ada data untuk diekspor', 'warning', 'alert-circle-outline');
    }
  }
  async logout() {
    this.storage.remove('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    this.navCtrl.navigateRoot(['/login']);
  }
}
