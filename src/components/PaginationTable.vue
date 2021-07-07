<!-- 페이지네이션을 포함한 테이블 -->
<template>
  <div>
    <v-data-table
        :headers="this.header"
        :items="this.data"
        :page.sync="this.pagination.offset"
        :items-per-page="this.pagination.limit"
        hide-default-footer
        class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import { ITableHeader } from "../type/ITableHeader"
import {mapState} from "vuex";
import {IPagination} from "@/type/IPagination";

@Component({
  name: "PaginationTable",
  computed: mapState('board', [
    'header',  // 테이블 헤더
    'data', // 테이블 데이터 목록
    'page', // 페이지 인덱스
    'itemsPerPage', // 페이지당 아이템 수
    'pageCount' // 총 페이지 수
  ])
})
export default class PaginationTable extends Vue {
  // 초기 페이지 번호

  @Prop() pagination!: IPagination;
  @Prop() offset!: number;
  // 총 페이지 수
  @Prop()  pageCount!: number;
  // 페이지당 표시 목록 수
  @Prop()  limit!: number;
  // 테이블 헤더
  @Prop()  header!: Array<ITableHeader>;
  // 테이블 데이터 목록
  @Prop()  data!: Array<any>;

  // // 초기 페이지 번호
  // page = 1;
  // // 총 페이지 수
  // pageCount =  0;
  // // 페이지당 표시 목록 수
  // itemsPerPage = 10;
  //
  // pagination: IPagination | null = null;
  // // 테이블 헤더
  // header:Array<ITableHeader> = [];
  // // 테이블 데이터 목록
  // data:Array<any> = [];

  mounted() {
    console.log("Pagination Load")
  }


  // setHeader(headers: Array<ITableHeader>) {
  //   this.header.push(headers);
  // }
  //
  // setData(dataList: Array<any>) {
  //   this.data.push(dataList);
  // }
}

</script>