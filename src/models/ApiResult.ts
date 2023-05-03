export default interface ApiResult<T> {
    isSuccessed: boolean,
    message: string,
    result: T
}