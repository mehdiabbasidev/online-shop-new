import Image from 'next/image'


import Link from 'next/link'
import { COUNTDOWN_TARGET_DATE } from '@/configs/countdown'
import { Button } from '../../ui/button'
import { CountdownTimer } from '../../ui/timer'

export const AttributeSection = () => {
    return (
        <div className="attribute-wrapper">
            {/* left box */}
            <div className="left-box-wrapper">
                {/* lable */}
                <span className="left-box-wrapper__lable">new arrival</span>
                {/* title */}
                <h3 className="left-box-wrapper__title">
                    Make Your Home Beautiful <br />
                    With
                    <span className="text-success-400"> Green Plants</span>
                </h3>
                {/* options */}
                <ul className="left-box-wrapper__options mt-0 list-disc">
                    <li className="left-box-wrapper__options__item">
                        Free Shipping. Secure Payment
                    </li>
                    <li className="font-sm left-box-wrapper__options__item text-shop-gray-900">
                        Contact us 24hrs a day
                    </li>
                    <li className="font-sm left-box-wrapper__options__item text-shop-gray-900">
                        Support gift service
                    </li>
                    <li className="font-sm left-box-wrapper__options__item text-shop-gray-900">
                        Garden care
                    </li>
                </ul>
                {/* shoping */}
                <div className="left-box-wrapper__shop-btn">
                    <Button
                        variant="success"
                        shape="default"
                        className="btn-style"
                    >
                        shop now
                    </Button>
                    <Link href="#" className="left-box-wrapper__more">
                        more
                    </Link>
                </div>
            </div>
            {/* right box */}
            <div className="right-box-wrapper">
                {/* text && timer */}
                <div className="right-box">
                    {/* lable */}
                    <span className="right-box__lable">new arrival</span>
                    {/* title */}
                    <h3 className="right-box__title">Plant a Tree Today</h3>
                    {/* subTitle */}
                    <span className="right-box__subtitle">
                        Remains until the end of the offer
                    </span>
                    {/* timer */}
                    <CountdownTimer targetDate={COUNTDOWN_TARGET_DATE} />
                    {/* shoping */}
                    <Button
                        variant="success"
                        shape="default"
                        className="btn-style"
                    >
                        shop now
                    </Button>
                </div>
                {/* image box */}
                <div className="right-box__img">
                    <Image
                        src="/images/items/items.png"
                        width={270}
                        height={260}
                        alt="bg-image"
                    />
                </div>
            </div>
        </div>
    )
}
