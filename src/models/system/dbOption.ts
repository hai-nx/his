import { Dayjs } from 'dayjs'

export default interface DbOptionModel {
    id: string | null,
    dbOptionId: string | null,
    dbOptionValue: string | null,
    dbOptionType: number,
    description?: string,
    parentId: string | null,
    isParent: boolean, 
}