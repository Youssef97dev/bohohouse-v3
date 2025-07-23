"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1744887329/dar_ouzguita/tvlvixptyfyphszl1j8n.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761727/dar_ouzguita/boho_house_30_l0b3mz.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761727/dar_ouzguita/boho_house_29_lam1yu.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761719/dar_ouzguita/boho_house_25_ub1qei.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761718/dar_ouzguita/boho_house_24_ysnwlh.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761718/dar_ouzguita/boho_house_26_jvbpwq.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761706/dar_ouzguita/boho_house_21_uubt7h.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761701/dar_ouzguita/boho_house_17_wi96y2.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1744887328/dar_ouzguita/vwomrw6ojwgb5gcukz1h.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1741688749/dar_ouzguita/y19ka66shutlhgjvcj0d.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1741688748/dar_ouzguita/n2hsl8qslezhsedhvrl8.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1741688330/dar_ouzguita/andtxygyvufimtuje3bo.jpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1741688324/dar_ouzguita/md5intok0vpd0awlgq1t.jpg",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm w-full h-full"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full  py-5 px-4 ">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {images.map((image, index) => (
          <Link href={image.src} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage
                src={`${image.src}`}
                alt={`Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla`}
              />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
