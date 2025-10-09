function tecno(){
alert("📱 Tecno Pop 6 Go- Display:  6.52 inches HD+ display -> a resolution  1600 x 720 pixels-   Processor: Octa-core processor    RAM: 1GB  Storage: 16GB internal storage (expandable via microSD card)   Camera: Dual rear camera setup  a 13MP primary sensor and a secondary sensor, 5MP front camera Battery:  4000mAh battery capacity   Operating System: Android 11 Go Edition         Other features: Fingerprint sensor, face unlock, dualSIM support");
}
function cup(){
  alert("Beautiful portable plastic party utensil sets")
}
function Iphone(){
  alert("*Design and Display*- Display Size: 6.3 inches- Display Type: OLED with 120Hz ProMotion technology- Resolution: 2622 x 1206 pixels- Glass Protection: Ceramic Shield 2- Colors: Black, White, Sage, Lavender, Mist Blue- Dimensions: 5.89 x 2.81 x 0.31 inches- Weight: 177 grams*Performance*- Chipset: Apple A19- Processor: Hexa-core- GPU: Apple 5-core GPU- RAM: 8GB*Storage*- Internal Storage: 512GB- Storage Expansion: Not supported*Camera*- Rear Camera: Dual camera setup with 48MP Wide lens and 48MP Ultra Wide lens- Front Camera: 18MP with Center Stage- Video Recording: 4K Dolby Vision at 60fps*Battery*- Battery Capacity: 3692mAh- Fast Charging: Up to 50% charge in 20 minutes with 40W adapter- Wireless Charging: Qi2 and MagSafe support up to 25W*Other Features*- Face ID biometric authentication- IP68 rating for water and dust resistance- Wi-Fi 7 and Bluetooth 6.0 support- iOS 26 operating system- Emergency SOS via satellite- Crash Detection feature-");
}
function cloth(){
  alert("Swagy Designer up and down outfit");
}
function air(){
  alert("Airpod A3t--Best wireless Airpod(TWS) can reach 150meters can pass through Objects 1m thick __Battery:1000mAH with a massive 8 hours playback time");
}
function fan(){
  alert("Wireless rechargeable minifan with inbuilt battery that can run 6 hours (minimum) non-stop");
}
function blend(){
  alert("2-liter electric all purpose blender 55W");
}
function cook(){
  alert("small portable electric cooker superfast and light-weight wuth auto-off when food is ready ");
}
function toy(){
  alert("Children toy car");
}
function vase(){
  alert("Sleek flower vase with flower suitable for home or office ");
}
function guitar(){
  alert("electric guitar with good sound quality");
}
function plate(){
  alert("Complete set cups and plate");
}
function tv(){
  alert("15.6 inch Display TV ..ProductName: Pyle....MADE IN CHINA")
}
function s25(){
  alert("The Samsung Galaxy S25 Ultra is a high-end smartphone with impressive specs. Here are some key features:- *Display*   - Size: 6.9 inches - Type: Dynamic AMOLED 2X- Resolution: 3120 x 1440 pixels- Refresh Rate: 120Hz- *Performance* - Processor: Qualcomm Snapdragon 8 Elite- RAM: 12GB or 16GB (region-dependent)- Storage: 256GB, 512GB, or 1TB- *Camera*- Rear: Quad camera setup with 200MP main lens, 50MP ultra-wide lens, 10MP telephoto lens, and 50MP periscope telephoto lens- Front: 12MP selfie camera- *Battery*- Capacity: 5000mAh- Fast Charging: 45W- Wireless Charging: 15W- *Other Features*- IP68 rating for water and dust resistance- S Pen support- Fingerprint sensor- Android 15 ")
}
function lap(){
  alert("Unleash your creativity and productivity with this sleek Dell laptop, featuring a stunning 15.6-inch Full HD display, powerful Intel Core i7 processor, and 16GB of DDR4 RAM. With a durable design and long-lasting battery life, this laptop is perfect for work, play, or anything in between. Plus, with Dell's innovative cooling system, you can push your productivity to the limit without overheating. Get ready to take your mobile productivity to new heights!");
  }
  
let cartCount = 0;
let cartTotal = 0;

function add1(item, price) {
  cartCount++;
  cartTotal += price;

  document.getElementById("cartCount").innerText = cartCount;
  document.getElementById("cartTotal").innerText = cartTotal;
  localStorage.setItem("cartCount",cartCount);
localStorage.setItem("cartTotal",cartTotal);

  alert(`${item} added to cart!`);
}
let count = 0
let price = 0
function ok(){
   
  count ++
  price += 46000
  document.getElementById("byy").innerHTML= "Tecno pop 6 go: " + count + "{ ₦" + price +" }";
  localStorage.setItem("price",price)
  localStorage.setItem("count", count)
};
let count2 = 0;
let price2 = 0
function ok2(){
   price2 += 6000
  count2 ++
  document.getElementById("byy2").innerHTML= "plastic party utensil set: " + count2 + "{ ₦" +price2 +" }";;
  localStorage.setItem("price2",price2)
  localStorage.setItem("count2", count2)
}
let count3 = 0;
let price3 = 0
function ok3(){
   price3 +=2200000
  count3 ++
  document.getElementById("byy3").innerHTML= "Iphone 17: " + count3 + "{ ₦" + price3 +" }";;
  localStorage.setItem("price3",price3)
  localStorage.setItem("count3", count3)
}
let count4 = 0;
let price4 = 0
function ok4(){
   price4 += 18000
  count4 ++
  document.getElementById("byy4").innerHTML= "swagy up and down: " + count4 + "{ ₦" + price4 +" }";;
}
let count5 = 0;
let price5 = 0
function ok5(){
   price5 += 15000
  count5 ++
  document.getElementById("byy5").innerHTML= "Airpod A3t: " + count5  + "{ ₦" + price5 +" }";;;
}
let count6 = 0;
let price6 = 0;
function ok6(){
   price6 += 25000
  count6 ++
  document.getElementById("byy6").innerHTML= "portable rechargeable minifan: " + count6  + "{ ₦" + price6 +" }";;;
}
let count7 = 0;
let price7 = 0;
function ok7(){
   price7 += 75000
  count7 ++
  document.getElementById("byy7").innerHTML= "electric blender: " + count7  + "{ ₦" + price7 +" }";;;
}
let count8 = 0;
let price8 = 0;
function ok8(){
   price8 += 45000
  count8 ++
  document.getElementById("byy8").innerHTML= "electric cooker: " + count8  + "{ ₦" + price8 +" }";;;
}
let count9 = 0;
let price9 = 0;
function ok9(){
   price9 += 40000
  count9 ++
  document.getElementById("byy9").innerHTML= "Children toy car: " + count9  + "{ ₦" + price9 +" }";;;
}
let count10 = 0;
price10 = 0;
function ok10(){
   price10 += 20000
  count10 ++
  document.getElementById("byy10").innerHTML= "flower vase: " + count10  + "{ ₦" + price10 +" }";;;
}
let count11 = 0;
price11 = 0
function ok11(){
   price11 += 60000
  count11 ++
  document.getElementById("byy11").innerHTML= "electric guitar: " + count11  + "{ ₦" + price11 +" }";;;
}
let count12 = 0;
price12 = 0
function ok12(){
   price12 +=40000
  count12 ++
  document.getElementById("byy12").innerHTML= "Complete set cups and plates: " + count12  + "{ ₦" + price12 +" }";;;
}
let count13 = 0;
price13 = 0;
function ok13(){
   price13 += 120000
  count13 ++
  document.getElementById("byy13").innerHTML= "15.6-inch LCD TV: " + count13  + "{ ₦" + price13 +" }";;;
}
let count14 = 0;
price14 = 0;
function ok14(){
   price14 += 2600000
  count14 ++
  document.getElementById("byy14").innerHTML= "Samsung S25 Ultra: " + count14  + "{ ₦" + price14 +" }";;;
}
let count15 = 0;
price15 = 0;
function ok15(){
   price15 += 500000
  count15 ++
  document.getElementById("byy15").innerHTML= "HP Laptop: " + count15  + "{ ₦" + price15 +" }";;;
}
function checkout(){
  if (cartCount===0){
    alert("first add to cart");
  
    return;
  };
  
  
  cartCount = 0;
  cartTotal = 0
  count1 = 0
  count2 = 0
  count3 = 0
  count4 = 0
  count5 = 0
  count6 = 0
  count7 = 0
  count8 = 0
  count9 = 0
  count10 = 0
  count11 = 0
  count12 = 0
  count13 = 0
  count14 = 0
  count15 = 0
  price1 = 0
  price2 = 0
  price3 = 0
  price4 = 0
  price5 = 0
  price6 = 0
  price7 = 0
  price8 = 0
  price9 = 0
  price10 = 0
  price11 = 0
  price12 = 0
  price13 = 0
  price14 = 0
  price15 = 0
  
  alert("checkout successful order has been placed")
  document.getElementById("cartCount").innerHTML= cartCount;
  document.getElementById("cartTotal").innerHTML= cartTotal;
  document.getElementById("byy15").innerHTML= ""
  document.getElementById("byy14").innerHTML= ""
  document.getElementById("byy13").innerHTML= ""
  document.getElementById("byy12").innerHTML= ""
  document.getElementById("byy11").innerHTML= ""
  document.getElementById("byy10").innerHTML= ""
  document.getElementById("byy9").innerHTML= ""
  document.getElementById("byy8").innerHTML= ""
  document.getElementById("byy7").innerHTML= ""
  document.getElementById("byy6").innerHTML= ""
  document.getElementById("byy5").innerHTML= ""
  document.getElementById("byy4").innerHTML= ""
  document.getElementById("byy3").innerHTML= ""
  document.getElementById("byy2").innerHTML= ""
  document.getElementById("byy").innerHTML= ""

};
