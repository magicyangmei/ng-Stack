import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/heroService/hero.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService:HeroService) { }
  ngOnInit() {
    this.getHeroes();
    console.log(this.heroService.getHeroes(),'data')
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5))
  }
}
