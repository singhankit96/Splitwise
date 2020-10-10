export {BinaryHeap}
class BinaryHeap{

	constructor(){
		this.heap=[];
	}
    size(){
    	return this.heap.length;
    }
    empty(){
    	return ( this.size()==0 );
    }

    insert(value){
    	this.heap.push(value);
    	this.upheapify();
    }

    upheapify(){
    	let index=this.size()-1;
    	while(index>0){
    		let element=this.heap[index];
    		let parentindex=Math.floor((index-1)/2);
    		let parent=this.heap[parentindex];

    		if(parent[0]>element[0])
    			break;
    		this.heap[index]=parent;
    		this.heap[parentindex]=element;
    		index=parentindex;

    	}
    }

    extractMax(){
    	const mx=this.heap[0];
    	const tmp=this.heap.pop();

    	if(!this.empty()){
    		this.heap[0]=tmp;
    		this.sinkdown(0);
    	}
    	return mx;
    }

    sinkdown(index){
    	let left=2*index+1;
    	let right=2*index+2;
    	let largest=index;
    	let length=this.size();

    	if(left<length && this.heap[left][0] > this.heap[largest][0]){
    		largest=left;
    	}
    	if(right<length && this.heap[right][0] > this.heap[largest][0]){
    		largest=right;
    	}

    	if(largest!=index){
    		int tmp=this.heap[largest];
    		this.heap[largest]=this.heap[index];
    		this.heap[index]=tmp;
    		this.sinkdown((largest));
    	}
    }

}