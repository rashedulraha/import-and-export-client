import React from "react";
import Img1 from "../../assets/advisor-1.webp";
import Img2 from "../../assets/advisor-2.webp";
import Img3 from "../../assets/advisor-3.webp";
import Img4 from "../../assets/advisor-4.webp";
import { MdAttachEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const OurTeam = () => {
  return (
    <div className="container mx-auto text-center py-12">
      <h4 className="text-sm font-semibold text-base-content/70">OUR TEAM</h4>
      <h1 className="text-3xl font-bold mb-8 text-primary">MEET OUR ADVISOR</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-base-100 shadow-xl border border-primary">
          <figure className="px-5 pt-5">
            <img
              src={Img1}
              alt="John Doe"
              className="rounded-xl w-full aspect-square object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title text-primary">John Doe</h2>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <MdAttachEmail className="text-primary" />
              john@example.com
            </p>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <CiPhone className="text-primary" />
              +880 1234-567890
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-primary">
          <figure className="px-5 pt-5">
            <img
              src={Img2}
              alt="Sarah Smith"
              className="rounded-xl w-full aspect-square object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title text-primary">Sarah Smith</h2>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <MdAttachEmail className="text-primary" />
              sarah@example.com
            </p>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <CiPhone className="text-primary" />
              +880 9876-543210
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-primary">
          <figure className="px-5 pt-5">
            <img
              src={Img3}
              alt="Michael Lee"
              className="rounded-xl w-full aspect-square object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title text-primary">Michael Lee</h2>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <MdAttachEmail className="text-primary" />
              michael@example.com
            </p>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <CiPhone className="text-primary" />
              +880 1111-222233
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-primary">
          <figure className="px-5 pt-5">
            <img
              src={Img4}
              alt="Emily Brown"
              className="rounded-xl w-full aspect-square object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title text-primary">Emily Brown</h2>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <MdAttachEmail className="text-primary" />
              emily@example.com
            </p>
            <p className="text-base-content/70 text-sm flex items-center gap-2">
              <CiPhone className="text-primary" />
              +880 4444-555566
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
