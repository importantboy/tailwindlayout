import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function Pricing() {
  return (
    <div className="">
      <h2 className="text-center my-5 text-3xl font-semibold md:text-5xl">
        Pricing
      </h2>
      {/* pricing section container area  */}
      <div className="pricing-section-container flex flex-col gap-5 p-4 md:p-6 md:flex-row
      md:[&>.pricing-card]:min-h-[70vh] md:[&>.pricing-card]:h-full justify-evenly">
        {/* pricing-card 1*/}
        <div className="pricing-card justify-between md:grow-1 border-2 border-emerald-800 flex flex-col rounded-md">
          <h3 className="text-center text-xl font-semibold my-2 capitalize md:text-2xl">
            Free / start plan (for beginners)
          </h3>
          <div className="mx-6 [&>p]:text-md md:[&>p]:text-xl">
            <h4 className="text-lg capitalize my-2 font-medium">$0/month</h4>
            <p>
              <FaCheck className="inline-block text-green-800" /> 1GB cloud
              storage
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> 1 Project
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> Basic
              analytics
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> Email support
            </p>
            <p>
              <MdOutlineClose className="inline-block text-red-600  text-xl" />{" "}
              No custom domain
            </p>
          </div>
          <a
            href="#"
            className="cta-btn py-3 px-2 bg-emerald-700 m-4 rounded-md text-center text-emerald-50 text-lg font-medium tracking-wider capitalize cursor-pointer"
          >
            start for free
          </a>
        </div>

        {/* pricing-card 2*/}
        <div className="pricing-card  justify-between md:grow-2 border-3 border-emerald-800 flex flex-col rounded-md">
          <h3 className="text-center text-xl font-semibold my-2 capitalize">
            pro plan (popular choice)
          </h3>
          <div className="mx-6 [&>p]:text-md">
            <h4 className="text-lg  capitalize my-2 font-medium">$19/month</h4>
            <p>
              <FaCheck className="inline-block text-green-800" /> up to 10 project
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> 50 GB storage
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> Advanced analytics dashboard
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> Priority email + chat support
            </p>
          </div>
          <a
            href="#"
            className="cta-btn py-3 px-2 bg-emerald-800 m-4 rounded-md text-center text-emerald-50 text-xl font-medium tracking-wider capitalize cursor-pointer"
          >
            Get Pro
          </a>
        </div>

        {/* pricing-card 3*/}
        <div className="pricing-card justify-between grow-1 border-2 border-emerald-800 flex flex-col rounded-md">
          <h3 className="text-center text-xl font-semibold my-2 capitalize">
            Business Plan
          </h3>
          <div className="mx-6 [&>p]:text-md">
            <h4 className="text-lg capitalize my-2 font-medium">$49/month</h4>
            <p>
              <FaCheck className="inline-block text-green-800" /> Unlimited projects
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> 200 GB storage
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> Team collaboration (up to 10 members)
            </p>
            <p>
              <FaCheck className="inline-block text-green-800" /> API access
            </p>
            <p>
              <MdOutlineClose className="inline-block text-red-600  text-xl" />{" "}
              Advanced monitoring tools
            </p>
          </div>
          <a
            href="#"
            className="cta-btn py-3 px-2 bg-emerald-700 m-4 rounded-md text-center text-emerald-50 text-lg font-medium tracking-wider capitalize cursor-pointer"
          >
            Start Business Plan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
