export default interface ResultModel<T> {
    message: string,
    isSucceeded: boolean,
    result: T,
    errors: []
}