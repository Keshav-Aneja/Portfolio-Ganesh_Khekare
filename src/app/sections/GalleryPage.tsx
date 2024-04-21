import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { images, CustomImage } from "../data/images";
import Heading from "../components/Heading";
export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Heading title="Gallery" />
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
    </div>
  );
}
