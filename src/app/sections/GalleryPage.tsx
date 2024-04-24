import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { images, CustomImage } from "../data/images";
import Heading from "../components/Heading";
import GalleryBox from "../components/GalleryBox";

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  const [open, setOpen] = useState(false);
  const handleClick = (index: number, item: CustomImage) => {
    setIndex(index);
    setOpen(true);
  };
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      {open && (
        <GalleryBox currentIndex={index} images={images} setOpen={setOpen} />
      )}
      <Heading title="Gallery" />
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
    </div>
  );
}
