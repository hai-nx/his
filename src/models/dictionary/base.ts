export default interface DictionaryBase {
    id: string | undefined,
    code: string,
    name: string,
    description?: string,
    inactive: boolean,
    sortOrder?: number
}