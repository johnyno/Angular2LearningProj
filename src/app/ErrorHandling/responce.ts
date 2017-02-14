export class Responce<T>{

  constructor(public IsSuccessed:boolean,
              public Model:T,
              public error?:any)
  {}
}
