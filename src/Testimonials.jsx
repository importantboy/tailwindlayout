import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Lee",
    role: "CTO",
    company: "TechNova",
    review:
      "CloudFlex helped us reduce our server costs by 40%. The auto-scaling feature is a game-changer.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogo: "/logos/technova.png",
  },
  {
    id: 2,
    name: "Rajesh Sharma",
    role: "DevOps Engineer",
    company: "CloudKart",
    review:
      "The dashboard is so clean and simple. I can track all my deployments in real-time without hassle.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    companyLogo: "/logos/cloudkart.png",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "SoftHub",
    review:
      "We moved our entire infrastructure to CloudFlex within a week. Amazing support team and smooth migration.",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    companyLogo: "/logos/softhub.png",
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "Founder",
    company: "AppBoost",
    review:
      "Best cloud platform for startups. The free plan itself gives enough features to get started quickly.",
    rating: 3.5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    companyLogo: "/logos/appboost.png",
  },
];

export default function Testimonials() {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
     const handleResize = () => setwidth(window.innerWidth);
     window.addEventListener("resize", handleResize);

    handleResize();

    () => { 
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: width > 1280 ? 4 : width > 720 ? 3 : width > 480 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease",
    arrows: false,
  };

  return (
    <div className="px-2 md:px-6 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-center capitalize my-3">
        testimonials
      </h2>
      <div className="slider-container w-full px-2 md:my-10 lg:px-10">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="p-4 ">
              {" "}
              {/* Key moved here */}
              <div className="shadow-sm/40 rounded-md min-h-[300px] p-4 flex flex-col items-center min-w-2xs">
                <div className="avatar-img-container">
                  <img
                    src={item.avatar}
                    className="w-20 h-20 rounded-full shadow-md"
                    alt={item.name}
                  />
                </div>
                <div className="user-name text-lg capitalize font-semibold mt-4">
                  <p>{item.name}</p>
                </div>
                <div className="user-company-details">
                  <p className="inline-block">{item.role}</p>
                  <p className="inline-block"> ( {" " + item.company} )</p>
                </div>
                <div className="rating-container">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />
                </div>
                <div className="review text-center my-3">
                  <i className="text-center">"{item.review}"</i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
