export default interface ExecutionRoomModel {
    id: string | undefined,
    serviceId: string | undefined,
    roomId: string | undefined,
    isMain: boolean,
    isCheck: boolean,

    roomCode: string
    roomName: string
}