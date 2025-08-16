import { FaServer } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
import { FaCloudscale } from "react-icons/fa";

function Features() {
  return (
    <div className="h-auto w-full p-4 ">
      <h1 className="text-center text-3xl font-semibold my-10 md:text-5xl capitalize">features</h1>
      {/* card-container  */}
      <div className="card-container flex flex-col gap-2 md:flex-row md:[&>.card]:w-1/4 md:[&>.card]:max-w-1/3 sm:[&>.card]:grow-1 sm:flex-wrap justify-center">
        {/* card items  */}
        {/* card-1 */}
        <div className="card w-full rounded-md min-h-60 shadow-md ">
          <div className="card-logo text-center my-5">
            <p className="text-4xl font-bold bg-emerald-800 inline-block p-5 rounded-full text-emerald-50">
              <FaServer />
            </p>
          </div>
          <h2 className="card-title font-semibold text-2xl px-2 text-center">
            Lightening fast servers
          </h2>
          <p className="text-md p-2 text-center">
            Experience ultra-low latency and 2x faster load times.
          </p>
        </div>
        {/* card-2 */}
        <div className="card w-full rounded-md min-h-60 shadow-md ">
          <div className="card-logo text-center my-5">
            <p className="text-4xl font-bold bg-emerald-800 inline-block p-5 rounded-full text-emerald-50">
              <IoIosTime />
            </p>
          </div>
          <h2 className="card-title font-semibold text-2xl px-2 text-center">
            {" "}
            24/7 Support
          </h2>
          <p className="text-md p-2 text-center">
            Our team is here to help you anytime, anywhere.
          </p>
        </div>
        {/* card-3 */}
        <div className="card w-full rounded-md min-h-60 shadow-md ">
          <div className="card-logo text-center my-5">
            <p className="text-4xl font-bold bg-emerald-800 inline-block p-5 rounded-full text-emerald-50">
              <FaChartLine />
            </p>
          </div>
          <h2 className="card-title font-semibold text-2xl px-2 text-center">
            {" "}
            99.99% Uptime Guarantee
          </h2>
          <p className="text-md p-2 text-center">
            Stay online all the time without interruptions.
          </p>
        </div>
        {/* card-4 */}
        <div className="card w-full rounded-md min-h-60 shadow-md ">
          <div className="card-logo text-center my-5">
            <p className="text-4xl font-bold bg-emerald-800 inline-block p-5 rounded-full text-emerald-50">
              <FaCloudscale />
            </p>
          </div>
          <h2 className="card-title font-semibold text-2xl px-2 text-center">
            {" "}
            Easy Scalability
          </h2>
          <p className="text-md p-2 text-center">
            Upgrade your resources anytime as your business grows.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
