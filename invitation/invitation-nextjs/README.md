# Digital Wedding Invitation - Template (Next.js)

Template undangan digital ini dibuat dengan framework **Next.js** dan mengikuti standar integrasi sistem Dream Wedding.

## 🧩 Struktur Utama
- `components` → Komponen UI berdasarkan section
- `sources/configData.json` → Metadata template, section default, dan URL preview
- `assets/` → Anda bisa buat sendiri foldernya jika dibutuhkan untuk menyimpan foto atau video dsb

## ⚙️ configData.json

Jika ada section yang tidak akan dipakai, anda hanya perlu mengubah value `enabled` menjadi **false**. Harap untuk tidak menghapus default file dan folder yang sudah tersedia, namun anda dapat menambahkan atau mengedit tanpa merusak struktur asli.

```json
{
  "templateMeta": {
    "name": "Elegant Gold",
    "author": "Dev Studio X",
    "version": "1.0.0"
  },
  "urlPreview": "https://dreamwedding.id/preview/elegant-gold",
  "defaultSections": [
        {
            "name": "quote",
            "enabled": true,
            "order": 1
        },
        {
            "name": "couple",
            "enabled": true,
            "order": 2
        },
        {
            "name": "journey",
            "enabled": true,
            "order": 3
        },
        {
            "name": "gallery",
            "enabled": true,
            "order": 4
        },
        {
            "name": "event",
            "enabled": true,
            "order": 5
        },
        {
            "name": "rsvp",
            "enabled": true,
            "order": 6
        },
        {
            "name": "gift",
            "enabled": true,
            "order": 7
        },
        {
            "name": "thankyou",
            "enabled": true,
            "order": 8
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
