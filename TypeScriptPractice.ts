class Mountain{
    Name : string;
    Height : number;
    
    constructor(Name:string, Height:number){
        this.Name = Name;
        this.Height = Height;
    }

    public printInfo():void{
        console.log(`Name: ${this.Name}`);
        console.log(`Height: ${this.Height}`);
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
//============================================================================================
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
        let average : number = (products.Price[0] + products.Price[1] + products.Price[2]) / 3;
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
class Inventory{
    inventoryItem : InventoryItem[] = [
        // new InventoryItem("motor", 10.00, 10 ),
        // new InventoryItem("sensor", 12.50, 4),
        // new InventoryItem("LED", 1.00, 20)
    ];
}

//======================================================================
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