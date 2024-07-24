import React from "react";
import galleryImages from "./galleryImages";
import galleryImg04 from "../../assets/images/a-galleryv.mp4";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImagesGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
              className="masonry_img"
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
          <div className="hero_img-box hero_video-box mt-4">
            <video src={galleryImg04} alt="" controls muted autoPlay loop />
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default MasonryImagesGallery;
