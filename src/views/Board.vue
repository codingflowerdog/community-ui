<template>
  <PaginationTable/>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from "vuex";
import { Component } from "vue-property-decorator";
import PaginationTable from "@/components/PaginationTable.vue"
import {getBoards} from "@/api";
import {ITableHeader} from "@/type/ITableHeader";
import {IPagination} from "@/type/IPagination";

@Component({
  name: "Board",
  components: {
    PaginationTable
  },
  computed: mapState('board', [
    'header',  // 테이블 헤더
    'data', // 테이블 데이터 목록
    'page', // 페이지 인덱스
    'itemsPerPage', // 페이지당 아이템 수
    'pageCount' // 총 페이지 수
  ])
})
export default class Board extends  Vue{
  // // 페이지네이션 정보
  // pagination: IPagination | null = null;
  // // 테이블 헤더
  // header:Array<any> = [];
  // // 테이블 데이터 목록
  // data:Array<any> = [];

  mounted() {
    console.log("Board Load")
    getBoards().then((res) => {
      const headerItems: Array<ITableHeader> = [{
        text: "게시물번호",
        value: "id",
        sortable: false,
        align: 'start'
      }, {
        text: "제목",
        value: "title",
      }, {
        text: "작성자",
        value: "writer",
      }, {
        text: "작성일",
        value: "createdAt",
      }, {
        text: "조회수",
        value: "viewCount",
      }]

      this.$store.state.board.page =  res.data.data.offset;
      this.$store.state.board.itemsPerPage =res.data.data.limit;
      this.$store.state.board.pageCount = res.data.data.total
      this.$store.state.board.header = headerItems;
      this.$store.state.board.data = res.data.data.results;
    })
  }
}

</script>
