import {Collectable} from "./collectable.model";
export class CollectableService{
  private collectables: Collectable[] = [
    {description:'moto g5 plus',type:'mobile'},
    {description:'iPhone 6',type:'mobile'},
    {description:'one plus 3T',type:'mobile'},
    {description:'iPad Air',type:'tablet'},
    {description:'mac book Air',type:'laptop'},
    {description:'thinkpad',type:'laptop'}
  ];

  private collection: Collectable[] = [];

  getCollectables(){
   return this.collectables;
  }

  getCollection(){
    return this.collection;
  }
  addToCollection(item: Collectable){
    if(this.collection.indexOf(item) !== -1){
      return;
    }
    this.collection.push(item);
  }
  removeFromCollection(item: Collectable){
    this.collection.splice(this.collection.indexOf(item),1);
  }

}
