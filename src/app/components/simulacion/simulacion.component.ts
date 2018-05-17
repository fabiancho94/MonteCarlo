import { Component, OnInit } from '@angular/core';


interface Viaje {
  parada: number,
  pasajerosIniciales: number,
  aleatorioSubir: number,
  pasajerosSuben: number,
  aleatoriosBajar: number,
  pasajerosBajan: number,
  pasajerosFinales: number  
}

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements OnInit {

  public viajes: Viaje[] = []
  public dinero: number [] = []

  public contSubir: number = 0 
  public contBajar: number = 0
  public contTotales: number = 0

  public money: number
  public pasajTotales: number = 0
  public lleganTebaida: number

  constructor() { }

  ngOnInit() {
    this.simulacion()
  }

  simulacion(){
    let randomSubir, randomBajar, pasajBajan, pasajSuben,pasajIniciales, temp
    let pasajFinales = 0
    
    for (let i = 1; i < 5; i++) {

      randomBajar = Math.random()
      randomSubir = Math.random()    
      
      pasajSuben = this.determinarPasajerosSuben(randomSubir,i)


      if(i == 1){        
        pasajIniciales = 0
        pasajBajan = 0
        this.contSubir = pasajSuben
        pasajFinales = pasajSuben-pasajBajan
        this.contTotales = pasajFinales        
      }
      
      else{        
        pasajIniciales = this.contTotales
        this.contTotales += pasajSuben
        temp = this.determinarPasajerosBajan(randomBajar, i)
        if(this.contTotales>temp){
          pasajBajan = temp
        }else{
          pasajBajan = this.contTotales
          this.contTotales = 0
        }
        pasajFinales = this.contTotales - pasajBajan

        this.contSubir = pasajSuben
        this.contBajar = pasajBajan
        this.contTotales = pasajFinales
      }   
      
      if(i == 4){
        pasajBajan = pasajIniciales
        randomBajar = ""
        pasajFinales = 0
        randomSubir = ""
        
      }
      let trayecto: Viaje = {
        parada: i,
        pasajerosIniciales: pasajIniciales,
        aleatorioSubir: randomSubir,
        pasajerosSuben: pasajSuben,
        aleatoriosBajar: randomBajar,
        pasajerosBajan: pasajBajan,
        pasajerosFinales: pasajFinales
      }
      this.money = i<4 ? pasajSuben * 3000 : null
      this.pasajTotales += pasajSuben
      this.lleganTebaida = pasajIniciales
      i < 4 ? this.dinero.push(this.money) : null
      this.viajes.push(trayecto)
    }
  }
  
  determinarPasajerosSuben(aleatorio: number, estacion: number){

    // Primera parada
    if(estacion == 1){
      if(aleatorio>=0&&aleatorio<=0.51){
        return 4
      }
      else if(aleatorio>0.51&&aleatorio<=0.84){
        return 5
      }
      else if(aleatorio>0.84&&aleatorio<=1){
        return 6
      }
    }
    // Segunda parada
    else if(estacion == 2){
      if(aleatorio>=0&&aleatorio<=0.07){
        return 0
      }
      else if(aleatorio>0.07&&aleatorio<=0.48){
        return 1
      }
      else if(aleatorio>0.48&&aleatorio<=0.81){
        return 2
      }
      else if(aleatorio>0.81&&aleatorio<=0.95){
        return 3
      }
      else if(aleatorio>0.95&&aleatorio<=0.98){
        return 4
      }
      else if(aleatorio>0.98&&aleatorio<=0.99){
        return 5
      }
      else if(aleatorio>0.98&&aleatorio<=1){
        return 6
      }
    } 

    // Tercera parada
    else if(estacion == 3){
      if(aleatorio>=0&&aleatorio<=0.02){
        return 0
      }
      else if(aleatorio>0.02&&aleatorio<=0.21){
        return 1
      }
      else if(aleatorio>0.21&&aleatorio<=0.34){
        return 2
      }
      else if(aleatorio>0.34&&aleatorio<=0.73){
        return 3
      }
      else if(aleatorio>0.73&&aleatorio<=0.97){
        return 4
      }
      else if(aleatorio>0.97&&aleatorio<=0.99){
        return 5
      }
      else if(aleatorio>0.99&&aleatorio<=1){
        return 6
      }
    }
    else{
      return 0
    }
  }

  //-----------------------------------------------------------------------------------------------------

  determinarPasajerosBajan(aleatorio: number, estacion: number){
if(estacion == 1)return 0
// Segunda parada
if(estacion == 2){
  if(aleatorio>=0&&aleatorio<=0.38){
    console.log("Estacion 2: 0");    
    return 0
  }
  else if(aleatorio>0.38&&aleatorio<=0.66){
    console.log("Estacion 2: 1");
    return 1
  }
  else if(aleatorio>0.66&&aleatorio<=0.96){
    console.log("Estacion 2: 2");
    return 2
  }
  else if(aleatorio>0.96&&aleatorio<=0.98){
    console.log("Estacion 2: 3");
    return 3
  }
  else if(aleatorio>0.98&&aleatorio<=0.99){
    console.log("Estacion 2: 4");
    return 4
  }
  else if(aleatorio>0.99&&aleatorio<=1){
    console.log("Estacion 2: 5");
    return 5
  }  
} 

// Tercera parada
else if(estacion == 3){
  if(aleatorio>=0&&aleatorio<=0.45){
    return 0
  }
  else if(aleatorio>0.45&&aleatorio<=0.65){
    return 1
  }
  else if(aleatorio>0.65&&aleatorio<=0.92){
    return 2
  }
  else if(aleatorio>0.92&&aleatorio<=0.98){
    return 3
  }
  else if(aleatorio>0.98&&aleatorio<=1){
    return 4
  }  
}
  }

}
