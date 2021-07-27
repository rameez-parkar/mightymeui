import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {
  @Input() selectedDate;
  date = moment('11/01/2021', 'MM/DD/YYYY');
  datesArr = [];
  daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor() { }

  ngOnInit(): void {
    this.datesArr = this.createCalendar(this.date);
  }

  createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, {length: month.daysInMonth()})
      .map(Number.call, Number)
      .map(i => moment(firstDay).add(i,'d'));
    for (let i=0; i < firstDay.weekday(); i++) {
      days.unshift(null);
    }
    return days;
  }

  todayCheck(date) {
    if (!date) {
      return false;
    }
    return moment().format('L') === date.format('L');
  }

  nextMonth() {
    this.date.add(1, 'M');
    this.datesArr = this.createCalendar(this.date);
  }

  previousMonth() {
    this.date.subtract(1, 'M');
    this.datesArr = this.createCalendar(this.date);
  }

  onSelectDate(date) {
    if (this.isDateSelectable(date)) {
      let dateFormatted = date.format('MM/DD/YYYY');
      this.selectedDate = dateFormatted;
    }
  }

  isSelected(date) {
    if (!date) {
      return false;
    }
    let dateFormatted = moment(this.selectedDate, 'MM/DD/YYYY');
    return dateFormatted.isSame(date);
  }

  isDateSelectable(selectedDate) {
    if (moment(selectedDate).isBefore(moment()) || moment(selectedDate).isBefore(moment('11/01/2021', 'MM/DD/YYYY'))) {
      return false;
    }
    return true;
  }
}
