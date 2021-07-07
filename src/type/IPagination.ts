/**
 * 페이지네이션 타입
 */
export interface IPagination {
    // 페이지 총 오프셋
    offset: number
    // 페이지 당 최대 목록 표시 수
    limit: number
    // 총 목록 수
    pageCount: number;
}