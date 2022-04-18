export class Valutes{
    constructor(public RUB : number,
        public USD : number,
        public EUR : number,
        public JPY : number,
        public CNY : number) {}
        
    public getValue(valute : string) : number {
        switch(valute){
            case "RUB": {
                return this.RUB;
                break;
            }

            case "USD": {
                return this.USD;
                break;
            }

            case "EUR": {
                return this.EUR;
                break;
            }

            case "JPY": {
                return this.JPY;
                break;
            }

            case "CNY": {
                return this.CNY;
                break;
            }

            default:{
                return 1;
            }
        }
    }
}