'use client'

import { useEffect, useState } from 'react'
import { CountdownTimerProps } from './timer.types'

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
    targetDate,
}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const countDownDate = new Date(targetDate).getTime()

        const calculateTimeLeft = () => {
            const now = new Date().getTime()
            const difference = countDownDate - now
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                })
            } else {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        const interval = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(interval) // پاکسازی تایمر هنگام از بین رفتن کامپوننت
    }, [targetDate])

    return (
        <div className="timer-wrapper">
            <div className="timer">
                <span className="time">{timeLeft.days}</span>
                <span className="timer-text">Day</span>
            </div>
            <span className="spreed">:</span>
            <div className="timer">
                <span className="time">{timeLeft.hours}</span>
                <span className="timer-text">hour</span>
            </div>
            <span className="spreed">:</span>
            <div className="timer">
                <span className="time">{timeLeft.minutes}</span>
                <span className="timer-text">min</span>
            </div>
            <span className="spreed">:</span>
            <div className="timer">
                <span className="time">{timeLeft.seconds}</span>
                <span className="timer-text">sec</span>
            </div>
        </div>
    )
}
