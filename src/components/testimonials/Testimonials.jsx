import React from 'react';
import { Quote, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Homeowner",
      content: "I used to juggle five different websites just to pay my water and power. Now I do it all while having my morning coffee. Truly life-changing simplicity!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: 2,
      name: "Priyanka Chopra",
      role: "Property Manager",
      content: "Managing utilities for 12 units was a nightmare. BillEase consolidated everything into one view. My late fees have dropped to zero.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      id: 3,
      name: "Martin Guptil",
      role: "University Student",
      content: "Finally, a bill tracker that doesn't look like an Excel sheet! It's clean, fast, and actually helps me stay within my budget.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=elena"
    },
    {
      id: 4,
      name: "Monalisa",
      role: "Entrepreneur",
      content: "The interface is so intuitive. I added all my monthly expenses in under 5 minutes. Best utility tool I've used so far.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section className="py-24 bg-base-200 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
              <CheckCircle size={14} /> Trusted by 5,000+ Users
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-content tracking-tight">
              What our <span className="text-primary italic">community</span> says
            </h2>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-3">
            <button className="nav-prev btn btn-circle btn-outline border-base-300 hover:bg-primary hover:border-primary">
              <ChevronLeft size={24} />
            </button>
            <button className="nav-next btn btn-circle btn-outline border-base-300 hover:bg-primary hover:border-primary">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.nav-prev',
            nextEl: '.nav-next',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-auto">
              <div className="h-full group p-8 bg-base-100 rounded-[2.5rem] border border-base-300 shadow-sm flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="text-base-300 opacity-50 group-hover:text-primary transition-colors duration-300" size={32} />
                  </div>

                  <p className="text-neutral-content opacity-80 text-lg leading-relaxed mb-8">
                    "{review.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-base-200">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.image} alt={review.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-content">{review.name}</h4>
                    <p className="text-xs text-neutral opacity-60 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;