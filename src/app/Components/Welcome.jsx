"use client"

import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="relative w-full min-h-screen bg-black z-10">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="items-center pt-10 md:pt-20 relative z-20">
          <div className="flex items-center py-5">
            <h1 className="font-bold text-3xl md:text-6xl max-w-[680px] text-white">
              Welcome to the{" "}
              <span className="text-[#ffffbf]">SULPHUR Community</span>
            </h1>
          </div>
          <div className="max-w-6xl my-5">
            {/* ...Your paragraphs of text */}
           
            <p className="text-white font-normal text-md md:text-xl">
            The time has come, the revolt is now. We the shibas are to make $SHIB a real community token. We took over $CALCIUM, now it is our duty to drink $CAL on the moon. Some of $shib army has decided we will use $SULFUR to burn $CAL, our parabolic trends will not be ignored. Drink $CALCIUM to trend upward frens! We will trend upward in honor or Ryoshi.
            </p>
            <p className="my-5 text-[#ffffbf] font-bold text-md md:text-xl">
            MESSAGE FROM $CAL army !


            </p>
            <p className="my-5 text-white font-normal text-md md:text-xl">
           

We are quite aware of the fall short promises of Shiboshi, $LEASH, Shibarium.  Failed experiments that we put our trust, hopes, and money into. Buying into the shib hype, just to be let down over and over. Now in Jeettember, the $SHIB deployer messes up with $CAL (Calcium). Tons of chads suffering from Hundreds of thousands Ls. The trust fading, transparency withering away - our baby is being rekt. The army deserves better.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Welcome;
