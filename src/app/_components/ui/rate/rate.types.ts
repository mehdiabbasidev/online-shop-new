export type RatingProps = {
    rate?: number | null
    onRatingChange?: (starNumber: number) => void
    width?: number
    height?: number
    viewBox?: string
    className?: string
    ratersNumber?:number
}
