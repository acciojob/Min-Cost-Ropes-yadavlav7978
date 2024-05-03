function mincost(arr)
{
	if (arr.length <= 1) return 0;

    let cost = 0;
    arr.sort((a, b) => a - b);

	while(arr.length>1){

		let min1=arr.shift();
		let min2=arr.shift();

		let cur_cost=min1+min2;
		cost+=cur_cost;

		arr.push(cur_cost);
		arr.sort((a, b) => a - b);
		
	}


   

    return cost;
	

}

module.exports=mincost;
