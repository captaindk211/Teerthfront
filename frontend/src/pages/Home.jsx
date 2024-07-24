import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/tirupatiherojpg.jpg";
import heroImg02 from "../assets/images/kailash hero.jpg";
import heroVideo from "../assets/images/aarti.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/tourist sankh.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Teerth Before Death & Life Cycle"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Teerth opens the door to attaining
                  <span className="highlight"> मोक्ष्</span>
                </h1>
                <p>
                  Moksha (मोक्ष) is a core concept in Hinduism, representing
                  liberation from the cycle of rebirth (samsara). It's the
                  ultimate goal, surpassing desires, dharma (duty), and even
                  material wealth. There are various paths to achieve moksha,
                  including righteous living, devotion to a deity (bhakti), and
                  self-knowledge.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box hero_video-box mt-4">
                <video src={heroVideo} alt="" controls muted autoPlay loop />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What are our सेवा </h5>
              <h2 className="services_title">We offer our best सेवये</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our featured Teerths</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  It is very importent for the devotee to pay attention to the
                  darshan.
                  <br />
                  KRISHNAM VANDE JAGAT GURUM
                </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5 ">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful Dham Yatras</h6>
                </div>

                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular Devotees</h6>
                </div>

                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                {" "}
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />

            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial_title"> What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};
export default Home;
