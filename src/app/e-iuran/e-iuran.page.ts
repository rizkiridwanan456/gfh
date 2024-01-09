import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ToastController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-e-iuran',
  templateUrl: './e-iuran.page.html',
  styleUrls: ['./e-iuran.page.scss'],
})
export class EIuranPage implements OnInit {
  public Data: any = [];
  public kd_iuran: any;
  public kd_blok: any;
  public kd_penduduk: any;
  public jenis_pembayaran: string = '';
  public keterangan: string = '';
  public tgl_pembayaran: string = '';
  public bukti_iuran: string = '';
  public kas_tahun: string = '';
  public kas_bulan: string = '';
  public status: string = '';

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private storage: Storage,
    private _apiService: ApiserviceService
  ) {}

  async ngOnInit() {
    await this.getParamsAndFetchData();
  }

  async getParamsAndFetchData() {
    this.route.queryParams.subscribe(async (params) => {
      this.kd_iuran = params['kd_iuran'];
      if (!this.kd_iuran) {
        await this.presentToast(
          'Tidak ada parameter!',
          'warning',
          'alert-circle-outline'
        );
      } else {
        await this.getIuran();
      }
    });
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

  async getIuran() {
    try {
      await this.storage.create();
      const res: any = await this._apiService.getIuran();
      if (res.msg === 'ok') {
        this.Data = res.data.filter((item: any) => item.kd_iuran === this.kd_iuran);
        if (this.Data.length > 0) {
          const dataItem = this.Data[0];
          this.kd_iuran = dataItem.kd_iuran;
          this.kd_blok = dataItem.kd_blok;
          this.kd_penduduk = dataItem.kd_penduduk;
          this.jenis_pembayaran = dataItem.jenis_pembayaran;
          this.keterangan = dataItem.keterangan;
          this.tgl_pembayaran = dataItem.tgl_pembayaran;
          this.bukti_iuran = dataItem.bukti_iuran;
          this.kas_tahun = dataItem.kas_tahun;
          this.kas_bulan = dataItem.kas_bulan;
          this.status = dataItem.status;
        } else {
          await this.presentToast(
            'Data tidak ditemukan',
            'warning',
            'alert-circle-outline'
          );
        }
      } else if (res.msg === 'err') {
        await this.presentToast(
          'Terjadi kesalahan: ' + String(res.err),
          'danger',
          'alert-circle-outline'
        );
      }
    } catch (error) {
      console.error('Error in getIuran', error);
      await this.presentToast(
        'Error mengambil data',
        'danger',
        'alert-circle-outline'
      );
    }
  }

  async updateIuran() {
    try {
      // Periksa apakah ada setidaknya satu bidang yang diisi untuk diubah
      if (
        !this.kd_iuran &&
        !this.kd_blok &&
        !this.kd_penduduk &&
        !this.jenis_pembayaran &&
        !this.keterangan &&
        !this.tgl_pembayaran &&
        !this.bukti_iuran &&
        !this.kas_tahun &&
        !this.kas_bulan &&
        !this.status
      ) {
        this.presentToast(
          'Harap isi setidaknya satu form untuk melakukan perubahan!',
          'warning',
          'alert-circle-outline'
        );
        return;
      }
  
      const loader = await this.loadingCtrl.create({
        message: 'Mohon tunggu...',
        spinner: 'lines',
      });
      loader.present();
  
      const updateData = {
        kd_iuran: this.kd_iuran,
        kd_blok: this.kd_blok,
        kd_penduduk: this.kd_penduduk,
        jenis_pembayaran: this.jenis_pembayaran,
        keterangan: this.keterangan,
        tgl_pembayaran: this.tgl_pembayaran,
        bukti_iuran: this.bukti_iuran,
        kas_tahun: this.kas_tahun,
        kas_bulan: this.kas_bulan,
        status: this.status,
      };
  
      // Panggil API untuk memperbarui data
      const res: any = await this._apiService.updateIuran(updateData, this.kd_iuran);
  
      // Periksa respons dari API
      if (res.msg === 'ok') {
        loader.dismiss();
        this.presentToast(
          'Data berhasil diubah!',
          'success',
          'checkmark-circle-outline'
        );
        this.navCtrl.navigateRoot('/iuran');
      } else {
        loader.dismiss();
        this.presentToast(
          'Gagal mengubah data!',
          'danger',
          'alert-circle-outline'
        );
        console.error('Gagal mengubah data:', res); // Tampilkan respon API dalam konsol
      }
    } catch (error) {
      console.error('Error in updateIuran', error);
      this.loadingCtrl.dismiss();
      this.presentToast(
        'Error mengubah data',
        'danger',
        'alert-circle-outline'
      );
    }
  }
  
  

  backToBlok() {
    this.navCtrl.navigateForward('/iuran');
  }
}
