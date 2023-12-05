export default interface PagedResultModel<T> {
    message: string,
    isSuccessed: boolean,
    totalCount: number,
    result: T[],
    errors: []
}