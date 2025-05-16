# Digital Time Capsule - Template (Next.js)

Template kapsul waktu digital ini dibangun dengan framework **Next.js** untuk menyimpan kenangan, pesan, dan momen spesial pasangan pengantin.

## 🧩 Struktur Utama
- `components` → Komponen UI per section (Gallery, Message, Video, dll)
- `sources/configData.json` → Metadata template, default sections, dan URL preview
- `assets/` → Anda bisa buat sendiri foldernya jika dibutuhkan untuk menyimpan foto atau video dsb

## ⚙️ configData.json

Jika ada section yang tidak akan dipakai, anda hanya perlu mengubah value `enabled` menjadi **false**. Harap untuk tidak menghapus default file dan folder yang sudah tersedia, namun anda dapat menambahkan atau mengedit tanpa merusak struktur asli.

```json
{
  "templateMeta": {
    "name": "Elegant Diamond",
    "author": "Dev Studio X",
    "version": "1.0.0"
  },
  "urlPreview": "https://elegant-diamond-time-capsule.vercel.app/",
  "defaultSections": [
        {
            "name": "gallery",
            "enabled": true,
            "order": 1
        },
        {
            "name": "message",
            "enabled": true,
            "order": 2
        },
        {
            "name": "sharecapsule",
            "enabled": true,
            "order": 3
        },
        {
            "name": "video",
            "enabled": true,
            "order": 4
        },
        {
            "name": "couple",
            "enabled": true,
            "order": 5
        },
        {
            "name": "thankyou",
            "enabled": true,
            "order": 6
        }
    ]
}
```

## Mulai Menjalankan

Perintah untuk menjalankan default template:

```bash
# install
npm install

#jalankan
npm run dev
```
