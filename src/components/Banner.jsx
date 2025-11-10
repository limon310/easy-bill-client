// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const Banner = () => {
//   const bannersSliders = [
//     // { id: 1, image: "https://i.ibb.co/m4Wj6gV/banner1.jpg" },
//     { id:  },
//     { id: 2, image: "https://i.ibb.co/7bX2LtT/electricity.jpg" },
//     { id: 3, image: "https://i.ibb.co/dj1Jksd/banner3.jpg" },
//   ];

//   return (
//     <Swiper
//       modules={[Autoplay, Pagination]}
//       autoplay={{ delay: 3000 }}
//       pagination={{ clickable: true }}
//       loop={true}
//       className="w-full h-[400px]"
//     >
//       {bannersSliders.map((banner) => (
//         <SwiperSlide key={banner.id}>
//           <img
//             src={banner.image}
//             alt="banner"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Banner;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const cards = [
    {
      id: 1,
      title: "Manage your utility bills in one place!",
      description: "Pay your monthly bill in seconds.",
      image: "https://i.postimg.cc/zfS5dhJ9/ilustrator1.png",
    },
    {
      id: 2,
      title: "Easy, Fast, and Secure Bill Payments.",
      description: "Track and pay bills without delays.",
      image: "https://i.postimg.cc/wxtNrxm0/illustration2.jpg",
    },
    {
      id: 3,
      title: "Track all your monthly bills hassle-free",
      description: "Stay updated on your monthly bills.",
      image: "https://i.postimg.cc/J4zzFPvr/10145140.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full mx-auto"
    >
      {cards.map(card => (
        <SwiperSlide key={card.id}>
          <div className="bg-gray-400 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mt-10 mb-20">
            <img
              src={card.image}
              alt={card.title}
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg w-fit">
                Pay Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;

