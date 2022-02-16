import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()  homepageCalled:EventEmitter<string> = new EventEmitter<string>();


  pressHome(data: string)
  {

    if(data === 'home')
    {
      this.homepageCalled.emit('Home Component Called');
    }
    if(data === 'contact')
    {
      this.homepageCalled.emit('Contact Component Called');
    }
    else if(data === 'about')
    {
      this.homepageCalled.emit('About Component Called');
    }
  }
}
