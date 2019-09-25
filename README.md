# Vue Online Store

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Vue Online Store API
API for the Vue online store app

https://vue-online-store-api.herokuapp.com

## Authorization
All `GET` endpoints require the `Authorization` header to be set with a token (obtained through the `login` endpoint).
Example:

```json
{
  "Authorization": "MTU2Njk3NjQwNTMzNw=="
}
```

## Endpoints
* [Login](#login)
* [Get Products](#get-products)
* [Get Products by Category](#get-products-by-category)
* [Get a Single Product](#get-a-single-product)
* [Get Product Reviews](#get-product-reviews)
* [Get Categories](#get-categories)
* [Get Subcategories](#get-subcategories)
* [Get a Single Category](#get-a-single-category)
* [Get Most Viewed Products](#get-most-viewed-products)
* [Get Most Viewed Products by Category](#get-most-viewed-products-by-category)
* [Get Deals of the Day](#get-deals-of-the-day)
* [Get Deals of the Day by Category](#get-deals-of-the-day-by-category)

### Login
`POST /api/login`

#### Body
```json
{
  "username": "admin@accedia.com",
  "password": "admin"
}
```

#### Sample Response
Status `200 OK`

```json
{
  "user": {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "jack",
      "last": "anderson"
    },
    "location": {
      "street": "3067 22nd ave",
      "city": "sutton",
      "state": "newfoundland and labrador",
      "postcode": "I9J 2X0",
      "coordinates": {
        "latitude": "-62.0098",
        "longitude": "-54.4948"
      },
      "timezone": {
        "offset": "+10:00",
        "description": "Eastern Australia, Guam, Vladivostok"
      }
    },
    "email": "jack.anderson@example.com",
    "login": {
      "uuid": "60f40d5a-0df5-43b3-8089-e1c8b7ff25c0",
      "username": "orangemeercat903",
      "password": "1101",
      "salt": "c20woRpG",
      "md5": "884d37012c8cb6d515191e4541bc5ee7",
      "sha1": "6e38a63f8d25c4652a6759f0be0a833624322464",
      "sha256": "a58c87328d463fa80042f3c6133592a057c721e2d262a9dd8c143068cbadea86"
    },
    "dob": {
      "date": "1949-05-18T15:17:40Z",
      "age": 70
    },
    "registered": {
      "date": "2015-03-22T17:05:52Z",
      "age": 4
    },
    "phone": "649-913-7055",
    "cell": "134-762-0372",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/54.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
    },
    "nat": "CA"
  },
  "token": "MTU2Njk3NjQwNTMzNw=="
}
```

Status `400 Bad Request`

```json
{
  "message": "wrong password",
  "detail": "wrongPassword"
}
```

### Get Products
`GET /api/products`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": 1000006,
    "score": null,
    "productId": 2266824,
    "name": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray] [2011]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2011-04-26",
    "new": false,
    "active": true,
    "lowPriceGuarantee": true,
    "activeUpdateDate": "2017-06-10T07:44:27",
    "regularPrice": 12.99,
    "salePrice": 12.99,
    "clearance": false,
    "onSale": false,
    "planPrice": null,
    "priceWithPlan": [],
    "contracts": [],
    "priceRestriction": null,
    "priceUpdateDate": "2017-02-12T08:14:07",
    "digital": false,
    "preowned": false,
    "carriers": [],
    "planFeatures": [],
    "devices": [],
    "carrierPlans": [],
    "technologyCode": null,
    "carrierModelNumber": null,
    "earlyTerminationFees": [],
    "monthlyRecurringCharge": "",
    "monthlyRecurringChargeGrandTotal": "",
    "activationCharge": "",
    "minutePrice": "",
    "planCategory": null,
    "planType": null,
    "familyIndividualCode": null,
    "validFrom": null,
    "validUntil": null,
    "carrierPlan": null,
    "outletCenter": null,
    "secondaryMarket": null,
    "frequentlyPurchasedWith": [],
    "accessories": [],
    "relatedProducts": [],
    "requiredParts": [],
    "techSupportPlans": [],
    "crossSell": [],
    "salesRankShortTerm": null,
    "salesRankMediumTerm": 29985,
    "salesRankLongTerm": 45986,
    "bestSellingRank": 42786,
    "url": "https://api.bestbuy.com/click/-/1000006/pdp",
    "spin360Url": null,
    "mobileUrl": "https://api.bestbuy.com/click/-/1000006/pdp",
    "affiliateUrl": null,
    "addToCartUrl": "https://api.bestbuy.com/click/-/1000006/cart",
    "affiliateAddToCartUrl": null,
    "linkShareAffiliateUrl": "",
    "linkShareAffiliateAddToCartUrl": "",
    "upc": "013132620237",
    "productTemplate": "Movies",
    "categoryPath": [
      {
        "id": "cat00000",
        "name": "Best Buy"
      },
      {
        "id": "abcat0600000",
        "name": "Movies & Music"
      },
      {
        "id": "cat02015",
        "name": "Movies & TV Shows"
      }
    ],
    "alternateCategories": [],
    "lists": [],
    "customerReviewCount": 77,
    "customerReviewAverage": 4.5,
    "customerTopRated": true,
    "format": "Blu-ray",
    "freeShipping": false,
    "freeShippingEligible": true,
    "inStoreAvailability": false,
    "inStoreAvailabilityText": "Store Pickup:",
    "inStoreAvailabilityUpdateDate": "2017-08-25T12:34:36",
    "itemUpdateDate": "2019-08-15T03:15:04",
    "onlineAvailability": true,
    "onlineAvailabilityText": "Backordered: Usually ships in 3-4 weeks",
    "onlineAvailabilityUpdateDate": "2019-06-12T06:20:30",
    "releaseDate": "2011-11-22",
    "shippingCost": 3.99,
    "shipping": [
      {
        "ground": 3.99,
        "secondDay": 10.79,
        "nextDay": 16.25,
        "vendorDelivery": ""
      }
    ],
    "shippingLevelsOfService": [
      {
        "serviceLevelId": 5,
        "serviceLevelName": "One Day",
        "unitShippingPrice": 16.25
      },
      {
        "serviceLevelId": 3,
        "serviceLevelName": "Two Day",
        "unitShippingPrice": 10.79
      },
      {
        "serviceLevelId": 15,
        "serviceLevelName": "Standard",
        "unitShippingPrice": 3.99
      }
    ],
    "specialOrder": false,
    "shortDescription": null,
    "class": "BLU RAY MOVIES",
    "classId": 76,
    "subclass": "CHILDRENS",
    "subclassId": 1006,
    "department": "VIDEO/COMPACT DISC",
    "departmentId": 8,
    "protectionPlanTerm": "BD-",
    "protectionPlanType": null,
    "protectionPlanLowPrice": "",
    "protectionPlanHighPrice": "",
    "buybackPlans": [],
    "protectionPlans": [],
    "protectionPlanDetails": [],
    "productFamilies": [],
    "productVariations": [],
    "aspectRatio": null,
    "screenFormat": null,
    "lengthInMinutes": 89,
    "mpaaRating": "PG",
    "plot": "A retired spy-turned-full-time homemaker attempts to stop a power-mad supervillain from taking over the planet, and gets some unexpected help from her disagreeable twin step-children in this fourth entry of writer/director Robert Rodriguez's family-friendly adventure series. It's been a long time since former OSS agent Marissa Cortez Wilson (Jessica Alba) went chasing bad guys. These days it's hard enough just to get her precocious stepkids, Rebecca (Rowan Blanchard) and Cecil (Mason Cook), to clean their rooms, and make sure her baby daughter has a full sippy cup. And despite the fact that Marissa's husband, Wilbur (Joel McHale), earns his income chasing spies on TV, he hasn't a clue that his mild-mannered wife was once a cloak-and-dagger woman. Now the nefarious Timekeeper (Jeremy Piven) has hatched a plot for world domination, prompting the OSS to summon Marissa back to active duty. When Rebecca and Cecil discover their stepmother's tightly guarded secret, they realize they might be the only hope for getting her out of a tight jam and foiling the Timekeeper's evil plan. Fortunately Carmen (Alexa Vega) and Juni Cortez (Daryl Sabara) are more than willing to teach Rebecca and Cecil the tricks of the trade, and in no time the two bickering ten-year-olds are wielding hi-tech gadgets and heading out on their first assignment.~Jason Buchanan",
    "studio": "Lionsgate",
    "theatricalReleaseDate": "2011",
    "description": null,
    "manufacturer": null,
    "modelNumber": "26091006",
    "images": [
      {
        "rel": "Front_Original",
        "unitOfMeasure": "pixels",
        "width": "778",
        "height": "1000",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_so.jpg"
      },
      {
        "rel": "Front_Thumbnail",
        "unitOfMeasure": "pixels",
        "width": "54",
        "height": "69",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_s.gif"
      },
      {
        "rel": "Front_Detail",
        "unitOfMeasure": "pixels",
        "width": "105",
        "height": "135",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sc.jpg"
      },
      {
        "rel": "Front_Standard",
        "unitOfMeasure": "pixels",
        "width": "389",
        "height": "500",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sa.jpg"
      },
      {
        "rel": "Front_Large",
        "unitOfMeasure": "pixels",
        "width": "124",
        "height": "160",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg"
      },
      {
        "rel": "Front_Medium",
        "unitOfMeasure": "pixels",
        "width": "70",
        "height": "90",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006fp.gif"
      }
    ],
    "image": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sa.jpg",
    "largeFrontImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg",
    "mediumImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006fp.gif",
    "thumbnailImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_s.gif",
    "largeImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg",
    "alternateViewsImage": null,
    "angleImage": null,
    "backViewImage": null,
    "energyGuideImage": null,
    "leftViewImage": null,
    "accessoriesImage": null,
    "remoteControlImage": null,
    "rightViewImage": null,
    "topViewImage": null,
    "albumTitle": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray]",
    "artistName": null,
    "artistId": null,
    "originalReleaseDate": null,
    "parentalAdvisory": null,
    "mediaCount": null,
    "monoStereo": null,
    "studioLive": null,
    "condition": "New",
    "inStorePickup": false,
    "friendsAndFamilyPickup": true,
    "homeDelivery": false,
    "quantityLimit": 3,
    "fulfilledBy": "BestBuy.com",
    "members": [],
    "bundledIn": [],
    "albumLabel": null,
    "genre": "Action and Adventure",
    "color": null,
    "depth": null,
    "dollarSavings": 0,
    "percentSavings": "0.0",
    "tradeInValue": "",
    "height": null,
    "orderable": "Available",
    "weight": null,
    "shippingWeight": 0.25,
    "width": null,
    "warrantyLabor": null,
    "warrantyParts": null,
    "softwareAge": null,
    "softwareGrade": null,
    "platform": null,
    "numberOfPlayers": null,
    "softwareNumberOfPlayers": null,
    "esrbRating": null,
    "longDescription": null,
    "includedItemList": [],
    "marketplace": false,
    "listingId": null,
    "sellerId": null,
    "shippingRestrictions": null,
    "proposition65WarningMessage": null,
    "proposition65WarningType": "05"
  }
]
```

### Get Products by Category
`GET /api/categories/:id/products`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": 1000006,
    "score": null,
    "productId": 2266824,
    "name": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray] [2011]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2011-04-26",
    "new": false,
    "active": true,
    "lowPriceGuarantee": true,
    "activeUpdateDate": "2017-06-10T07:44:27",
    "regularPrice": 12.99,
    "salePrice": 12.99,
    "clearance": false,
    "onSale": false,
    "planPrice": null,
    "priceWithPlan": [],
    "contracts": [],
    "priceRestriction": null,
    "priceUpdateDate": "2017-02-12T08:14:07",
    "digital": false,
    "preowned": false,
    "carriers": [],
    "planFeatures": [],
    "devices": [],
    "carrierPlans": [],
    "technologyCode": null,
    "carrierModelNumber": null,
    "earlyTerminationFees": [],
    "monthlyRecurringCharge": "",
    "monthlyRecurringChargeGrandTotal": "",
    "activationCharge": "",
    "minutePrice": "",
    "planCategory": null,
    "planType": null,
    "familyIndividualCode": null,
    "validFrom": null,
    "validUntil": null,
    "carrierPlan": null,
    "outletCenter": null,
    "secondaryMarket": null,
    "frequentlyPurchasedWith": [],
    "accessories": [],
    "relatedProducts": [],
    "requiredParts": [],
    "techSupportPlans": [],
    "crossSell": [],
    "salesRankShortTerm": null,
    "salesRankMediumTerm": 29985,
    "salesRankLongTerm": 45986,
    "bestSellingRank": 42786,
    "url": "https://api.bestbuy.com/click/-/1000006/pdp",
    "spin360Url": null,
    "mobileUrl": "https://api.bestbuy.com/click/-/1000006/pdp",
    "affiliateUrl": null,
    "addToCartUrl": "https://api.bestbuy.com/click/-/1000006/cart",
    "affiliateAddToCartUrl": null,
    "linkShareAffiliateUrl": "",
    "linkShareAffiliateAddToCartUrl": "",
    "upc": "013132620237",
    "productTemplate": "Movies",
    "categoryPath": [
      {
        "id": "cat00000",
        "name": "Best Buy"
      },
      {
        "id": "abcat0600000",
        "name": "Movies & Music"
      },
      {
        "id": "cat02015",
        "name": "Movies & TV Shows"
      }
    ],
    "alternateCategories": [],
    "lists": [],
    "customerReviewCount": 77,
    "customerReviewAverage": 4.5,
    "customerTopRated": true,
    "format": "Blu-ray",
    "freeShipping": false,
    "freeShippingEligible": true,
    "inStoreAvailability": false,
    "inStoreAvailabilityText": "Store Pickup:",
    "inStoreAvailabilityUpdateDate": "2017-08-25T12:34:36",
    "itemUpdateDate": "2019-08-15T03:15:04",
    "onlineAvailability": true,
    "onlineAvailabilityText": "Backordered: Usually ships in 3-4 weeks",
    "onlineAvailabilityUpdateDate": "2019-06-12T06:20:30",
    "releaseDate": "2011-11-22",
    "shippingCost": 3.99,
    "shipping": [
      {
        "ground": 3.99,
        "secondDay": 10.79,
        "nextDay": 16.25,
        "vendorDelivery": ""
      }
    ],
    "shippingLevelsOfService": [
      {
        "serviceLevelId": 5,
        "serviceLevelName": "One Day",
        "unitShippingPrice": 16.25
      },
      {
        "serviceLevelId": 3,
        "serviceLevelName": "Two Day",
        "unitShippingPrice": 10.79
      },
      {
        "serviceLevelId": 15,
        "serviceLevelName": "Standard",
        "unitShippingPrice": 3.99
      }
    ],
    "specialOrder": false,
    "shortDescription": null,
    "class": "BLU RAY MOVIES",
    "classId": 76,
    "subclass": "CHILDRENS",
    "subclassId": 1006,
    "department": "VIDEO/COMPACT DISC",
    "departmentId": 8,
    "protectionPlanTerm": "BD-",
    "protectionPlanType": null,
    "protectionPlanLowPrice": "",
    "protectionPlanHighPrice": "",
    "buybackPlans": [],
    "protectionPlans": [],
    "protectionPlanDetails": [],
    "productFamilies": [],
    "productVariations": [],
    "aspectRatio": null,
    "screenFormat": null,
    "lengthInMinutes": 89,
    "mpaaRating": "PG",
    "plot": "A retired spy-turned-full-time homemaker attempts to stop a power-mad supervillain from taking over the planet, and gets some unexpected help from her disagreeable twin step-children in this fourth entry of writer/director Robert Rodriguez's family-friendly adventure series. It's been a long time since former OSS agent Marissa Cortez Wilson (Jessica Alba) went chasing bad guys. These days it's hard enough just to get her precocious stepkids, Rebecca (Rowan Blanchard) and Cecil (Mason Cook), to clean their rooms, and make sure her baby daughter has a full sippy cup. And despite the fact that Marissa's husband, Wilbur (Joel McHale), earns his income chasing spies on TV, he hasn't a clue that his mild-mannered wife was once a cloak-and-dagger woman. Now the nefarious Timekeeper (Jeremy Piven) has hatched a plot for world domination, prompting the OSS to summon Marissa back to active duty. When Rebecca and Cecil discover their stepmother's tightly guarded secret, they realize they might be the only hope for getting her out of a tight jam and foiling the Timekeeper's evil plan. Fortunately Carmen (Alexa Vega) and Juni Cortez (Daryl Sabara) are more than willing to teach Rebecca and Cecil the tricks of the trade, and in no time the two bickering ten-year-olds are wielding hi-tech gadgets and heading out on their first assignment.~Jason Buchanan",
    "studio": "Lionsgate",
    "theatricalReleaseDate": "2011",
    "description": null,
    "manufacturer": null,
    "modelNumber": "26091006",
    "images": [
      {
        "rel": "Front_Original",
        "unitOfMeasure": "pixels",
        "width": "778",
        "height": "1000",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_so.jpg"
      },
      {
        "rel": "Front_Thumbnail",
        "unitOfMeasure": "pixels",
        "width": "54",
        "height": "69",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_s.gif"
      },
      {
        "rel": "Front_Detail",
        "unitOfMeasure": "pixels",
        "width": "105",
        "height": "135",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sc.jpg"
      },
      {
        "rel": "Front_Standard",
        "unitOfMeasure": "pixels",
        "width": "389",
        "height": "500",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sa.jpg"
      },
      {
        "rel": "Front_Large",
        "unitOfMeasure": "pixels",
        "width": "124",
        "height": "160",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg"
      },
      {
        "rel": "Front_Medium",
        "unitOfMeasure": "pixels",
        "width": "70",
        "height": "90",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006fp.gif"
      }
    ],
    "image": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sa.jpg",
    "largeFrontImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg",
    "mediumImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006fp.gif",
    "thumbnailImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_s.gif",
    "largeImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg",
    "alternateViewsImage": null,
    "angleImage": null,
    "backViewImage": null,
    "energyGuideImage": null,
    "leftViewImage": null,
    "accessoriesImage": null,
    "remoteControlImage": null,
    "rightViewImage": null,
    "topViewImage": null,
    "albumTitle": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray]",
    "artistName": null,
    "artistId": null,
    "originalReleaseDate": null,
    "parentalAdvisory": null,
    "mediaCount": null,
    "monoStereo": null,
    "studioLive": null,
    "condition": "New",
    "inStorePickup": false,
    "friendsAndFamilyPickup": true,
    "homeDelivery": false,
    "quantityLimit": 3,
    "fulfilledBy": "BestBuy.com",
    "members": [],
    "bundledIn": [],
    "albumLabel": null,
    "genre": "Action and Adventure",
    "color": null,
    "depth": null,
    "dollarSavings": 0,
    "percentSavings": "0.0",
    "tradeInValue": "",
    "height": null,
    "orderable": "Available",
    "weight": null,
    "shippingWeight": 0.25,
    "width": null,
    "warrantyLabor": null,
    "warrantyParts": null,
    "softwareAge": null,
    "softwareGrade": null,
    "platform": null,
    "numberOfPlayers": null,
    "softwareNumberOfPlayers": null,
    "esrbRating": null,
    "longDescription": null,
    "includedItemList": [],
    "marketplace": false,
    "listingId": null,
    "sellerId": null,
    "shippingRestrictions": null,
    "proposition65WarningMessage": null,
    "proposition65WarningType": "05"
  }
]
```

### Get a Single Product
`GET /api/products/:id`

#### Sample Response
Status `200 OK`

```json
{
    "id": 1000006,
    "score": null,
    "productId": 2266824,
    "name": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray] [2011]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2011-04-26",
    "new": false,
    "active": true,
    "lowPriceGuarantee": true,
    "activeUpdateDate": "2017-06-10T07:44:27",
    "regularPrice": 12.99,
    "salePrice": 12.99,
    "clearance": false,
    "onSale": false,
    "planPrice": null,
    "priceWithPlan": [],
    "contracts": [],
    "priceRestriction": null,
    "priceUpdateDate": "2017-02-12T08:14:07",
    "digital": false,
    "preowned": false,
    "carriers": [],
    "planFeatures": [],
    "devices": [],
    "carrierPlans": [],
    "technologyCode": null,
    "carrierModelNumber": null,
    "earlyTerminationFees": [],
    "monthlyRecurringCharge": "",
    "monthlyRecurringChargeGrandTotal": "",
    "activationCharge": "",
    "minutePrice": "",
    "planCategory": null,
    "planType": null,
    "familyIndividualCode": null,
    "validFrom": null,
    "validUntil": null,
    "carrierPlan": null,
    "outletCenter": null,
    "secondaryMarket": null,
    "frequentlyPurchasedWith": [],
    "accessories": [],
    "relatedProducts": [],
    "requiredParts": [],
    "techSupportPlans": [],
    "crossSell": [],
    "salesRankShortTerm": null,
    "salesRankMediumTerm": 29985,
    "salesRankLongTerm": 45986,
    "bestSellingRank": 42786,
    "url": "https://api.bestbuy.com/click/-/1000006/pdp",
    "spin360Url": null,
    "mobileUrl": "https://api.bestbuy.com/click/-/1000006/pdp",
    "affiliateUrl": null,
    "addToCartUrl": "https://api.bestbuy.com/click/-/1000006/cart",
    "affiliateAddToCartUrl": null,
    "linkShareAffiliateUrl": "",
    "linkShareAffiliateAddToCartUrl": "",
    "upc": "013132620237",
    "productTemplate": "Movies",
    "categoryPath": [
      {
        "id": "cat00000",
        "name": "Best Buy"
      },
      {
        "id": "abcat0600000",
        "name": "Movies & Music"
      },
      {
        "id": "cat02015",
        "name": "Movies & TV Shows"
      }
    ],
    "alternateCategories": [],
    "lists": [],
    "customerReviewCount": 77,
    "customerReviewAverage": 4.5,
    "customerTopRated": true,
    "format": "Blu-ray",
    "freeShipping": false,
    "freeShippingEligible": true,
    "inStoreAvailability": false,
    "inStoreAvailabilityText": "Store Pickup:",
    "inStoreAvailabilityUpdateDate": "2017-08-25T12:34:36",
    "itemUpdateDate": "2019-08-15T03:15:04",
    "onlineAvailability": true,
    "onlineAvailabilityText": "Backordered: Usually ships in 3-4 weeks",
    "onlineAvailabilityUpdateDate": "2019-06-12T06:20:30",
    "releaseDate": "2011-11-22",
    "shippingCost": 3.99,
    "shipping": [
      {
        "ground": 3.99,
        "secondDay": 10.79,
        "nextDay": 16.25,
        "vendorDelivery": ""
      }
    ],
    "shippingLevelsOfService": [
      {
        "serviceLevelId": 5,
        "serviceLevelName": "One Day",
        "unitShippingPrice": 16.25
      },
      {
        "serviceLevelId": 3,
        "serviceLevelName": "Two Day",
        "unitShippingPrice": 10.79
      },
      {
        "serviceLevelId": 15,
        "serviceLevelName": "Standard",
        "unitShippingPrice": 3.99
      }
    ],
    "specialOrder": false,
    "shortDescription": null,
    "class": "BLU RAY MOVIES",
    "classId": 76,
    "subclass": "CHILDRENS",
    "subclassId": 1006,
    "department": "VIDEO/COMPACT DISC",
    "departmentId": 8,
    "protectionPlanTerm": "BD-",
    "protectionPlanType": null,
    "protectionPlanLowPrice": "",
    "protectionPlanHighPrice": "",
    "buybackPlans": [],
    "protectionPlans": [],
    "protectionPlanDetails": [],
    "productFamilies": [],
    "productVariations": [],
    "aspectRatio": null,
    "screenFormat": null,
    "lengthInMinutes": 89,
    "mpaaRating": "PG",
    "plot": "A retired spy-turned-full-time homemaker attempts to stop a power-mad supervillain from taking over the planet, and gets some unexpected help from her disagreeable twin step-children in this fourth entry of writer/director Robert Rodriguez's family-friendly adventure series. It's been a long time since former OSS agent Marissa Cortez Wilson (Jessica Alba) went chasing bad guys. These days it's hard enough just to get her precocious stepkids, Rebecca (Rowan Blanchard) and Cecil (Mason Cook), to clean their rooms, and make sure her baby daughter has a full sippy cup. And despite the fact that Marissa's husband, Wilbur (Joel McHale), earns his income chasing spies on TV, he hasn't a clue that his mild-mannered wife was once a cloak-and-dagger woman. Now the nefarious Timekeeper (Jeremy Piven) has hatched a plot for world domination, prompting the OSS to summon Marissa back to active duty. When Rebecca and Cecil discover their stepmother's tightly guarded secret, they realize they might be the only hope for getting her out of a tight jam and foiling the Timekeeper's evil plan. Fortunately Carmen (Alexa Vega) and Juni Cortez (Daryl Sabara) are more than willing to teach Rebecca and Cecil the tricks of the trade, and in no time the two bickering ten-year-olds are wielding hi-tech gadgets and heading out on their first assignment.~Jason Buchanan",
    "studio": "Lionsgate",
    "theatricalReleaseDate": "2011",
    "description": null,
    "manufacturer": null,
    "modelNumber": "26091006",
    "images": [
      {
        "rel": "Front_Original",
        "unitOfMeasure": "pixels",
        "width": "778",
        "height": "1000",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_so.jpg"
      },
      {
        "rel": "Front_Thumbnail",
        "unitOfMeasure": "pixels",
        "width": "54",
        "height": "69",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_s.gif"
      },
      {
        "rel": "Front_Detail",
        "unitOfMeasure": "pixels",
        "width": "105",
        "height": "135",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sc.jpg"
      },
      {
        "rel": "Front_Standard",
        "unitOfMeasure": "pixels",
        "width": "389",
        "height": "500",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sa.jpg"
      },
      {
        "rel": "Front_Large",
        "unitOfMeasure": "pixels",
        "width": "124",
        "height": "160",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg"
      },
      {
        "rel": "Front_Medium",
        "unitOfMeasure": "pixels",
        "width": "70",
        "height": "90",
        "href": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006fp.gif"
      }
    ],
    "image": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sa.jpg",
    "largeFrontImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg",
    "mediumImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006fp.gif",
    "thumbnailImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_s.gif",
    "largeImage": "https://img.bbystatic.com/BestBuy_US/images/products/1000/1000006_sb.jpg",
    "alternateViewsImage": null,
    "angleImage": null,
    "backViewImage": null,
    "energyGuideImage": null,
    "leftViewImage": null,
    "accessoriesImage": null,
    "remoteControlImage": null,
    "rightViewImage": null,
    "topViewImage": null,
    "albumTitle": "Spy Kids: All the Time in the World [Includes Digital Copy] [Blu-ray]",
    "artistName": null,
    "artistId": null,
    "originalReleaseDate": null,
    "parentalAdvisory": null,
    "mediaCount": null,
    "monoStereo": null,
    "studioLive": null,
    "condition": "New",
    "inStorePickup": false,
    "friendsAndFamilyPickup": true,
    "homeDelivery": false,
    "quantityLimit": 3,
    "fulfilledBy": "BestBuy.com",
    "members": [],
    "bundledIn": [],
    "albumLabel": null,
    "genre": "Action and Adventure",
    "color": null,
    "depth": null,
    "dollarSavings": 0,
    "percentSavings": "0.0",
    "tradeInValue": "",
    "height": null,
    "orderable": "Available",
    "weight": null,
    "shippingWeight": 0.25,
    "width": null,
    "warrantyLabor": null,
    "warrantyParts": null,
    "softwareAge": null,
    "softwareGrade": null,
    "platform": null,
    "numberOfPlayers": null,
    "softwareNumberOfPlayers": null,
    "esrbRating": null,
    "longDescription": null,
    "includedItemList": [],
    "marketplace": false,
    "listingId": null,
    "sellerId": null,
    "shippingRestrictions": null,
    "proposition65WarningMessage": null,
    "proposition65WarningType": "05"
  }
```

### Get Product Reviews
`GET /api/products/:id/reviews`

#### Sample Response
Status `200 OK`

```json
[
  {
    "userId": 7,
    "id": 61,
    "title": "voluptatem doloribus consectetur est ut ducimus",
    "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit",
    "rating": 2
  },
  {
    "userId": 7,
    "id": 62,
    "title": "beatae enim quia vel",
    "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio",
    "rating": 1
  }
]
```

### Get Categories
`GET /api/categories`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": "abcat0010000",
    "name": "Gift Ideas",
    "active": true,
    "url": "https://www.bestbuy.com/site/electronics/gift-ideas/abcat0010000.c?id=abcat0010000&cmp=RMX-cat",
    "path": [
      {
        "id": "cat00000",
        "name": "Best Buy"
      },
      {
        "id": "abcat0010000",
        "name": "Gift Ideas"
      }
    ],
    "subCategories": [
      {
        "id": "pcmcat1496256957402",
        "name": "Top Tech Gifts"
      },
      {
        "id": "pcmcat748301108075",
        "name": "Stocking Stuffers"
      },
      {
        "id": "pcmcat1487279818011",
        "name": "Mother's Day Gift Ideas"
      },
      {
        "id": "pcmcat1487867427335",
        "name": "Father's Day Gift Ideas"
      },
      {
        "id": "pcmcat1487280226740",
        "name": "Graduation Gift Ideas"
      },
      {
        "id": "pcmcat1506957944904",
        "name": "Christmas Gift Ideas"
      },
      {
        "id": "pcmcat1540482602263",
        "name": "Housewarming Gifts"
      },
      {
        "id": "pcmcat84000050000",
        "name": "Wedding Gifts"
      },
      {
        "id": "pcmcat94300050028",
        "name": "Birthday Gifts"
      },
      {
        "id": "pcmcat84000050004",
        "name": "Baby Shower Gifts"
      },
      {
        "id": "pcmcat84000050001",
        "name": "Anniversary Gifts"
      },
      {
        "id": "pcmcat140000050037",
        "name": "Computing Made Easy"
      },
      {
        "id": "pcmcat140000050039",
        "name": "Simple GPS Navigation"
      },
      {
        "id": "pcmcat140000050040",
        "name": "Playing Video Games"
      },
      {
        "id": "pcmcat140000050041",
        "name": "Watching HDTV"
      },
      {
        "id": "pcmcat140000050042",
        "name": "Enjoying Favorite Movies"
      },
      {
        "id": "abcat0012000",
        "name": "Him"
      },
      {
        "id": "abcat0011000",
        "name": "Her"
      },
      {
        "id": "abcat0013000",
        "name": "Teens"
      },
      {
        "id": "abcat0014000",
        "name": "Kids"
      },
      {
        "id": "pcmcat84000050003",
        "name": "Graduations"
      },
      {
        "id": "abcat0020004",
        "name": "Unique Gifts"
      },
      {
        "id": "pcmcat111900050004",
        "name": "Pink and Red Gifts"
      },
      {
        "id": "abcat0020006",
        "name": "Prepaid Cards"
      },
      {
        "id": "pcmcat231900050003",
        "name": "eGift Cards"
      },
      {
        "id": "pcmcat253700050028",
        "name": "QP Test Category"
      },
      {
        "id": "pcmcat312700050000",
        "name": "Our Favorite Gift Ideas"
      },
      {
        "id": "pcmcat327600050005",
        "name": "Easter Made Easy"
      },
      {
        "id": "pcmcat327600050006",
        "name": "Brunches Made Easy"
      },
      {
        "id": "pcmcat332300050004",
        "name": "Grads Gifting"
      },
      {
        "id": "pcmcat748300579354",
        "name": "Family Gift Ideas"
      },
      {
        "id": "pcmcat1503499229560",
        "name": "Explore Geek Gift Ideas"
      },
      {
        "id": "pcmcat1505508677933",
        "name": "Explore Top Tech Gift Ideas"
      },
      {
        "id": "pcmcat1505761915169",
        "name": "Explore Great Tech Gifts for Him"
      },
      {
        "id": "pcmcat1507834419293",
        "name": "Employee Picks"
      },
      {
        "id": "pcmcat1508430906956",
        "name": "Employee Picks"
      },
      {
        "id": "pcmcat140000050035",
        "name": "Capturing Photos & Videos"
      },
      {
        "id": "pcmcat140000050036",
        "name": "Listening to Digital Music"
      },
      {
        "id": "pcmcat342800050014",
        "name": "Wedding Registry"
      }
    ]
  }
]
```

### Get a Single Category
`GET /api/categories/:id`

#### Sample Response
Status `200 OK`

```json
{
  "id": "abcat0010000",
  "name": "Gift Ideas",
  "active": true,
  "url": "https://www.bestbuy.com/site/electronics/gift-ideas/abcat0010000.c?id=abcat0010000&cmp=RMX-cat",
  "path": [
    {
      "id": "cat00000",
      "name": "Best Buy"
    },
    {
      "id": "abcat0010000",
      "name": "Gift Ideas"
    }
  ],
  "subCategories": [
    {
      "id": "pcmcat1496256957402",
      "name": "Top Tech Gifts"
    },
    {
      "id": "pcmcat748301108075",
      "name": "Stocking Stuffers"
    }
  ]
}
```

### Get Most Viewed Products
`GET /api/products/most-viewed`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": 1006587,
    "score": null,
    "productId": 2119491,
    "name": "The Losers [DVD] [2010]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2009-12-22",
    ...
  }
]
```

### Get Most Viewed Products by Category
`GET /api/categories/:id/most-viewed`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": 1006587,
    "score": null,
    "productId": 2119491,
    "name": "The Losers [DVD] [2010]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2009-12-22",
    ...
  }
]
```

### Get Subcategories
`GET /api/categories/:id/sub`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": "pcmcat1496256957402",
    "name": "Top Tech Gifts"
  },
  {
    "id": "pcmcat748301108075",
    "name": "Stocking Stuffers"
  }
]
```

### Get Deals of the Day
`GET /api/products/deal-of-the-day`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": 1006587,
    "score": null,
    "productId": 2119491,
    "name": "The Losers [DVD] [2010]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2009-12-22",
    ...
  }
]
```

### Get Deals of the Day by Category
`GET /api/categories/:id/deal-of-the-day`

#### Sample Response
Status `200 OK`

```json
[
  {
    "id": 1006587,
    "score": null,
    "productId": 2119491,
    "name": "The Losers [DVD] [2010]",
    "source": "bestbuy",
    "type": "Movie",
    "startDate": "2009-12-22",
    ...
  }
]
```
