import { Component, Prop, Vue } from "vue-property-decorator";
import Datepicker from 'vuejs-datepicker';

@Component({
  components: {
    'datepicker': Datepicker,
  },
})

export default class DateComponent extends Vue{
  show=false;
  // selectedDate:string='';
  
  @Prop()
  date!:'';
  @Prop()
  openDate!:'';
  @Prop()
  startDate!:'';
  @Prop()
  endDate!:'';
  showCalender(){
    this.show = true;
  }
  changeDate(e : any){
    this.selectedDate=e;
  }
  disabledDates = {
    to: new Date(Date.now() - 8640000)
    // from: new Date()
  }
}