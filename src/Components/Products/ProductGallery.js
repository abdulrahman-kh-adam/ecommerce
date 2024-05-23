import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import phone from "../../images/mobile.png";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";

const ProductGallery = () => {
  const items = [
    {
      original: `${phone}`,
    },
    {
      original: `${phone}`,
    },
    {
      original: `${phone}`,
    },
  ];
  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
      <ImageGallery
        items={items}
        defaultImage={phone}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
