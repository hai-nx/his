export default interface DictionaryBase {
    id: string | null,
    code: string | null,
    name: string | null,
    description?: string,
    inactive: boolean,
    sortOrder?: number
}