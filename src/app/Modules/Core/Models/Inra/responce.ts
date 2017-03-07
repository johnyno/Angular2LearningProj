export class JResponse<T>{

  constructor(public isSuccessed:boolean,
              public Model:T,
              public error?:string)
  {}
}
