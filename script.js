function mincost(arr)
{
	  if (arr.length <= 1) return 0;

    let cost = 0;

    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);

    // Merge the ropes pairwise
    for (let i = 0; i < arr.length - 1; i++) {
        let sum = arr[i] + arr[i + 1];
        cost += sum;
        // Replace the two ropes with their merged length
        arr[i + 1] = sum;
    }

    return cost;
	

}

module.exports=mincost;
