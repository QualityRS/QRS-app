import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

export const photos = [
  {
    source: "https://live.staticflickr.com/65535/51987065508_d384769e66_k.jpg",
    src: "https://live.staticflickr.com/65535/51987065508_d384769e66_k.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo Before",
  },
  {
    source: "https://live.staticflickr.com/65535/51985996242_6fa8e4afcb_b.jpg",
    src: "https://live.staticflickr.com/65535/51985996242_6fa8e4afcb_b.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo 2",
  },
  {
    source: "https://live.staticflickr.com/65535/51987065438_8322962779_b.jpg",
    src: "https://live.staticflickr.com/65535/51987065438_8322962779_b.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo 3",
  },
  {
    source: "https://live.staticflickr.com/65535/51987291624_2addd86160_k.jpg",
    src: "https://live.staticflickr.com/65535/51987291624_2addd86160_k.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo After",
  },
  {
    source: "https://live.staticflickr.com/65535/51987064328_cf93f80afa_b.jpg",
    src: "https://live.staticflickr.com/65535/51987064328_cf93f80afa_b.jpg",
    width: 3,
    height: 4,
    title: "Gutted Floor",
  },
  {
    source: "https://live.staticflickr.com/65535/51985995002_c53e633465_b.jpg",
    src: "https://live.staticflickr.com/65535/51985995002_c53e633465_b.jpg",
    width: 3,
    height: 4,
    title: "Subfloor install",
  },
  {
    source: "https://live.staticflickr.com/65535/51987288619_6a700ca0b7_b.jpg",
    src: "https://live.staticflickr.com/65535/51987288619_6a700ca0b7_b.jpg",
    width: 3,
    height: 4,
    title: "Stairs Removal Before",
  },
  {
    source: "https://live.staticflickr.com/65535/51987554825_ebb329ff9f_b.jpg",
    src: "https://live.staticflickr.com/65535/51987554825_ebb329ff9f_b.jpg",
    width: 3,
    height: 4,
    title: "Stairs Removal After",
  },
  {
    source: "https://live.staticflickr.com/65535/51986998136_713604ca7d_b.jpg",
    src: "https://live.staticflickr.com/65535/51986998136_713604ca7d_b.jpg",
    width: 3,
    height: 4,
    title: "Deck Removal Before",
  },
  {
    source: "https://live.staticflickr.com/65535/51987062673_6dff6eaa40_b.jpg",
    src: "https://live.staticflickr.com/65535/51987062673_6dff6eaa40_b.jpg",
    width: 3,
    height: 4,
    title: "Deck Removal After",
  },
  {
    source: "https://live.staticflickr.com/65535/51987287154_ab0180e33e_b.jpg",
    src: "https://live.staticflickr.com/65535/51987287154_ab0180e33e_b.jpg",
    width: 3,
    height: 4,
    title: "Bathroom Before",
  },
  {
    source: "https://live.staticflickr.com/65535/51987554275_ef4692cb97_b.jpg",
    src: "https://live.staticflickr.com/65535/51987554275_ef4692cb97_b.jpg",
    width: 3,
    height: 4,
    title: "Bathroom After",
  },
  {
    source: "https://live.staticflickr.com/65535/51987284904_8989680f18_b.jpg",
    src: "https://live.staticflickr.com/65535/51987284904_8989680f18_b.jpg",
    width: 3,
    height: 4,
    title: "Addition Before",
  },
  {
    source: "https://live.staticflickr.com/65535/51987059378_28d8eb1d75_b.jpg",
    src: "https://live.staticflickr.com/65535/51987059378_28d8eb1d75_b.jpg",
    width: 3,
    height: 4,
    title: "Addition After",
  },
  {
    source: "https://live.staticflickr.com/65535/51987552785_295b1de287_b.jpg",
    src: "https://live.staticflickr.com/65535/51987552785_295b1de287_b.jpg",
    width: 3,
    height: 4,
    title: "Commercial",
  },
];

function Picture() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <Gallery
        direction={"column"}
        margin={40}
        photos={photos}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Picture;
