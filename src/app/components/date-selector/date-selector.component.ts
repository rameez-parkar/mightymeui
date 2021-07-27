import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {
  @Input() selectedDate;
  startDate = '11/01/2021';
  dateFormat = 'MM/DD/YYYY';
  date = moment(this.startDate, this.dateFormat);
  datesArr = [];
  daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor() { }

  ngOnInit(): void {
    this.datesArr = this.createCalendar(this.date);
  }

  createCalendar(month) {
    let firstDay = moment(month)?.startOf('M');
    let days = Array.apply(null, {length: month.daysInMonth()})
      .map(Number.call, Number)
      .map(i => moment(firstDay)?.add(i,'d'));
    for (let i=0; i < firstDay?.weekday(); i++) {
      days?.unshift(null);
    }
    return days;
  }

  todayCheck(date) {
    if (!date) {
      return false;
    }
    return moment()?.format('L') === date?.format('L');
  }

  nextMonth() {
    this.date?.add(1, 'M');
    this.datesArr = this.createCalendar(this.date);
  }

  previousMonth() {
    this.date?.subtract(1, 'M');
    this.datesArr = this.createCalendar(this.date);
  }

  onSelectDate(date) {
    if (this.isDateSelectable(date)) {
      let dateFormatted = date?.format(this.dateFormat);
      this.selectedDate = dateFormatted;
    }
  }

  isSelected(date) {
    if (!date) {
      return false;
    }
    let dateFormatted = moment(this.selectedDate, this.dateFormat);
    return dateFormatted?.isSame(date);
  }

  isDateSelectable(selectedDate) {
    if (!selectedDate ||
      moment(selectedDate)?.isBefore(moment()) ||
      moment(selectedDate)?.isBefore(moment(this.startDate, this.dateFormat))
    ) {
      return false;
    }
    return true;
  }
}
