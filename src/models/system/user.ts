import { Dayjs } from 'dayjs'\

export default interface UserModel {
    username?: string // Tên đăng nhập
    password?: string // Mật khẩu
    firstName?: string // Tên người dùng
    lastName?: string // Họ và tên đệm
    fullName?: string // Họ và tên người dùng
    email?: string // Thư điện tử
    tel?: string // Điện thoại
    mobile?: string // Điện thoại di động
    description?: string // Diễn giải
    branchId?: string // Chi nhánh khởi tạo tài khoản người dùng (mặc định quyền đăng nhập vào chi nhánh khi tài khoản không bị khóa)
    lastWorkingBranchId?: string // Chi nhánh người dùng làm việc cuối cùng (mặc định là chi nhánh khởi tạo người dùng)
    accessFailedCount?: string // Số lần đăng nhập thất bại (khi quá số lần cho phép trong cấu hình thì khóa tài khoản, kho đăng nhập thành công thì làm gán bằng 0)
    inactive?: string // Khóa tài khoản người dùng
    birthDate?: string // Sinh nhật
    useType?: string
    genderId?: string
    provinceId?: string
    districtId?: string
    wardId?: string
}