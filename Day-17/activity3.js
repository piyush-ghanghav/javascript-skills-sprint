
// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(ele){
        this.items.push(ele);
    }
    
    dequeue(){
        if(this.isEmpty())
            return 'Underflow'
        return this.items.shift();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    front(){
        if(this.isEmpty())
            return 'No elements'
        return this.items[0];
    }
    printQueue(){
        let str ='';
        for(let i =0 ; i<this.items.length ; i++)
            str += this.items[i] + ' ';
        return str;
    }
}

let queue = new Queue();

// console.log(queue.isEmpty()); 

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // 10 20 30 

console.log(queue.front()); // 10

console.log(queue.dequeue()); // 10

console.log(queue.printQueue()); // Output: 20 30


console.log(queue.isEmpty()); // Output: false





// • Task 6. Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class printerQueue{
    constructor(){
        this.queue = new Queue();
    }
    addPrintJob(job){
        this.queue.enqueue(job);
        console.log(`Added print job: ${job}`);
    }
    processNextJob(){
        if(!this.queue.isEmpty()){
            const job = this.queue.dequeue();
            console.log(`Processing Print Job: ${job}`);
        }
        else{
            console.log('No More Jobs to Process.');
            
        }
    }


    hasJobs() {
        return !this.queue.isEmpty();
    }

}

const pq = new printerQueue();

pq.addPrintJob('Job 1');
pq.addPrintJob('Job 2');
pq.processNextJob(); // Processing print job: Job 1
pq.processNextJob(); // Processing print job: Job 2
pq.processNextJob(); // No more print jobs in the queue.