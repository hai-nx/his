export enum ImpMestStatusType {
    // "Mới tạo"
    None = 0,

    // "Yêu cầu" 
    Request,

    // "Đã duyệt" 
    Approved,

    // Đã nhập kho"
    ReceivedInStock,

    // "Đã hủy"
    Canceled
}