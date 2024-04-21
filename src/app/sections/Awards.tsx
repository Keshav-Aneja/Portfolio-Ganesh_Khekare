import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Table from "../components/Table";
const Awards = () => {
  return (
    <div className="w-full h-full font-poppins">
      <Heading title={"Awards & Membership"} />
      <div className="w-[80%]">
        Dive into a wealth of recognition and community engagement in the Awards
        & Memberships section. Celebrating achievements and accolades earned,
        alongside affiliations with esteemed societies and communities, this
        space highlights my dedication to excellence and active participation in
        shaping professional and societal landscapes.
      </div>
      <Subheading title="Awards/ Achievements" />
      <div className="publication-details w-[80%]">
        <ul>
          <li>
            UGC NET exam qualified with 98.15 percentile dated 31st December
            2019.
          </li>
          <li>
            Got the IEI Young Engineers Award in recognition of my contributions
            to the field of Computer Engineering, on the occasion of the 36th
            National Convention of Computer Engineers organized at Salem from
            16th - 17th October 2023.
          </li>
          <li>
            Got Inspirational Scientist Award at Inspirational Scientist Awards
            on Engineering, Science and Medicine by VDGood Technology Factory
            held at Visakhapatnam, India dated 20th & 21st August 2021.
          </li>
          <li>
            Best paper award winner at Technorion 2019-20 held at GHRCE, Nagpur.
          </li>
          <li>
            Winner at Badminton at Parakram 2019-20 held at GHRCE, Nagpur.
          </li>
        </ul>
      </div>
      <Subheading title="Professional Society Membership" />
      <section className="flex flex-col w-full mb-8  rounded-lg overflow-hidden">
        <div className="--headers w-full flex flex-wrap">
          <span className={"bg-primary text-white p-2 w-[40%]"}>
            Name of the Body/Academy/Society
          </span>
          <span className={"bg-primary text-white p-2 w-[20%]"}>
            Membership Number
          </span>
          <span className={"bg-primary text-white p-2 w-[20%]"}>
            Status of Membership: Lifetime / Annual
          </span>
          <span className={"bg-primary text-white p-2 w-[20%]"}>
            Member Since (Year)
          </span>
        </div>
        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            IEEE Senior Member
          </span>
          <span className="bg-background text-black p-2 w-[20%]">94977705</span>
          <span className="bg-background text-black p-2 w-[20%]">Lifetime</span>
          <span className="bg-background text-black p-2 w-[20%]">2015</span>
        </div>
        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">ACM</span>
          <span className="bg-background text-black p-2 w-[20%]">4508774</span>
          <span className="bg-background text-black p-2 w-[20%]">Annual</span>
          <span className="bg-background text-black p-2 w-[20%]">2014</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            The Institution of Engineers (India)
          </span>
          <span className="bg-background text-black p-2 w-[20%]">
            M-1743788
          </span>
          <span className="bg-background text-black p-2 w-[20%]">Lifetime</span>
          <span className="bg-background text-black p-2 w-[20%]">2021</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            ISTE Lifetime Member
          </span>
          <span className="bg-background text-black p-2 w-[20%]">LM127370</span>
          <span className="bg-background text-black p-2 w-[20%]">Lifetime</span>
          <span className="bg-background text-black p-2 w-[20%]">2019</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">IAENG</span>
          <span className="bg-background text-black p-2 w-[20%]">
            22keynote7507
          </span>
          <span className="bg-background text-black p-2 w-[20%]">Annual</span>
          <span className="bg-background text-black p-2 w-[20%]">2019</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            Institute of Research Engineers & Doctors (IRED)
          </span>
          <span className="bg-background text-black p-2 w-[20%]">
            SM10100060694
          </span>
          <span className="bg-background text-black p-2 w-[20%]">Annual</span>
          <span className="bg-background text-black p-2 w-[20%]">2019</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            Associate Member of IAOP
          </span>
          <span className="bg-background text-black p-2 w-[20%]">4577843</span>
          <span className="bg-background text-black p-2 w-[20%]">Annual</span>
          <span className="bg-background text-black p-2 w-[20%]">2019</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            Advisory Board Member & Scientific Committee Member of Institute for
            Engineering Research and Publication (IFERP)
          </span>
          <span className="bg-background text-black p-2 w-[20%]">
            PM2626827
          </span>
          <span className="bg-background text-black p-2 w-[20%]">Annual</span>
          <span className="bg-background text-black p-2 w-[20%]">2018</span>
        </div>

        <div className="--headers w-full flex flex-wrap">
          <span className="bg-background text-black p-2 w-[40%]">
            Associate Member of International Society for Development and
            Sustainability (ISDS)
          </span>
          <span className="bg-background text-black p-2 w-[20%]"></span>
          <span className="bg-background text-black p-2 w-[20%]">Lifetime</span>
          <span className="bg-background text-black p-2 w-[20%]">2021</span>
        </div>
      </section>
    </div>
  );
};

export default Awards;
