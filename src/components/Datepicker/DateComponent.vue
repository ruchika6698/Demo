<template>
  <div class="calender">
    <div>
      <div class="startProgram" :class="{ border : show }" v-on:click="showCalender()">
        <div class="calenderImage">
          <img src="../../assets/calender.svg" v-if="!show" alt="calender"/>
          <img src="../../assets/Activecalender.svg" v-if="show" alt="calender"/>
        </div>
        <div class="datepicker">
          <datepicker
            class="date"
            placeholder="MM/DD/YYYY"
            required="required"
            format="MM/dd/yyyy"
          ></datepicker>
        </div>
      </div>
    </div>

    <div>
      <div class="startProgram" :class="{ border : show }" v-on:click="showCalender()">
        <div class="calenderImage">
          <img src="../../assets/calender.svg" v-if="!show" alt="calender"/>
          <img src="../../assets/Activecalender.svg" v-if="show" alt="calender"/>
        </div>
        <div class="datepicker">
          <datepicker
            class="date"
            placeholder="MM/DD/YYYY"
            required="required"
            format="MM/dd/yyyy"
          ></datepicker>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import "@/components/Datepicker/DateComponent.less";
import datepickerComponent from "@/components/Datepicker/DateComponent.ts";
export default datepickerComponent;
</script>
