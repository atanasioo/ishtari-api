const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

const products = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Laptop",
    description: "Powerful laptop with high-end specifications.",
    price: "$999.99",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Smartphone",
    description: "Feature-rich smartphone with the latest technology.",
    price: "$699.99",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Headphones",
    description:
      "Noise-canceling headphones for an immersive audio experience.",
    price: "$129.99",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Camera",
    description: "Professional-grade camera for stunning photography.",
    price: "$1499.99",
  },
  {
    id: 5,
    imageUrl:
      "https://images.pexels.com/photos/4436355/pexels-photo-4436355.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Fitness Tracker",
    description:
      "Track your fitness and stay healthy with this smart fitness tracker.",
    price: "$79.99",
  },
  {
    id: 6,
    imageUrl:
      "https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Gaming Console",
    description:
      "High-performance gaming console for an immersive gaming experience.",
    price: "$499.99",
  },
  {
    id: 7,
    imageUrl:
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Wireless Earbuds",
    description:
      "True wireless earbuds with crystal-clear audio and long battery life.",
    price: "$89.99",
  },
  {
    id: 8,
    imageUrl:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Smart Watch",
    description:
      "Stay connected and monitor your health with this advanced smartwatch.",
    price: "$199.99",
  },
  {
    id: 9,
    imageUrl:
      "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "4K Smart TV",
    description:
      "Ultra HD smart TV with a sleek design and smart connectivity features.",
    price: "$799.99",
  },
  {
    id: 10,
    imageUrl:
      "https://images.pexels.com/photos/4107248/pexels-photo-4107248.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Robot Vacuum Cleaner",
    description:
      "Efficient robot vacuum cleaner for hands-free floor cleaning.",
    price: "$249.99",
  },
  {
    id: 11,
    imageUrl:
      "https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Wireless Charging Pad",
    description: "Fast and convenient wireless charging pad for your devices.",
    price: "$39.99",
  },
  {
    id: 12,
    imageUrl:
      "https://images.pexels.com/photos/374067/pexels-photo-374067.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Portable Bluetooth Speaker",
    description: "Compact and powerful Bluetooth speaker for on-the-go music.",
    price: "$59.99",
  },
  {
    id: 13,
    imageUrl:
      "https://images.pexels.com/photos/3803856/pexels-photo-3803856.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Electric Scooter",
    description: "Foldable electric scooter for eco-friendly urban commuting.",
    price: "$299.99",
  },
  {
    id: 14,
    imageUrl:
      "https://images.pexels.com/photos/301792/pexels-photo-301792.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Digital Drawing Tablet",
    description:
      "Professional-grade drawing tablet for digital artists and designers.",
    price: "$179.99",
  },
  {
    id: 15,
    imageUrl:
      "https://media.istockphoto.com/id/1249397645/photo/man-uses-a-mobile-phone-with-smart-home-app-in-modern-living-room.jpg?s=1024x1024&w=is&k=20&c=xjmUR54O5uX-WFI5DlMsiGXb9iMTvKjjFON32sH02bY=",
    name: "Smart Thermostat",
    description:
      "Energy-efficient smart thermostat for intelligent climate control.",
    price: "$129.99",
  },
  {
    id: 16,
    imageUrl:
      "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Drones with HD Camera",
    description:
      "Capture stunning aerial footage with this high-definition camera drone.",
    price: "$349.99",
  },
  {
    id: 17,
    imageUrl:
      "https://images.pexels.com/photos/6271318/pexels-photo-6271318.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Coffee Maker with Grinder",
    description:
      "Start your day with freshly ground coffee using this smart coffee maker.",
    price: "$129.99",
  },
  {
    id: 18,
    imageUrl:
      "https://images.pexels.com/photos/18485666/pexels-photo-18485666/free-photo-of-smart-home-devices.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Home Security Camera System",
    description:
      "Monitor your home with a state-of-the-art security camera system.",
    price: "$199.99",
  },
  {
    id: 19,
    imageUrl:
      "https://images.pexels.com/photos/6932751/pexels-photo-6932751.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Wireless Gaming Mouse",
    description:
      "Precision gaming mouse with customizable buttons for a competitive edge.",
    price: "$49.99",
  },
  {
    id: 20,
    imageUrl:
      "https://media.istockphoto.com/id/1566841260/photo/solar-cell-street-lamp-with-long-arm-standing-against-blue-sky-day.webp?b=1&s=612x612&w=0&k=20&c=e0qT2z4HEPXG9ZAlW_Cvz6yIht8T7DRq14-Pfa_0BM8=",
    name: "Solar-Powered Outdoor Lights",
    description:
      "Illuminate your outdoor space with these eco-friendly solar-powered lights.",
    price: "$29.99",
  },
  {
    id: 21,
    imageUrl:
      "https://images.pexels.com/photos/4428992/pexels-photo-4428992.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bluetooth Fitness Tracker",
    description:
      "Track your workouts, heart rate, and sleep with this sleek fitness tracker.",
    price: "$69.99",
  },
  {
    id: 22,
    imageUrl:
      "https://media.istockphoto.com/id/1273489826/photo/internet-of-things-concept-young-woman-using-smartphone-in-kitchen-she-controls-her-kitchen.webp?b=1&s=612x612&w=0&k=20&c=vj0PqjyWIaUMD9WNyDYaTtdb4JP054xttSjgM_btucs=",
    name: "Smart Kitchen Scale",
    description:
      "Precision kitchen scale with a digital display for accurate cooking measurements.",
    price: "$34.99",
  },
  {
    id: 23,
    imageUrl:
      "https://images.pexels.com/photos/4389743/pexels-photo-4389743.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Virtual Reality Headset",
    description:
      "Immerse yourself in virtual worlds with this advanced VR headset.",
    price: "$299.99",
  },
  {
    id: 24,
    imageUrl:
      "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Wireless Charging Desk Lamp",
    description:
      "Modern desk lamp with a built-in wireless charger for added convenience.",
    price: "$79.99",
  },
  {
    id: 25,
    imageUrl:
      "https://images.pexels.com/photos/3479178/pexels-photo-3479178.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bluetooth Noise-Canceling Headphones",
    description:
      "Enjoy superior audio quality and block out distractions with these headphones.",
    price: "$129.99",
  },
  {
    id: 26,
    imageUrl:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Compact Espresso Machine",
    description:
      "Brew barista-quality espresso at home with this compact espresso machine.",
    price: "$149.99",
  },
  {
    id: 27,
    imageUrl:
      "https://images.pexels.com/photos/4491445/pexels-photo-4491445.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Smart Doorbell Camera",
    description:
      "Monitor your front door with this intelligent doorbell camera system.",
    price: "$199.99",
  },
  {
    id: 28,
    imageUrl:
      "https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg?auto=compress&cs=tinysrgb&w=600",
    name: "Wireless Charging Car Mount",
    description:
      "Charge your phone on the go with this wireless charging car mount.",
    price: "$49.99",
  },
  {
    id: 29,
    imageUrl:
      "https://media.istockphoto.com/id/1255152298/photo/little-boy-hiking-with-mother.webp?b=1&s=612x612&w=0&k=20&c=NbD17bS8BsvysTxiuEDII6nCFCGeOP4Pf7Frmz_ZAOo=",
    name: "Solar-Powered Backpack",
    description:
      "Charge your devices on the move with this solar-powered backpack.",
    price: "$79.99",
  },
  {
    id: 30,
    imageUrl:
      "https://media.istockphoto.com/id/1308085664/photo/girl-and-robot-holding-flower-pot.webp?b=1&s=612x612&w=0&k=20&c=Sgq2AyIIhZI_0qjDyvcV4VGLbSxV-p-Zax3Wap_9vKo=",
    name: "Smart Plant Pot",
    description:
      "Take care of your plants with this smart pot that monitors soil moisture and light levels.",
    price: "$39.99",
  },
  {
    id: 31,
    imageUrl:
      "https://media.istockphoto.com/id/1340560385/photo/torre-del-gerro-tower-in-denia-spain.webp?b=1&s=612x612&w=0&k=20&c=OQgVobuNDcypWoX_5pqgM-EdPT420Q76KYhFFVV5Ksg=",
    name: "Foldable Electric Bike",
    description:
      "Convenient and eco-friendly transportation with this foldable electric bike.",
    price: "$499.99",
  },
  {
    id: 32,
    imageUrl:
      "https://media.istockphoto.com/id/1325947414/photo/close-up-on-an-automated-security-system-at-a-house.webp?b=1&s=612x612&w=0&k=20&c=ofUtLSpcCBhzm4Wi9N9BtvzwpVTvasHkHawwQd83HF0=",
    name: "Smart Home Security System",
    description:
      "Protect your home with a comprehensive smart home security system.",
    price: "$299.99",
  },
  {
    id: 33,
    imageUrl:
      "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bluetooth Karaoke Microphone",
    description:
      "Turn any gathering into a karaoke party with this wireless microphone.",
    price: "$59.99",
  },
  {
    id: 34,
    imageUrl:
      "https://images.pexels.com/photos/7869443/pexels-photo-7869443.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Augmented Reality Glasses",
    description:
      "Experience augmented reality with these futuristic smart glasses.",
    price: "$399.99",
  },
  {
    id: 35,
    imageUrl:
      "https://media.istockphoto.com/id/1455480376/photo/hot-air-fryer.webp?b=1&s=612x612&w=0&k=20&c=xDLDMYesxRTbayGmNaL6kE9pyYPb5SRiofww-3HHNoA=",
    name: "Digital Air Fryer",
    description:
      "Enjoy crispy and healthy meals with this advanced digital air fryer.",
    price: "$89.99",
  },
  {
    id: 36,
    imageUrl:
      "https://media.istockphoto.com/id/1385463482/photo/automatic-pet-food-dispenser-smart-cat-feeder.webp?b=1&s=612x612&w=0&k=20&c=Ej-nvoQ5T0dHoB3LWRQFlGIjMX-j0Swv5cMXPeNWayU=",
    name: "Smart Pet Feeder",
    description:
      "Automate feeding your pets with this intelligent and programmable pet feeder.",
    price: "$79.99",
  },
  {
    id: 37,
    imageUrl:
      "https://media.istockphoto.com/id/1392993347/photo/close-up-on-woman-hand-holding-reusable-bottle.webp?b=1&s=612x612&w=0&k=20&c=WAdXlHkEB81rxQ3dYsMDtrnVXTZMePKTXHvkz7-WoLU=",
    name: "Fitness Smart Water Bottle",
    description:
      "Stay hydrated and track your water intake with this fitness-oriented smart water bottle.",
    price: "$24.99",
  },
  {
    id: 38,
    imageUrl:
      "https://media.istockphoto.com/id/1192618690/photo/blank-wireless-charging-mouse-pad-with-computer-mouse-for-branding-or-design-presentation-3d.webp?b=1&s=612x612&w=0&k=20&c=6fbgjkI8itqIFpQQH2PDLHYpV08P7hrhcMbmjbL8LIw=",
    name: "Wireless Charging Mouse Pad",
    description:
      "Charge your phone while working with this multifunctional wireless charging mouse pad.",
    price: "$34.99",
  },
  {
    id: 39,
    imageUrl:
      "https://media.istockphoto.com/id/1098382614/photo/woman-watching-sports-training-online-on-laptop.webp?b=1&s=612x612&w=0&k=20&c=iJ6HeZMSGGVkk1Jiye6Qm0qsewzxSGHo9uG6BWD6cz8=",
    name: "Digital Yoga Mat",
    description:
      "Enhance your yoga practice with a digital yoga mat that provides real-time feedback.",
    price: "$129.99",
  },
  {
    id: 40,
    imageUrl:
      "https://images.pexels.com/photos/19149826/pexels-photo-19149826/free-photo-of-3d-print-project.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mini 3D Printer",
    description:
      "Unleash your creativity with this compact and easy-to-use mini 3D printer.",
    price: "$199.99",
  },
  {
    id: 41,
    imageUrl:
      "https://media.istockphoto.com/id/994778014/photo/smart-refrigerator-concept.webp?b=1&s=612x612&w=0&k=20&c=KQXDFXpeTz2Vb7PjupQyx1vf7Bo9GphdqZ76G8CBGGw=",
    name: "Smart Refrigerator",
    description:
      "A high-tech refrigerator with a touch screen, camera, and smart food management features.",
    price: "$1499.99",
  },
  {
    id: 42,
    imageUrl:
      "https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "360-Degree Security Camera",
    description:
      "Monitor your entire space with this 360-degree rotating security camera.",
    price: "$159.99",
  },
  {
    id: 43,
    imageUrl:
      "https://images.pexels.com/photos/6001192/pexels-photo-6001192.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Smart Mirror",
    description:
      "A mirror that displays weather, news, and your fitness progress, doubling as a smart home hub.",
    price: "$299.99",
  },
  {
    id: 44,
    imageUrl:
      "https://images.pexels.com/photos/3921705/pexels-photo-3921705.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Portable Power Bank",
    description:
      "A compact and powerful power bank to keep your devices charged on the go.",
    price: "$29.99",
  },
  {
    id: 45,
    imageUrl:
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Ergonomic Office Chair",
    description:
      "Stay comfortable during long work hours with this ergonomic and adjustable office chair.",
    price: "$179.99",
  },
  {
    id: 46,
    imageUrl:
      "https://media.istockphoto.com/id/1385982565/photo/smart-speaker-on-the-table-in-the-living-room.webp?b=1&s=612x612&w=0&k=20&c=n7IzGF9RGca68K8pMYxbmzF6xEdhF1w3Ia711sLqOSA=",
    name: "Digital Voice Assistant Speaker",
    description:
      "A smart speaker with a built-in digital voice assistant for hands-free control of your smart home.",
    price: "$89.99",
  },
  {
    id: 47,
    imageUrl:
      "https://media.istockphoto.com/id/1446961668/photo/close-up-woman-hand-pressing-down-on-electronic-access-control-at-door-house.webp?b=1&s=612x612&w=0&k=20&c=K-oI4YD5Xaj24dMzeW1PlFN_TTbkL2rlSdSEToc8tNs=",
    name: "Smart Door Lock",
    description:
      "Enhance home security with this keyless and app-controlled smart door lock.",
    price: "$129.99",
  },
  {
    id: 48,
    imageUrl:
      "https://media.istockphoto.com/id/1060572374/photo/global-business-network-connection-around-digital-globe-internet-of-things-concept.webp?b=1&s=612x612&w=0&k=20&c=PU1nPs1WmP5pZ4XYCc5pF4GLX8O8bTIsDQbZ_BAD2r8=",
    name: "Augmented Reality Globe",
    description:
      "Explore the world in augmented reality with this interactive and educational globe.",
    price: "$79.99",
  },
  {
    id: 49,
    imageUrl:
      "https://media.istockphoto.com/id/1256577681/photo/wireless-charging-on-a-black-slate-with-a-book-pencil-smartphone-glasses-and-a-plant.webp?b=1&s=612x612&w=0&k=20&c=nxzZaXf6Eli9kxDVYMXyK3bH8k1esr4fid2LgzWZ5vE=",
    name: "Wireless Charging Desk Organizer",
    description:
      "Keep your workspace tidy and charge your devices with this wireless charging desk organizer.",
    price: "$49.99",
  },
  {
    id: 50,
    imageUrl:
      "https://media.istockphoto.com/id/1357667538/photo/woman-using-innovative-smart-tech-for-greenhouse-plant-management.webp?b=1&s=612x612&w=0&k=20&c=6j7Lr1L6M5Txd5oTpPPN8VH0VTGYutvZp4D0Rvdcj1E=",
    name: "Smart Garden Kit",
    description:
      "Grow your own herbs and plants indoors with this smart and automated garden kit.",
    price: "$69.99",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

// app.post("/api/products", (req, res) => {
//   const newProduct = {
//     id: products.length + 1,
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//   };
//   products.push(newProduct);
//   res.json(newProduct);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
