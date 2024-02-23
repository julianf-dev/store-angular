import { Component, Input, SimpleChanges, signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration:number = 0;
  @Input({required: true}) message:string = ''
  counter = signal(0);
  counterRef: number | undefined

  /**No es asincrono, o sea no se puede poner ninguna promesa
   * Corre antes del render
   */
  constructor(){
    console.log('Constructor');
    console.log('-'. repeat(10));
  }

  /**
   * Recibe los cambios
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges){
    /**
     * Before and during render
     */
    console.log('On Changes');
    console.log('-'. repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    //Valida si el valor es elmismo que al anteriormetne neviado
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    /**
     * After render
     * only one time
     * asnyc, then, subs
     */
    console.log('On Init');
    console.log('-'. repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('Run interval');
      this.counter.update(statePrev => statePrev +1)
    },1000)
  }

  ngAfterViewInit(){
    /**
     * Cuando los hijos de este componentes
     * han sido renderizados
     */
    console.log('AfterviewUnit');
    console.log('-'. repeat(10));
  }

  ngOnDestroy(){
    console.log('Destroy');
    console.log('-'. repeat(10))
    window.clearInterval(this.counterRef)
  }

  doSomething(){
    console.log('Change duration');
  }
}
