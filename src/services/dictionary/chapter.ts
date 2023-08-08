import { ApiResult, ChapterModel } from '@/models'
import request from '@/utils/request'

const chapterService = {
    getAll() {
        return request.get<ApiResult<ChapterModel[]>>('api/SChapter/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ChapterModel>>('api/SChapter/GetById?id=' + id);
    },
    createOrEdit(input: ChapterModel) {
        return request.post<ApiResult<ChapterModel>>('api/SChapter/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SChapter/Delete', id);
    }
}

export default chapterService;