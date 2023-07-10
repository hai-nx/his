export default interface DictionaryBase {
    id: string | undefined,
    code: string | null,
    name: string | null,
    description?: string,
    inactive: boolean,
    sortOrder?: number
}