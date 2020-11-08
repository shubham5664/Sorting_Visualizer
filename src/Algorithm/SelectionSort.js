export function selection(array)
{
   const animation=[];
    for(let i=0;i<array.length;i++)
    {
        var min=i;
        for(let j=i;j<array.length;j++)
        {
            animation.push(["compare1",j,min]);
            animation.push(["compare2",j,min]);
            if(array[min]>array[j])
            {
                
                min=j;
                
            }
        }
        animation.push(["swap1",min,array[i]]);
        animation.push(["swap2",i,array[min]]);
        var temp=array[min];
        array[min]=array[i];
        array[i]=temp;
    }
    console.log(""+array);
    return animation;
}