import React, { useRef } from "react";
import "./Testimonials.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Slide from "../Slide/Slide";

const Testimonials = () => {
  const slider = useRef();

  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <Slide
              profile={user_1}
              userName="William Jackson"
              address="Edusity, USA"
              comment="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            />
          </li>
          <li>
            <Slide
              profile={user_2}
              userName="William Jackson"
              address="Edusity, USA"
              comment="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            />
          </li>
          <li>
            <Slide
              profile={user_3}
              userName="William Jackson"
              address="Edusity, USA"
              comment="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            />
          </li>
          <li>
            <Slide
              profile={user_4}
              userName="William Jackson"
              address="Edusity, USA"
              comment="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
