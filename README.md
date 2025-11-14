SSan untuk testing saya:
1. Screenshot melihat semua daftar buku (GET /books)
Menampilkan seluruh data buku yang tersimpan pada server
![GET /books](screenshootTesting/lihatDaftarBuku.png)

2. Screenshot melihat buku tertentu (GET /books/:id)
Menampilkan detail 1 buku berdasarkan ID
![GET /books/:id](screenshootTesting/lihatDaftarBukuTertentu.png)

3. Screenshot menambahkan buku baru (POST /books)
Mengirim JSON berisi title dan author untuk menambahkan data buku
![POST /books](screenshootTesting/postBuku.png)

4. Screenshot error saat menambah buku tanpa mengisi data (POST /books)
Menampilkan respons error 400 - Bad Request dari middleware validasi
![POST /books](screenshootTesting/errorPostBuku.png)

5. Screenshot melihat semua daftar buku setelah dilakukan penambahan (GET /books)
Data buku yang ditambahkan pada POST sebelumnya harus muncul di daftar
![GET /books](screenshootTesting/lihatDaftarBukuAfterPost.png)

6. Screenshot mengedit buku tertentu (PUT /books/:id)
Memperbarui title dan author dari satu buku berdasarkan ID
![PUT /books/:id](screenshootTesting/editBukuTertentu.png)

7. Screenshot error ketika ingin mengedit buku yang tidak terdaftar (PUT /books/:id)
Menampilkan respons 404 - Not Found
![PUT /books/:id](screenshootTesting/errorEditBukuGakAdaDiDaftar.png)

8. Screenshot melihat semua daftar buku setelah diedit (GET /books)
Daftar buku menampilkan perubahan terbaru setelah update
![GET /books](screenshootTesting/lihatDaftarBukuAfterEdit.png)

9. Screenshot menghapus buku tertentu (DELETE /books/:id)
Menghapus satu buku berdasarkan ID
![DELETE /books/:id](screenshootTesting/deteleBukuTertentu.png)

10. Screenshot melihat semua daftar buku setelah ada buku yang dihapus (GET /books)
Menampilkan daftar buku terbaru setelah penghapusan
![GET /books](screenshootTesting/lihatDaftarBukuAfterDelete.png)