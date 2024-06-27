import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";

const ProductGallery = ({ images, thumb }) => {
  const items = images
    ? images.map((image) => {
        return {
          original: `${process.env.REACT_APP_GENERAL_URL}${image.attributes.url}`,
        };
      })
    : [];

  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
      <ImageGallery
        items={items}
        defaultImage={`${process.env.REACT_APP_GENERAL_URL}${thumb}`}
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
