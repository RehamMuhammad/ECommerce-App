import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new BehaviorSubject(false)

  constructor() {   }

  getLoader(){
    return this.isLoading
  }

  setLoader(updatedLoader: any){
   this.isLoading.next(updatedLoader)
  }
}




