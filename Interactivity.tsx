class GroceryItem {
    name: string;
    quantity: number;
    category: string;
    unit: string;

    createInstance(name:string, quantity:number, category:string = 'Misc', unit:string = 'pieces') {
        this.name = name
        this.quantity = quantity
        this.category = category
        this.unit = unit
    }
}

class GroceryList {
    private items: GroceryItem[] = [];
  
    addItem(item: GroceryItem): void {
      this.items.push(item);
    }
  
    removeItem(name: string): void {
      this.items = this.items.filter(item => item.name !== name);
    }
  
    // Update quantity of an existing item
    updateItemQuantity(name: string, quantity: number): void {
      const item = this.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      } else {
        console.log(`Item ${name} not found`);
      }
    }
  
    // List all items
    listItems(): void {
      console.log("Grocery List:");
      this.items.forEach(item => {
        console.log(`${item.name}: ${item.quantity} ${item.unit} (${item.category})`);
      });
    }
  
    // Optional: Get all items from a specific category
    getItemsByCategory(category: string): GroceryItem[] {
      return this.items.filter(item => item.category === category);
    }
  
    // Clear the list
    clearList(): void {
      this.items = [];
    }
  }