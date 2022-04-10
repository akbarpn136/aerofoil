# AEROFOIL
Repositori pengembangan aplikasi riset aerofoil. Aplikasi ini
diharapkan dapat membantu dalam pengumpulan data latih
untuk membangun model AI dengan arsitektur _Convolutional Neural Network_ (CNN).

### Persiapan Pengembangan
Selama pengembangan aplikasi, dibutuhkan file
```.env``` dalam direktori utama (root) aplikasi sebagai berikut:

```text
DEBUG=dev                 #rest-api
SECRET_KEY=s3cr3t         #rest-api
PAGE_SIZE=100             #rest-api,ui
REST_HOST=localhost:8000  #ui
SOURCE_CODE=github.com    #ui
```

Disamping file ```.env```, perlu juga mempersiapkan model hasil latih **aerocnn.pt** ke dalam
direktori statik django ```settings.STATIC_ROOT/cnn/aerocnn.pt```. Model **aerocnn.pt** dapat
diambil melalui tautan rilis.

Jalankan perintah `pip install -r requirements.txt` untuk menambahkan _package dependencies_
yang diperlukan di dalam _root_ direktori. Yakinkan [Python](https://www.python.org/) sudah terpasang di sistem operasi.

Selanjutnya pindah ke direktori `templates/foil_default` dan lakukan instruksi
melalui terminal `npm install` untuk menambahkan _package dependencies_
yang diperlukan. Yakinkan [NodeJS](https://nodejs.org/en/) sudah terpasang di sistem operasi.

### Otomatisasi Data
Aplikasi ini juga dapat melakukan otomatisasi data yaitu
1. Membuat data _Signed Distance Field_ (SDF) airfoil
2. Membuat data masukan database berupa aerodinamika airfoil dari keluaran XFLR5.

Untuk membuat data SDF airfoil dapat dilakukan di dalam _root_
direktori aplikasi ini melalui terminal dengan instruksi 
`python .\manage.py autosdf naca0006 coord.csv 0 1 2 3 4 5 6 7 ...`. Berikut ini
penjelasan instruksi setelah kata **autosdf** tersebut.

* Argumen 1, misalkan naca0006 memberikan indikasi nama/kode airfoil
* Argumen 2, misalkan coord.csv memberikan indikasi nama file dalam csv
berkaitan dengan koordinat airfoil tersebut.
* Argumen 3, misalkan 0 1 2 dan seterusnya memberikan indikasi sudut 
serang yang diinginkan untuk SDF.

Untuk membuat data masukan ke database dapat dilakukan melalui instruksi
`python .\manage.py autodb naca0006 aero.txt 1000000 0`. Berikut ini
penjelasan instruksi setelah kata **autodb** tersebut.
* Argumen 1, misalkan naca0006 memberikan indikasi nama/kode airfoil
* Argumen 2, misalkan aero.txt memberikan indikasi kumpulan data 
aerdinamika airfoil berada dalam file aero.txt.
* Argumen 3, misalkan 1000000 memberikan indikasi _Reynolds Number_
* Argumen 4, misalkan 0 memberikan indikasi _Mach Number_
