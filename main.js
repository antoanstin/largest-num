var array=[3,8,3,65,898989];
function largestNum(array)
{
	for(i=0;i<array.length;i++)
	{
		for(j=i+1;j<array.length;j++)
		{
			if(array[i]<array[j])
			{
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	return array[0];
}
console.log(largestNum(array));