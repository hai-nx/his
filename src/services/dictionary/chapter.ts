import { ResultModel, ChapterIcdModel } from '@/models'
import request from '@/utils/request'

const chapterService = {
    getAll() {
        return request.get<ResultModel<ChapterIcdModel[]>>('api/ChapterIcd/GetAll')
    },
    getById(id: string) {
        return request.get<ResultModel<ChapterIcdModel>>('api/ChapterIcd/GetById?id=' + id);
    },
    createOrEdit(input: ChapterIcdModel) {
        return request.post<ResultModel<ChapterIcdModel>>('api/ChapterIcd/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/ChapterIcd/Delete=?id=' + id);
    }
}

export default chapterService;