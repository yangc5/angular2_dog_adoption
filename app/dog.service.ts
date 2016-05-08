import { Injectable } from '@angular/core';
import { DOGS } from './mock-dogs';

@Injectable()
export class DogService {
  getDogs(){
    return Promise.resolve(DOGS);
  }
}
