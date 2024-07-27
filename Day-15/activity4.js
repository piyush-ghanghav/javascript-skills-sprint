// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemManager = (function(){
    let items = [];

    function addItem (item){
        items.push(item);
    }

    function removeItem(item){
        const index = items.indexOf(item);
        if(index !== -1){
            items.splice(index,1);
        }
    }
    function listItems(){
        return items.slice();
    }

    return{
        addItem,
        removeItem,
        listItems
    };
})();

itemManager.addItem('item1');
itemManager.addItem('item2');
itemManager.addItem('item3');
console.log(itemManager.listItems());

itemManager.removeItem('item2');

console.log(itemManager.listItems());