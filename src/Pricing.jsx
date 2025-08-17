import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const details = [
  {
    title: "Free / Start Plan (For Begineers)",
    pricing: "0",
    features: [
      "1GB cloud storage",
      "1 Project",
      "Basic analytics",
      "Email support",
    ],
    not_available_feature: ["no custom domain"],
    btn_text: "start for free",
  },
  {
    title: "Pro plan (Poplular choice )",
    pricing: "19",
    features: [
      "upto 10 project",
      "50GB storage",
      "Advance anayltics dashboard",
      "priority email + chat support",
    ],
    not_available_feature: "",
    btn_text: "Get Pro",
  },
  {
    title: "Business Plan",
    pricing: "49",
    features: [
      "unlimited Projects",
      "200GB storage",
      "Team collaboration(upto 10 memebers)",
      "Advanced monitoring tools",
    ],
    not_available_feature: "",
    btn_text: "Start Business Plan",
  },
];

function Pricing() {
  return (
    <div className="">
      <h2 className="text-center my-5 text-3xl font-semibold md:text-5xl">
        Pricing
      </h2>
      {/* pricing section container area  */}
      <div className="pricing-section-container flex flex-col gap-5 p-4 md:p-6 md:flex-row md:[&>.pricing-card]:h-full justify-evenly md:[&>.pricing-card:nth-child(2)]:grow-2">

        {details.map((item, key) => {
          return (
            <div
              key={key}
              className="min-h-[50vh] pricing-card justify-between md:grow-1 border-2 border-emerald-800 flex flex-col rounded-md"
            >
              <h3 className="text-center text-xl font-semibold my-2 capitalize md:text-2xl">
                {/* Free / start plan (for beginners) */}
                {item.title}
              </h3>
              <div className="mx-6 [&>p]:text-md md:[&>p]:text-xl">
                <h4 className="text-lg capitalize my-2 font-medium">
                  ${item.pricing}/month
                </h4>
                {item.features.map((feature, key) => {
                  return (
                    <p key={key}>
                      <FaCheck className="inline-block text-green-800" />{" "}
                      {feature}
                    </p>
                  );
                })}
                {item.not_available_feature.length <= 0 ? (
                  ""
                ) : (
                  <p>
                    <MdOutlineClose className="inline-block text-red-600  text-xl" />{" "}
                    No custom domain
                  </p>
                )}
              </div>

              <a
                href="#"
                className="cta-btn py-3 px-2 bg-emerald-700 m-4 rounded-md text-center text-emerald-50 text-lg font-medium tracking-wider capitalize cursor-pointer hover:bg-emrald"
              >
                {item.btn_text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
