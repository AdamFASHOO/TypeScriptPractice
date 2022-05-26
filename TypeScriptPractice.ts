class Mountain{
    Name : string;
    Height : number;
    
    constructor(Name:string, Height:number){
        this.Name = Name;
        this.Height = Height;
    }
}
class MountainDatabase{
    mountains: Mountain[] = [
        new Mountain("Kilimanjaro", 19341),
        new Mountain("Everest", 29029),
        new Mountain("Denali", 20310)   
    ];
   
}
function findNameOfTallestMountain(mountains : Mountain): string{
    let max : number = Math.max(mountains.Height);
    if(max === mountains.Height){
        let tallest : string = mountains.Name;
        return tallest;
    }
}
    let goOn : boolean = true;
    while(goOn = true){
        let mdb: MountainDatabase = new MountainDatabase();
        let mounts : Mountain[] = mdb.mountains;
        for(let i = 0; i < mounts.length; i++){
            let tallest : string = findNameOfTallestMountain(mounts[i]);
            console.log(tallest)
        }
        goOn = runAgain();
    }

class Product{
    Name : string;
    Price : number;

    constructor(Name:string, Price:number){
        this.Name=Name;
        this.Price=Price;
    }
}
class Products{
    products : Product[] = [
        new Product("Xbox", 999),
        new Product("PlayStation", 888),
        new Product("Switch", 777)
    ];
    public calcAverageProductPrice(products : Product) : number{
        let average : number = (products[0].Price + products[1].Price + products[2].Price) / 3;
        return average;
    }
}
    let goOn2 : boolean = true;
    while(goOn2 = true){
        let pdb : Products = new Products();
        let p : Product[] = pdb.products;
        for (let i = 0; i < p.length; i++){
            let average : number = pdb.calcAverageProductPrice(p[i]);
            console.log(average);
        }
        goOn2 = runAgain();
    }

class InventoryItem{
    Product : Product;
    Quantity : number;

    constructor(Product:Product, Quantity:number){
        this.Product=Product;
        this.Quantity=Quantity;
    }
}
let motor = new Product("motor", 10);
let sensor = new Product("sensor", 12.50);
let LED = new Product("LED", 1)

class Inventory{
    inventoryItem : InventoryItem[] = [
        new InventoryItem(motor, 10 ),
        new InventoryItem(sensor, 4),
        new InventoryItem(LED, 20)
    ];
}
function calcInventoryValue(inventory : InventoryItem) : number{
    let motorTotal : number = motor.Price * inventory[0].quanity;
    let sensorTotal : number = sensor.Price * inventory[1].quantity;
    let LEDTotal : number = LED.Price * inventory[2].quantity;
    let total : number = motorTotal + sensorTotal + LEDTotal;
    return total;
}
    let goOn3 = true;
    while(goOn3 = true){
        let idb : Inventory = new Inventory();
        let inv : InventoryItem[] = idb.inventoryItem;
        for (let i = 0; i < inv.length; i++){
            let total : number = calcInventoryValue(inv[i]);
            console.log(total);
        }
        goOn3 = runAgain();
    }
    
function runAgain():boolean{
    let input: string = prompt("Would you like to continue? y/n");
    if(input.toLowerCase() === "y"){
        return true;
    }
    else if(input.toLowerCase() === "n"){
        return false;
    }
    else{
        console.log("I'm sorry, I didn't follow that. Please try again.")
        return runAgain();
    }
}