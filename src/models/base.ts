export interface PagedResultRequestModel {
    filter?: string
    maxResultCount?: number,
    skipCount?: number,
    sorting?: string
}

export interface PagedResultModel<T> {
    message: string,
    isSuccessed: boolean,
    totalCount: number,
    result: T[],
    errors: []
}

export interface ResultModel<T> {
    message: string,
    isSucceeded: boolean,
    result: T,
    errors: []
}