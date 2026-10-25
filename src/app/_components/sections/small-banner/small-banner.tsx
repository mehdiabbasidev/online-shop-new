import React from 'react'
import { Button } from '../../ui/button'


const SmallBanner = () => {
    return (
        <div className="small-banner-wrapper">
            <div className="small-banner-content">
                <h5 className="small-banner-off-title">70% off on limited chairs</h5>
                <p className="small-banner-off-content">
                    Free shipping available for purchases more than $80.
                </p>
                <Button variant="success" className="w-fit!">
                    View Products
                </Button>
            </div>
        </div>
    )
}

export default SmallBanner
