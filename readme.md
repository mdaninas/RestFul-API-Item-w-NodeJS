# User API Spec

## Regiser User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "Muhammad Dani",
  "password": "11223344QQWWEERR"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "username": "Muhammad Dani"
  },
  "message": "Anda Telah Berhasil Mendaftar",
  "status": 200
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "Muhammad Dani",
  "password": "11223344QQWWEERR"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 2,
    "name": "Muhammad Dani",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJNdWhhbW1hZCBEYW5pIiwiaWF0IjoxNzQzNzk0MzE5fQ.GHpdp8Y1SWByvZHtRmhbWT03VEJLv4-xfsuW5TLlc_w"
  },
  "message": "Anda Telah Berhasil Login",
  "status": 200
}
```

# Item API Spec

## ADD Item API

Endpoint : POST /api/items

Headers :

- Authorization : token from login

Request Body :

```json
{
  "name": "Sebuah barang",
  "description": "Deskripsi dari barang diatas"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "name": "Sebuah barang",
    "description": "Deskripsi dari barang diatas",
    "id_user": 2
  },
  "message": "Item berhasil ditambahkan"
}
```

## See Detail Item API

Endpoint : GET /api/items/:id
Example : /api/items/1

Headers :

- Authorization : token from login

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "name": "Sebuah barang",
    "description": "Deskripsi dari barang diatas",
    "id_user": 2
  },
  "message": "Detail item 1"
}
```

## Update Item API

Endpoint : POST /api/items/:id/update
Example : /api/items/1/update

Headers :

- Authorization : token from login

Request Body :

```json
{
  "name": "Ini namanya diupdate",
  "description": "Ini namanya di update"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 4,
    "name": "Ini namanya diupdate",
    "description": "Ini namanya di update",
    "id_user": 2
  },
  "message": "Item berhasil diupdate"
}
```

## Delete Item API

Endpoint : POST /api/items/:id/delete
Example : /api/items/1/delete

Headers :

- Authorization : token from login

Response Body Success :

```json
{
    "message": "Item 1 berhasil dihapus"
}
```
