
import { SpecialOffersBannerData } from "@/data/special-offers-banner-data";
import SpecialOffersBannerItem from "./special-offers-banner-item/special-offers-banner-item";




const SpecialOffersBanner = () => {
    return (
        <div className="grid w-full grid-cols-1 place-items-center gap-2 [@media(min-width:999px)]:grid-cols-3">
            {SpecialOffersBannerData.map((item, i) => (
                <SpecialOffersBannerItem
                    key={i}
                    title={item.title}
                    subtitle={item.subtitle}
                    percent={item.percent}
                    has_percent={item.has_percent}
                    description={item.description}
                    button_title={item.button_title}
                    img={item.img}
                />
            ))}
        </div>
    )
}

export default SpecialOffersBanner







