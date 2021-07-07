<template>
  <!-- 게시글 리스트 -->
  <div>
    <v-data-table
        :headers=header
        :items=data
        :page.sync=offset
        :items-per-page=limit
        hide-default-footer
        @page-count="pageCount = $event"
        class="elevation-1"
    >
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
          v-model=offset
          :length=pageCount
      ></v-pagination>
    </div>
  </div>

 

</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator";
import {getBoards} from "@/api";
import {ITableHeader} from "@/type/ITableHeader";

@Component({
  name: "Board"
})
export default class Board extends  Vue{
  // // 페이지 인덱스
  // offset!: number;
  // // 페이지당 최대 목록 수
  // limit!: number;
  // // 페이지 수
  // pageCount!: number;
  //
  // // 테이블 헤더
  // header!: Array<ITableHeader>;
  // // 테이블 데이터 목록
  // data!: Array<any>;

  // 페이지 인덱스
  offset = 1;
  // 페이지당 최대 목록 수
  limit = 10;
  // 페이지 수
  pageCount = 10;

  // 테이블 헤더
  header: Array<ITableHeader> = [];
  // 테이블 데이터 목록
  data: Array<any> = [];

  mounted() {
    getBoards().then((res) => {
      console.log("Get Board!!")
      console.log(res)
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


      this.offset =  res.data.data.offset;
      this.limit = res.data.data.limit;
      this.pageCount = Math.ceil(res.data.data.total/res.data.data.limit);
      this.header = headerItems;
      this.data = res.data.data.results;
    })
  }
}

</script>
