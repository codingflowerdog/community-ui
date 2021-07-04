/**
 * 테이블 헤더 타입
 */
export interface ITableHeader {
    // 테이블 헤더 제목 텍스트
    text: string,
    // 테이블 헤더 변수
    value: string
    // 정렬 가능 여부
    sortable?: boolean
    // 정렬 기준
    align?: string
}