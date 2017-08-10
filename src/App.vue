<template>
  <div id="app">
    <h2 style="margin: 50px;">Event list</h2>
    <list-timetable :events="events" :from="list.from" :to="list.to"></list-timetable>

    <h2 style="margin: 50px;">Week Timetable</h2>
    <week-timetable :events="events"></week-timetable>

    <h2 style="margin: 50px;">Month Timetable</h2>
    <month-timetable :events="events"></month-timetable>
  </div>
</template>

<script>
  import moment from 'moment'

  import ListTimetable from 'vue-timetable/components/ListTimetable.vue'
  import WeekTimetable from 'vue-timetable/components/WeekTimetable.vue'
  import MonthTimetable from 'vue-timetable/components/MonthTimetable.vue'

  export default {
    name: 'app',
    components: {ListTimetable, WeekTimetable, MonthTimetable},
    data () {
      return {
        list: {
          from: moment().subtract(7, 'days'),
          to: moment().add(7, 'days')
        },
        events: [
          {
            color: '#ff7aa3',
            text: 'My first happy event',
            date: {
              from: moment().subtract(3, 'days').hour(10).minute(0),
              to: moment().subtract(3, 'days').hour(12).minute(0)
            }
          },
          {
            color: '#1bb99a',
            text: 'And a success event here',
            date: {
              from: moment().subtract(3, 'days').hour(15).minute(0),
              to: moment().subtract(3, 'days').hour(16).minute(0)
            }
          },
          {
            color: '#ff5d48',
            text: 'A red dangerous event',
            date: {
              from: moment().subtract(1, 'days').hour(9).minute(0),
              to: moment().subtract(1, 'days').hour(1).minute(0)
            }
          },
          {
            color: '#2b3d51',
            text: 'And a dark event here',
            date: {
              from: moment().subtract(1, 'days').hour(11).minute(0),
              to: moment().subtract(1, 'days').hour(12).minute(0)
            }
          },
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    max-width: 1080px;
    margin: auto;
  }
</style>
