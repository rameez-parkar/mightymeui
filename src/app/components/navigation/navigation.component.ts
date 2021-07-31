import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  routes = [
    {path:'home', text:'Home'},
    {path:'my-assessments', text:'My Assessments'},
    {path:'favourites', text:'Favourites'},
    {path:'all-assessments', text:'All Assessments'},
    {path:'certificate', text:'Certificate'},
    {path:'settings', text:'Settings'},
    {path:'logout', text:'Logout'}
  ];
  tempRoute = this.routes[0].path;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onNavigate(route: string) {
    this.tempRoute = route;
  }

}
