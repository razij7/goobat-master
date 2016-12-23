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