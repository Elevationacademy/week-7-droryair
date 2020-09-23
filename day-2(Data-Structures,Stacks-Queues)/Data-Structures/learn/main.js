class UniqueArray{
    constructor(){
        this.items = {}
        // {0:"item",1:"item2"}
        this.length = 0
    }

    add(item){
        for(let i=0; i<=this.length;i++){
            if(this.items[i]!==item){
                this.items[this.length]=item
                this.length++
                console.log(`${item} has been added to the unique array`)
                return
            }else{
                console.log(`${item} already exists in the unique array`)
                return

            }
        }
    }

    showAll(){
        console.log(this.items)
    }

    // needs to be O(1)
    exists(item){
        for (let i=0;i<this.length;i++){
            if(this.items[i]== item){
                console.log(`${item} is in the array`)
                return
            }
            else{
                console.log(`${item} is not in the array`)
                return
            }
        }
    }
    get(index){
        for(let i=0;i<this.length;i++){
            if (i==index){
                return this.items[i]
            }
        }
    }


}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"