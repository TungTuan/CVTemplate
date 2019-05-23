import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store';
import { INCREMENT, DECREMENT } from '../../action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @select() counter: Observable<number>;

  constructor(private ngRedux : NgRedux<IAppState>){
   
   }
    ngOnInit() {
    }
   
   increment(){
    this.ngRedux.dispatch({type: INCREMENT});
   }
   
   decrement(){
    this.ngRedux.dispatch({type: DECREMENT});
   }
}
