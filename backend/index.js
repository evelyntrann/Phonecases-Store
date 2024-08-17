const express = require("express");
const app = express();
const phonecases = [
{
    id: 1,
    name: "Starbucks Case",
    category: "Iphone",
    price: "35",
    description: "Show off your love with Starbucks-theme phonecase.",
    imageUrl:
      "https://images.unsplash.com/photo-1618177941022-b08438d79175?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Teddybear Case",
    category: "Iphone",
    price: "40",
    description: "Cuddle up with our adorable Teddybear phonecase.",
    imageUrl:
      "https://images.unsplash.com/photo-1618177940986-0e9c1745bc0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Bluecharacter Case",
    category: "Iphone",
    price: "40",
    description:
      "This bluecharacter case will become your bestfriend everyday!",
    imageUrl:
      "https://images.unsplash.com/photo-1618177941039-7f979e659d1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Glory Case",
    category: "Iphone",
    price: "55",
    description:
      "Elevate your style with glory, elegant, and minimalist design!",
    imageUrl:
      "https://images.unsplash.com/photo-1618177941067-3f26d7c6eecf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Ugliness Case",
    category: "Iphone and Android",
    price: "27",
    description: "This unique design challenge the norm and edgy look.",
    imageUrl:
      "https://images.unsplash.com/photo-1618177941007-9775fe6f4f74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Ombre Case",
    category: "Iphone and Android",
    price: "75",
    description: "Make yourself special with this ombre phonecase!",
    imageUrl:
      "https://images.unsplash.com/photo-1709178295038-acbeec786fcf?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Gentle Case",
    category: "Iphone",
    price: "45",
    description: "This phonecase is unisex, suitable for both men and women.",
    imageUrl:
      "https://images.unsplash.com/photo-1708430633848-3dbc3cbcc46f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYXNlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
app.get("/v1/phonecases", (req, res) => {
    res.status(200).json(phonecases);
})
app.listen("8080", () =>{
    console.log("Server is running....");
})