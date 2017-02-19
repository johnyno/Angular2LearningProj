export class Responce<T>{

  constructor(public isSuccessed:boolean,
              public Model:T,
              public error?:any)
  {}
}
