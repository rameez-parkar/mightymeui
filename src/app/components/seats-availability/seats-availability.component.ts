import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats-availability',
  templateUrl: './seats-availability.component.html',
  styleUrls: ['./seats-availability.component.scss']
})
export class SeatsAvailabilityComponent implements OnInit {
  @Input() value: number;
  @Input() total: number;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
