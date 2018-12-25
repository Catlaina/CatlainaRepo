export class Workshop {
    
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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
}