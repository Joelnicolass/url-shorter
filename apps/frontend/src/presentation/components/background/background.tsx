import React from 'react';
import { Sparkles } from '../sparkles/sparkles';

const Background = () => {
  return (
    <>
      <div className="absolute -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#9eadff,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7976c5ec] after:bg-zinc-900 z-0">
        <Sparkles
          density={1200}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      </div>
    </>
  );
};

export default Background;
