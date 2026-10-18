import { AuthorProps } from "../author/author.types"
import { IBlogCardProps } from "../blog-card/blog-card.types"

export interface IBlogDetailsProps extends IBlogCardProps {
    content:string
    readingTime?:number
    author?:AuthorProps
}