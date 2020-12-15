<template>
  <div class="home">
    <div class="calenderDiv">
      <div>
        <div class="startDate">Start Date<label class="required">*</label></div>
        <DateComponent :startDate="startDate"/>
      </div>
      <div>
        <div class="startDate">End Date<label class="required">*</label></div>
        <DateComponent :endDate="endDate"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Prop} from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import DateComponent from "@/components/Datepicker/DateComponent.vue";
import datepickerComponent from "@/components/Datepicker/DateComponent.ts";

@Component({
  components: {
    DateComponent
  }
})
export default class Home extends Vue {
  startDate="";
  endDate="";
  openDate="";
  date="";
}
</script>

<style lang="less">
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
}
.calenderDiv{
  width:100%;
  max-width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.startDate{
  font-size:16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.required{
  color:red;
}
</style>