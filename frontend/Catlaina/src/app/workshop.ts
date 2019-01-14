export class Workshop {
    
    private __id: string;
    public get _id(): string {
        return this.__id;
    }
    public set _id(value: string) {
        this.__id = value;
    }

    private _title: String;
    public get title(): String {
      return this._title;
    }
    public set title(value: String) {
      this._title = value;
    }
  
    private _date: Date;
    public get date(): Date {
      return this._date;
    }
    public set date(value: Date) {
      this._date = value;
    }
  
    private _place: string;
    public get place(): string {
      return this._place;
    }
    public set place(value: string) {
      this._place = value;
    }

    constructor(id?:string, title?:string, date?:Date, place?:string){
      this.__id = id;
      this._title = title;
      this._date = date;
      this._place = place;
    }
}