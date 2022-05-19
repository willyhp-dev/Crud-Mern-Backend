A. MongoDB Api

URL : "api/v1/products"
Method: GET,
PARAM :https://prnt.sc/T8xxnK68UQoL
  
URL :"/products/:id",
Method:GET,
PARAM :{
		"_id": "626cc2b254a6b5af60cdc09d",
		"name": "coca cola",
		"price": "2000",
		"stock": "20",
		"status": "true",
		"image_url": "http://localhost:3000/public/Amanah.png"
	}
 
URL:"api/v1/products",
Method :"POST",
PARAM : https://prnt.sc/5qBcy8m-HCZ4

URL:"api/v1/products/:id",
Method:"PATCH",
PARAM: https://prnt.sc/1OFSFFf1pU6p

URL:"api/v1/products/:id",
Method:Delete,
PARAM: {
	"acknowledged": true,
	"deletedCount": 1
}

B. Mongoose

URL:api/v2/productz/
Method : GET,
PARAM : "data": [
		{
			"_id": "62808c3843893cc4f0daec2c",
			"name": "Beef",
			"price": 100000,
			"description": "testing",
			"image_url": "f3f4888f41b5b8a080bab339127161c1.png",
			"createdAt": "2022-05-15T05:14:32.622Z",
			"updatedAt": "2022-05-15T05:14:32.622Z",
			"__v": 0
		},
		{
			"_id": "62809e1b4e5943b6fc74b11d",
			"name": "Beef",
			"price": 100000,
			"description": "testing",
			"image_url": "27b383ae291bac66f200313de6b1cee5.png",
			"category": {
				"_id": "62807a1ac3d4dc043aa1443a",
				"name": "minuman",
				"createdAt": "2022-05-15T03:57:14.889Z",
				"updatedAt": "2022-05-15T03:57:14.889Z",
				"__v": 0
			},
			"tag": {
				"_id": "62809d01416fa0d34e870301",
				"name": "Soda",
				"createdAt": "2022-05-15T06:26:09.545Z",
				"updatedAt": "2022-05-15T06:26:09.545Z",
				"__v": 0
			},
			"createdAt": "2022-05-15T06:30:51.731Z",
			"updatedAt": "2022-05-15T06:30:51.731Z",
			"__v": 0
		},
		{
			"_id": "6280ad9cf3e20b5f5009d67d",
			"name": "Beef",
			"price": 100000,
			"description": "testing",
			"image_url": "c883de27ed0e2ec9e344eddeb5bc1a2d.png",
			"category": {
				"_id": "62807a1ac3d4dc043aa1443a",
				"name": "minuman",
				"createdAt": "2022-05-15T03:57:14.889Z",
				"updatedAt": "2022-05-15T03:57:14.889Z",
				"__v": 0
			},
			"tag": {
				"_id": "62809d01416fa0d34e870301",
				"name": "Soda",
				"createdAt": "2022-05-15T06:26:09.545Z",
				"updatedAt": "2022-05-15T06:26:09.545Z",
				"__v": 0
			},
			"createdAt": "2022-05-15T07:37:00.492Z",
			"updatedAt": "2022-05-15T07:37:00.492Z",
			"__v": 0
		},
		{
			"_id": "6280ae3bf3e20b5f5009d687",
			"name": "Beef",
			"price": 100000,
			"description": "testing",
			"image_url": "75469a5ea338a4de2d8172a663c14603.png",
			"category": {
				"_id": "62807a1ac3d4dc043aa1443a",
				"name": "minuman",
				"createdAt": "2022-05-15T03:57:14.889Z",
				"updatedAt": "2022-05-15T03:57:14.889Z",
				"__v": 0
			},
			"tag": {
				"_id": "6280a0a3d1edd5589ac94f71",
				"name": "manisan",
				"createdAt": "2022-05-15T06:41:39.911Z",
				"updatedAt": "2022-05-15T06:41:39.911Z",
				"__v": 0
			},
			"createdAt": "2022-05-15T07:39:39.252Z",
			"updatedAt": "2022-05-15T07:39:39.252Z",
			"__v": 0
		},

URL:api/v2/productz/:search
Method:GET,
PARAM : [
	{
		"_id": "628262f60c45ac2d9eeb1fa5",
		"name": "Fanta",
		"price": 10000,
		"stock": 50,
		"status": "false",
		"__v": 0
	}
]

URL:api/v2/productz
Method:POST,
PARAM : {
	"name": "sprite",
	"price": 10000,
	"stock": 50,
	"status": "false",
	"_id": "6285dade6513d99c05f7437d",
	"__v": 0
}

URL:api/v2/detail/:id
Method:GET,
PARAM : [
	{
		"_id": "6280ae3bf3e20b5f5009d687",
		"name": "Beef",
		"price": 100000,
		"description": "testing",
		"image_url": "75469a5ea338a4de2d8172a663c14603.png",
		"category": "62807a1ac3d4dc043aa1443a",
		"tag": "6280a0a3d1edd5589ac94f71",
		"createdAt": "2022-05-15T07:39:39.252Z",
		"updatedAt": "2022-05-15T07:39:39.252Z",
		"__v": 0
	}
]

URL:api/v2/update/:id
Method : patch,
PARAM : {
	"acknowledged": true,
	"modifiedCount": 1,
	"upsertedId": null,
	"upsertedCount": 0,
	"matchedCount": 1
}

URL :api/v2/delete/:id
Method: delete,
PARAM : {
	"acknowledged": true,
	"deletedCount": 1
}
