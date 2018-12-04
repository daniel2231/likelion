<template>

  <div>
    <h2>공지사항</h2>

    <!-- 데이터테이블이랑 페이지네이션 결합 -->
    <div>
      <v-data-table :headers="headers" :items="documents" :search="search" :pagination.sync="pagination" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.no }}</td>
          <td>{{ props.item.date}}</td>
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.views }}</td>
        </template>
      </v-data-table>
    </div>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages" :total-visible="5" circle>
        <!-- 버튼 모양 네모난 게 더 낫다면 circle은 지우겠음-->
      </v-pagination>
    </div>

    <!-- 글쓰기 버튼, 누르면 alert  -->
    <br>
    <div>
      <div class="text-xs-left">
        <v-btn outline large color="teal" v-if="!alert" @click="alert = true">글쓰기</v-btn>
      </div>
      <br>
      <v-alert v-model="alert" dismissible type="success" :value="true" color="info" icon="priority_high" outline>
        죄송합니다. 접근 권한이 없습니다
      </v-alert>
    </div>





  </div>
</template>

<script>
  export default {


    data() {
      return {
        search: '',
        pagination: {},
        selected: [],
        headers: [{
            text: 'No.',
            value: 'name',
            align: 'left',
            sortable: false
          },
          {
            text: '등록일',
            value: 'date'
          },
          {
            text: '제목',
            value: 'title'
          },
          {
            text: '조회수',
            value: 'views'
          },
        ],

        // 제목을 클릭해서 들어갈 때마다 views가 올라가는 방법을 찾아야 함. 

        documents: [{
            value: false,
            no: 1,
            title: '예시 항목',
            date: '2018-12-03',
            views: 5,
          },
          {
            value: true,
            no: 2,
            title: '예시 항목2',
            date: '2018-12-04',
            views: 7,
          },
          {
            value: true,
            no: 3,
            title: '예시 항목3',
            date: '2018-12-04',
            views: 5,
          },
          {
            value: true,
            no: 4,
            title: '예시 항목4',
            date: '2018-12-04',
            views: 7,
          },
          {
            value: true,
            no: 5,
            title: '예시 항목5',
            date: '2018-12-04',
            views: 7,
          },
          {
            value: true,
            no: 6,
            title: '예시 항목6',
            date: '2018-12-04',
            views: 7,
          },
          {
            value: true,
            no: 7,
            title: '예시 항목7',
            date: '2018-12-04',
            views: 7,
          },
        ],
      }
    },
    computed: {
      pages() {
        if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },



  }
</script>

<!-- 밑에 style은 Home.vue에서 그대로 가져온 거, 여기 페이지랑은 상관 없을지도? -->

<style>
  #codingVideo {
    position: absolute;
    right: 0;
    top: 0;
    width: 150%;
    height: 100%;
  }

  .typing {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    font-size: 30px;
    color: white;
    position: absolute;
    top: 50%;


  }

  .main-section {
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
  }
</style>