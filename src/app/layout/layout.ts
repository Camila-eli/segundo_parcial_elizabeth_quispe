import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit{
 constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Mi Aplicación - Página Principal');
  }
}
