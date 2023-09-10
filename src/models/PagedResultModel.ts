export default interface PagedResultModel<T> {
    message: string,
    isSuccessed: boolean,
    totalCount: number,
    items: T[],
    errors: []
}