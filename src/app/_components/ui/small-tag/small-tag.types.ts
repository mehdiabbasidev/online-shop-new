
import { ReactNode } from 'react'
import { TagStatus } from '../types/tag-status.type'
export type SmallTagProps = {
    tag_type: TagStatus
    children?: ReactNode
}
