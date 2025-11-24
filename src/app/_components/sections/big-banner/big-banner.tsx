"use client";
import { BigBannerProps } from "./big-banner.types";
import NewsLetter from "./newsletter/newsletter";

const BigBanner: React.FC<BigBannerProps> = ({ title, content, img, url }) => {
  return (
    <div className="big-banner-wrapper">
      <div className="big-banner-container">
        <div className="big-banner-content-box">
          <h3 className="big-banner-title">
            Subscribe &amp; Get
            <span className="px-2 text-shop-gray-1000">10%</span>
            Discount
          </h3>
          <p className="big-banner-subtitle">
            Get E-mail updates about our latest shop and
            <span className="font-lg-bold">special offers.</span>
          </p>
        </div>
        <div>
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
