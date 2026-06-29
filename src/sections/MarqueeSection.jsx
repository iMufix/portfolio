import { useRef, useEffect, useState } from "react";

const gifUrls = [
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FR6.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT1.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT2.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT3.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT4.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT5.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT6.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT7.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT8.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT9.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT10.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT11.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT12.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT13.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT14.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT15.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT16.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT17.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT18.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT19.gif?w=2880&q=80",
  "https://d3eak5s4v8j82a.cloudfront.net/motionsites/templates%2F5b3d2fa728e263e1b10655f4a26c6b3c7ae5919b9d3f4fb9db958b2e400a%2FT20.gif?w=2880&q=80",
];

const row1 = gifUrls.slice(0, 11);
const row2 = gifUrls.slice(11);

function double(array) {
  return [...array, ...array];
}

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 - moves RIGHT (infinite scroll) */}
        <div className="overflow-hidden">
          <div className="carousel-track flex gap-3 w-max">
            {double(row1).map((url, i) => (
              <img
                key={i}
                src={url}
                alt=""
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - moves LEFT (infinite scroll reverse) */}
        <div className="overflow-hidden">
          <div className="carousel-track-reverse flex gap-3 w-max">
            {double(row2).map((url, i) => (
              <img
                key={i}
                src={url}
                alt=""
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
