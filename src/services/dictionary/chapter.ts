import { ApiResult, ChapterModel } from '@/models'
import request from '@/utils/request'

const chapterService = {
    getAll() {
        return request.get<ApiResult<ChapterModel[]>>('api/SChapterICD10/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ChapterModel>>('api/SChapterICD10/GetById?id=' + id);
    },
    createOrEdit(input: ChapterModel) {
        return request.post<ApiResult<ChapterModel>>('api/SChapterICD10/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SChapterICD10/Delete', id);
    }
}

export default chapterService;