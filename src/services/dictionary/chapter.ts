import { ApiResult, ChapterIcdModel } from '@/models'
import request from '@/utils/request'

const chapterService = {
    getAll() {
        return request.get<ApiResult<ChapterIcdModel[]>>('api/ChapterIcd/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ChapterIcdModel>>('api/ChapterIcd/GetById?id=' + id);
    },
    createOrEdit(input: ChapterIcdModel) {
        return request.post<ApiResult<ChapterIcdModel>>('api/ChapterIcd/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/ChapterIcd/Delete=?id=' + id);
    }
}

export default chapterService;