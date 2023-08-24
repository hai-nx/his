export enum EmpMestStatusType {
    // "Mới tạo"
    None = 0,

    // "Yêu cầu" 
    Request,

    // "Đã duyệt"
    Approved,

    // "Đã xuất kho" 
    ReceivedOutStock,

    // "Đã hủy"
    Canceled
}