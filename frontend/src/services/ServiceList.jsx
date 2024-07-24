import React from "react";
import ServiceCard from "./ServiceCard";
import { Col} from "reactstrap"; 
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [

    {
        imgUrl: weatherImg,
        title : "Calculate Weather",
        desc :"we focus on weather safety of devotees by examining weather",
    },
    {
        imgUrl: guideImg,
        title : "Best Tour Guide",
        desc :"We also help devotees by teerth sahayak who will guide your teerth yatra",
    },
    {
        imgUrl: customizationImg,
        title : "Customization",
        desc :"We customize tour plans according to your needs",
    },
];

const ServiceList = () => {
  return (
  <>
  {servicesData.map((item,index) =>(
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
  </>
  );
};

export default ServiceList;
