import { ApiResult, ChapterIcdModel } from '@/models'
import request from '@/utils/request'

const chapterService = {
    getAll() {
        return request.get<ApiResult<ChapterIcdModel[]>>('api/SChapterIcd/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ChapterIcdModel>>('api/SChapterIcd/GetById?id=' + id);
    },
    createOrEdit(input: ChapterIcdModel) {
        return request.post<ApiResult<ChapterIcdModel>>('api/SChapterIcd/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/SChapterIcd/Delete=?id=' + id);
    }
}

export default chapterService;