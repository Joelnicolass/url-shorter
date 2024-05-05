import React from 'react';

interface Props {
  text?: {
    line1: string;
    line2: string[];
    line3: string;
  };
  colors?: string[];
}

const Advertisement = ({
  text = {
    line1: 'Make',
    line2: ['React', 'Tailwind', 'Everything'],
    line3: 'AweSoMe!',
  },
  colors = ['blue', 'green', 'red'],
  ...props
}) => {
  return (
    <div
      className="
      text-center 
      font-bold 
      uppercase 
      flex 
      flex-col 
      justify-around
      "
      {...props}
    >
      <span>{text.line1}</span>
      <div className="overflow-hidden h-14">
        {text.line2.map((line, index) =>
          index === 0 ? (
            <div key={index} className="animate-slide">
              <span
                style={{
                  background: colors[index],
                }}
                className={`inline-block text-white py-1 px-3 mt-1 mb-11`}
              >
                {line}
              </span>
            </div>
          ) : (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <span
                style={{
                  background: colors[index],
                }}
                className={`inline-block text-white py-1 px-3 mb-11`}
              >
                {line}
              </span>
            </div>
          )
        )}
      </div>
      <span>{text.line3}</span>
    </div>
  );
};

export default Advertisement;
