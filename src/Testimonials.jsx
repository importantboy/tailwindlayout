import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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

function Testimonials() {
  // const [rating, setRating] = useState(0);
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="px-2 md:px-6 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-center capitalize my-3">
        testimonials
      </h2>
      <div className="slider-container w-full my-10 px-10">
        <Slider {...settings}>
          {testimonials.map((item) => {
            return (
              <div className="mx-2 md:mx-5 p-2 md:p-6">
                <div
                  key={item.id}
                  className=" shadow-md/40 rounded-md min-h-[40vh] p-4 flex flex-col items-center"
                >
                  <div className="avatar-img-container">
                    <img
                      src={item.avatar}
                      className="w-20 h-20 rounded-full shadow-md"
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
                    <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                  </div>
                  <div className="review text-center my-3">
                    <i className="text-center">"{item.review}"</i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
