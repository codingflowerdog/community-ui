import {ITableHeader} from "@/type/ITableHeader";
import {IPagination} from "@/type/IPagination";

export const namespaced = true;

interface State {
    // 페이지 총 오프셋
    page: number
    // 페이지 당 최대 목록 표시 수
    itemsPerPage: number
    // 총 목록 수
    pageCount: number;
    // 테이블 헤더
    header:Array<ITableHeader>;
    // 테이블 데이터 목록
    data:Array<any>;
}
const state: State = {
    page: 0,
    itemsPerPage: 0,
    pageCount: 0,
    header: [],
    data: []
};

export default state;