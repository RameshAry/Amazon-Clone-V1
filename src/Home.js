import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./amazon_home.jpg" alt="" />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="./lean.jpeg"
            rating={3}
          />
          <Product
            title="Lollipop - Smart Baby Monitor with True Crying Detection AU/UK_Plug (Blue)"
            price={245.0}
            image="./shop.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Reolink Indoor 4MP Super HD Security Home Camera for Baby Monitor/Pet Camera, Dual-Band 2.4GHz/5GHz Wireless Camera, Pan and Tilt, Cloud Storage, Motion Alerts, Night Vision and Remote Viewing | E1 Pro"
            price={64.59}
            image="./Reolink.jpg"
            rating={4}
          />
          <Product
            title="Lenovo IdeaPad S540, Intel Core i7-10510U, 15.6 Inch FHD AG Screen, 8GB RAM, 256GB SSD, Backlit KB, Win 10 Home, Mineral Grey, 81NG001KAU"
            price={1299.0}
            image="./laptop.jpg"
            rating={5}
          />

          <Product
            title="Webcam HD 1080p Web Camera, USB PC Computer Webcam with Microphone, Laptop Desktop Full HD Camera Video Webcam 110 Degree Widescreen, Pro Streaming Webcam for Recording, Calling, Conferencing, Gaming"
            price={39.99}
            image="./camera.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Caixun EC43S1UA,43 inch(108cm) UHD Smart Android TV, HDR, Android 9.0, Google Assistant(Voice control), Dolby Audio, Screen share, Netflix, Prime Video, Youtube, Bluetooth, WiFi, Triple Tuner, HDMI, USB；"
            price={489.99}
            image="./tv.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
