import { image } from "../../assets/image/image"

export const properties = [
  {
    id: 1,
    "title": "King Abdullah Economic City",
    "location": "Durrat Al Arous - Fun Beach Chalet",
    "price": {
      "original": 3000,
      "discounted": 2500,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.8,
      "reviews": 50
    },
    "attributes": {
      "guests": 1,
      "area": 1000,
      "bedrooms": 4,
      "bathrooms": 3,
      "parkingSpaces": 2
    },
    "discount": {
      "percentage": "50%",
      "label": "50% Discount",
      "validUntil": "2024-12-31"
    },
    "image_url": image.property1,
    "gallery": [
     
      image.property1,
      image.property3,
      image.property2, 
      image.property1,
      image.property3,
      image.property2,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A beautiful beach chalet located in Durrat Al Arous offering a scenic view and luxurious stay.",
    "availability": {
      "availableFrom": "2024-10-15",
      "availableTo": "2025-03-31"
    },
    "cancellationPolicy": "Free cancellation within 48 hours.",
    "owner": {
      "name": "John Doe",
      "contact": "+966 123456789",
      "email": "john.doe@example.com"
    },
    "terms": {
      "checkIn": "3:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "2 nights",
      "maxStay": "30 nights"
    },
    coordinates: {
      "latitude": 21.694025,
      "longitude": 39.103656
    }
  },
  {
    id: 2,
    "title": "Jeddah Corniche Resort",
    "location": "North Obhur - Luxury Villa",
    "price": {
      "original": 4500,
      "discounted": 4000,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.9,
      "reviews": 120
    },
    "attributes": {
      "guests": 2,
      "area": 1200,
      "bedrooms": 5,
      "bathrooms": 4,
      "parkingSpaces": 3
    },
    "discount": {
      "percentage": "20%",
      "label": "20% Discount",
      "validUntil": "2025-01-15"
    },
    "image_url": image.property2,
    "gallery": [
      image.property3,
      image.property1,
      image.property2,
    ],
    "is_favorited": false,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A luxury villa located in Jeddah Corniche offering magnificent sea views and premium amenities.",
    "availability": {
      "availableFrom": "2024-11-01",
      "availableTo": "2025-05-31"
    },
    "cancellationPolicy": "Free cancellation within 72 hours.",
    "owner": {
      "name": "Sarah Ahmed",
      "contact": "+966 987654321",
      "email": "sarah.ahmed@example.com"
    },
    "terms": {
      "checkIn": "2:00 PM",
      "checkOut": "11:00 AM",
      "minStay": "3 nights",
      "maxStay": "45 nights"
    },
    "coordinates": {
      "latitude": 21.612356,
      "longitude": 39.086978
    }
  },
  {
    id: 3,
    "title": "Riyadh Luxury Apartment",
    "location": "Al Olaya District - City Center Penthouse",
    "price": {
      "original": 2200,
      "discounted": 2000,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.7,
      "reviews": 80
    },
    "attributes": {
      "guests": 3,
      "area": 900,
      "bedrooms": 3,
      "bathrooms": 2,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "10%",
      "label": "10% Discount",
      "validUntil": "2024-11-30"
    },
    "image_url": image.property3,
    "gallery": [
      image.property2,
      image.property3,
      image.property1,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A stylish penthouse in the heart of Riyadh, perfect for both short and long stays.",
    "availability": {
      "availableFrom": "2024-09-20",
      "availableTo": "2024-12-20"
    },
    "cancellationPolicy": "Free cancellation within 24 hours.",
    "owner": {
      "name": "Mohammed Bin Ali",
      "contact": "+966 1122334455",
      "email": "mohammed.ali@example.com"
    },
    "terms": {
      "checkIn": "4:00 PM",
      "checkOut": "12:00 PM",
      "minStay": "1 night",
      "maxStay": "60 nights"
    },
    "coordinates": {
      "latitude": 24.711445,
      "longitude": 46.674233
    }
  },
  {
    id: 4,
    "title": "Mecca Family Retreat",
    "location": "Ajyad - Holy Mosque View",
    "price": {
      "original": 5000,
      "discounted": 4500,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.9,
      "reviews": 200
    },
    "attributes": {
      "guests": 6,
      "area": 1500,
      "bedrooms": 6,
      "bathrooms": 5,
      "parkingSpaces": 4
    },
    "discount": {
      "percentage": "15%",
      "label": "15% Discount",
      "validUntil": "2025-02-28"
    },
    "image_url": image.property1,
    "gallery": [
     image.property1,
     image.property3,
     image.property2,
    ],
    "is_favorited": false,
    "amenities": [
      "WiFi",
      "Kitchen",
      "Washing machine"
    ],
    "description": "A spacious family retreat located near the Holy Mosque in Mecca, ideal for religious tourists.",
    "availability": {
      "availableFrom": "2024-12-01",
      "availableTo": "2025-04-15"
    },
    "cancellationPolicy": "Free cancellation within 72 hours.",
    "owner": {
      "name": "Fatima Khalid",
      "contact": "+966 5566778899",
      "email": "fatima.khalid@example.com"
    },
    "terms": {
      "checkIn": "1:00 PM",
      "checkOut": "11:00 AM",
      "minStay": "4 nights",
      "maxStay": "90 nights"
    },
    "coordinates": {
      "latitude": 21.422510,
      "longitude": 39.826168
    }
  },
  {
    id: 5,
    "title": "Al Khobar Beachfront Condo",
    "location": "Al Corniche - Premium Sea View",
    "price": {
      "original": 3200,
      "discounted": 2800,
      "currency": "SAR",
      "per": "Night"
    },
    "rating": {
      "stars": 4.6,
      "reviews": 60
    },
    "attributes": {
      "guests": 2,
      "area": 800,
      "bedrooms": 2,
      "bathrooms": 2,
      "parkingSpaces": 1
    },
    "discount": {
      "percentage": "12%",
      "label": "12% Discount",
      "validUntil": "2024-12-31"
    },
    "image_url": image.property2,
    "gallery": [
      image.property2,
      image.property1,
     image.property3,
    ],
    "is_favorited": true,
    "amenities": [
      "wifi",
      "pool",
      "gym",
      "kitchen",
      "petsAllowed",
      "airConditioning"
    ],
    "description": "A luxurious beachfront condo in Al Khobar, offering panoramic sea views and modern amenities.",
    "availability": {
      "availableFrom": "2024-10-01",
      "availableTo": "2025-01-31"
    },
    "cancellationPolicy": "Free cancellation within 48 hours.",
    "owner": {
      "name": "Khalid Al-Mansoori",
      "contact": "+966 4455667788",
      "email": "khalid.mansoori@example.com"
    },
    "terms": {
      "checkIn": "3:00 PM",
      "checkOut": "11:00 AM",
      "minStay": "2 nights",
      "maxStay": "30 nights"
    },
    "coordinates": {
      "latitude": 26.217333,
      "longitude": 50.197036
    }
  }
]
