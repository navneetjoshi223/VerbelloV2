import React from "react";
import Navbar from "../common/Navbar/Navbar";
import IntroCard from "../IntroCard/IntroCard";
import "./Home.css";
//import Testimonials from "../Testimonials/Testimonials";
//import franceFlag from '../../assets/images/french/france.jpeg';

const Home = () => {
  const offerings = [
    { language: "French", img: "./images/flags/france.jpeg" },
    { language: "German", img: "./images/flags/germany.jpeg" },
    { language: "Spanish", img: "./images/flags/spain.jpeg" },
    { language: "Portuguese", img: "./images/flags/portugal.jpeg" },
    { language: "Italian", img: "./images/flags/italy.jpeg" },
  ];

  return (
    <>
      <Navbar />
      <IntroCard />
      <div class="card languages-offered m-3 p-3">
        <div class="card-body">
          <h3 class="card-title custom-header pb-4">Languages we offer</h3>
          <div className="card-group">
            {offerings.map((offering, index) => (
              <div className="card card-language border-0 p-3" key={index}>
                <img
                  src={offering.img}
                  className="card-img-top country"
                  alt={offering.language}
                />
                <div className="card-body">
                  <h5 className="card-title text-center language-name">{offering.language}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
