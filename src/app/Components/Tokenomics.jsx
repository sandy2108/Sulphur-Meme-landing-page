'use client';

import { motion } from 'framer-motion';


import { Tokeninfo } from '@/Constants';
import { TitleText ,TypingText } from './CustomText';
import NewFeatures from './NewFeatures';
import { planetVariants,slideIn ,staggerContainer ,fadeIn } from '@/utils';
import TokenomicsChart from './TokenomicsChart';

const Tokenomics = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 bg-black min-h-screen blackbg relative z-10`}>
      <div className='items-center justify-center max-w-[1340px] mx-auto'>
       <TypingText title="Tokenomics" textStyles="text-center font-normal text-[#ffffbf] text-2xl" />

       <TitleText title={<>ALLOCATION</>} textStyles="text-center text-white" />
       </div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
    > 
      
     
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="Tokenomics" textStyles="text-2xl text-[#ffffbf]"/>
        <TitleText title={<>Allocation</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {Tokeninfo.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-1 flex justify-center items-center max-h-[600px]`}
      > 
     
       <TokenomicsChart/>

      </motion.div>
    </motion.div>
  </section>
);

export default Tokenomics;