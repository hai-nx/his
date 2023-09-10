export default interface ResultModel<T> {
    message: string,
    isSuccessed: boolean,
    item: T,
    errors: []
}