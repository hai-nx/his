import { Dayjs } from 'dayjs'

export default interface UserModel {
    userName?: string
    password?: string
    phoneNumber?: string
    email?: string
    firstName?: string
    lastName?: string
    address?: string
    dob?: Dayjs
    useType?: string
    status?: number
    genderId?: number
    provinceId?: string
    districtId?: string
    wardId?: string
}