import { Injectable } from '@angular/core';
import { DOGS } from './mock-dogs';

@Injectable()
export class DogService {
  getDogs(){
    return Promise.resolve(DOGS);
  }
  getDog(id: number) {
    return Promise.resolve(DOGS).then(
      dogs => dogs.filter(dog => dog.id === id)[0]
    );
  }
}
