# Dokumentasi riwayat perubahan
\
## Inisiasi instal 10/31/2016
- 10312016001 Buat repositori
- 10312016002 Buat file changeLogs
- 10312016003 Instal dengan menggunakan phnegap
- 10312016004 Mengubah direktori

## POST using JQuery , XML 6/12/2016

- GET schema
	- tipe data bisa apa aja, kalo disini xml
- Isi schema
	- tipe data bisa apa aja, kalo disini xml trus di convert ke text
- POST schema
	- tipe data harus text
	
## controller untuk POST form carts, 7/12/2016 12:05

## Update, Image, Form, dll 13/12/2016 16:24
- index.html
	- product image udah bisa kebaca dengan size kecil, yg skrg dipake "small_default", tipe2nya ada di ../images/products
	- untuk ganti tipenya, tinggal ditambahin nama tipe tsb di akhir link
	- contoh :
		- var setUrlImageProduts = "http://ARMMR8JEW5FLK7AS63FLHUU72I29QDXP@go-obat.com/markets/api/images/products/"+apiIdProduct+
			"/"+apiIdImage+"/small_default";
		
- post.js
	- fungsi "postData" diganti jadi "create"
	- tambahan fungsi "readId"
		return data berupa file xml
	- tambahan fungsi "updateId"
	- untuk sementara masih dalam bentuk fungsi2, saya masih mempelajari OOPnya dulu
	
- Note:
	- http://bootsnipp.com/forms
		- website form builder, biar cepet bikin formnya, bikin form di web tsb, kemudian htmlnya bisa diambil lalu dicopas ke kodingan,
			tinggal sinkronisasi dengan jquerynya
			
## Display image ternyata belom bisa (SOLVED)
  - harus pake ws_key='KEY' di akhir link untuk menampilkan gambar 
  
## Log apk error di build phonegap (SOLVED)
  - Pastikan meta header default bawaan phonegap
  
## Link login/register error (SOLVED)
  - Ternyata karena salah nama link root folder yang harusnya 'A' jadi 'a'
  
## Fungsi untuk ambil gambar di edit dikit

## updateId untuk nambah produk ke cart, tinggal di tes

## 12/23/2016 error ( SOLVED ), update cart, search method
  
  - error : 
	- di android ga bisa create tapi di desktop bisa, data ga keinput
	- solved, ganti innerHTML jadi textContent
  
  - update cart : 
	- Tambah produk OK
	- Ganti quantity OK
		- Sempet error karena ngebandingin innerHTML sama integer, sedangkan isi innerHTML bukan integer doang
		- Solved karena innerHTML diganti textContent
 
  - search method :
    - bisa search id_customer di dalem addresses
	- bisa search email and password, login kalo salah berarti salah kombinasi
	- pake ?filter[key]=value
	
## 1/4/2017 Cart
	- Tampil jumlah produk di cart di index.html
	- ga ada cart, create
	- ada cart, update

## 1/4/2017 Error di android ga ngebaca webService.search ( InsyaAllah Fixed )
	- webservice.js ga kebaca yang diindex
	- harusnya lgsg js/webservice.js tapi malah ../../webservice.js
	
## 1/5/2017
  ### Order product.html
  -- input jumlah qty product
  
## 1/5/2017 register2 dan savedSyntax
  ### register dan register2.html
    -- register form untuk register nama dll untuk login doang tanpa alamat
	-- register2 form untuk registrasi alamat
	  --- form provinsi jadinya pake htmlnya aja biar cepet
  ### savedSyntax.txt
    -- file untuk nyimpen syntax yang udah dibikin tapi belom kepake
	
## 1/6/2017 Error produk ilang OK & quantity udah nambah dari yang sebelomnya:
  ### order1.html
    -- Tambahan kodingan untuk cek apakah produk ada di database, kalau ga ada , langsung apus di cart
	-- Ganti kodingan dari sync jadi async supaya nampilin gambar ga perlu nunggu looping selesai dulu
	
  ### savedSyntax.txt
    -- Kodingan di order1.html yang lama dimasukin ke sini
  
  ### product.html
    -- qty nambah dari yang sebelumnya
	
## 1/6/2017 Login dan Logout
 ### index.html
   -- Udah bisa login dan logout
   
## 1/9/2017 order1 dan index
 ### order1.html
   -- ganti dikit 
 ### index.html
   -- nambahin dikit supaya gambar cartnya bisa d klik
   
 ## 1/12/2017
  ###Perbaikan alur langkah-langkah Order product (20%)
  -- langkah 1 (80%)
  -- langkah 2 (30%)
   --- jika id addres kosong
   ---- form input alamat 
   --- jika id address ada
   ---- tampilkan informasi alamat
  -- langkah 3 (0%)
  -- langkah 4 (0%)

## 1/16/2017  
###Perbaikan alur langkah-langkah Order product (20%)
 -- langkah 1 (80%)
   --- Menampilkan gambar ws_key = key
 -- langkah 2 (30%)
   ---jika id addres kosong
   ---- form input alamat (40%)
   ---jika id address ada
   ---- tampilkan informasi alamat (80%)
   --- Pilih kurir pengirian (0%)
 -- langkah 3 (1%)
 -- langkah 4 (1%)
 
## 1/16/2017
###Perubahan yang masih berantakan  :
 -- Beberapa pake promise
 -- shipping cost dari rajaongkir
 -- webservice nambah fungsi promise
 
## 1/19/2017
### Tuker fungsi di index.html sama top.html

## 1/19/2017
### Tambah contoh program get kecamatan,kota,provinsi,cost di index.html

## 1/20/2017
###Carts
 -- Get total produk di carts
 -- LocalStorage carts cartRow_[i]
 
## 1/20/2017
###Navbar Trolli
 -- Menampilkan jumlah produk pada tombol keranjang
 
## 1/22/2017
###Tambah fungsi untuk get data dari rajaongkir :
 --pake promise supaya tetep asynchronous
 --webservice.readPromiseRajaongkir(objectName,id)
    ---khusus untuk 'province' masukin id=0
 --webService.readCostRajaongkir(array)
    ---array = 6 data yg dibutuhkan, contoh ada di order2.html
	
## 1/23/2017
###Index nyobain pake promise, Tes Apps

## 1/23/2017
### nyimpen data customer di localStorage

## 1/2/2017
## Registrasi
 -- keyDown event