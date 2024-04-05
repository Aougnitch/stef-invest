"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "A Traders Knowledge",
      description:
        "A successful investor is one who is able to outperform the market consistently. The way to outperform the market is through superior insight and rigorous analysis. I will not bother describing the intricacies of my investment strategy, you are here to make money, this is not a course!",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          
        </div>
      ),
    },
    {
      title: "The Opportunity",
      description:
        "We are in the late stages of the current business cycle. Soft landing expectations are consensus, greed is overwhelming, irrational exuberance and speculation is prevalent and yet interest rates are at 50-year highs with a stable $95 bn per month of quantitative tightening. ",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Strategy",
      description:
        "The strategy is rather simple. Buy low, Sell high. Do you really think we will see a material breakdown in inflation, without a recession, after the Fed printed $4tn dollars in one year? Do you really think that yields will uninvert, after seeing a negative 1% on the 2yr 10yr curve, without a recession? Do you really think the economy will not feel the long and variable lags of monetary policy after a hike from 0 to 5.5% in just over a year? ",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    // {
    //   title: "Running out of content",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //       Running out of content
    //     </div>
    //   ),
    // },
  ];
  export function StickyScrollRevealDemo() {
    return (
      <div className="">
        <StickyScroll content={content}/>
      </div>
    );
  }
