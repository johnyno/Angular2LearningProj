import {JModel} from "./Inra/jmodel"
export class User implements JModel{
  constructor(public id:number,
              public  username: string,
              public firstName?:string,
              public  lastName?:string)
  {}

}
