import type { ITestimonialSelected } from "../../types";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Image from "next/image";
import avatar from "../../assets/hero/avatar.png";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";

export function Testimonial({ testimonial, onReadMore }: ITestimonialSelected) {
  const { toggleTestimonialModal } = useContext(AppContext);

  const onClickReadMore = () => {
    toggleTestimonialModal();
    onReadMore();
  };

  return (
    <div className="flex justify-center items-center w-screen max-w-6xl mx-auto mr-4">
      <div className="flex">
        <figure className="relative overflow-hidden w-64">
          <span className="absolute top-2 left-2 text-5xl text-amber-600 z-20">“</span>
          <span className="absolute bottom-28 right-2 text-5xl text-amber-600 z-20">„</span>
          <div className="relative -mb-10 h-44 rounded-lg bg-stone-800 text-sm text-white pt-7 pb-12 px-7">
            <p className="line-clamp-3">{testimonial.text}</p>
            <button onClick={onClickReadMore} className="text-base mt-1 text-amber-600">
              <PiDotsThreeOutlineDuotone className="w-7 h-7" />
            </button>
          </div>
          <div className="relative flex justify-end items-center h-20">
            <Image
              src={avatar}
              height={80}
              width={80}
              alt="avatar"
              className="absolute right-1/2 rounded-full mr-4 z-10"
            />
            <div className="flex flex-col justify-center items-start w-1/2">
              <p className="uppercase text-amber-600 font-bold">{testimonial.name}</p>
              <span className="text-sm text-stone-700 font-bold">{testimonial.country}</span>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
