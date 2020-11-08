export function getMergeSortAnimations(array)
{
    const animation=[];
    if(array.length<=1)
    {
        return array;
    }
    const auxilaryArray=array.slice();
    console.log("auxillary Array:"+auxilaryArray);
    mergesortHelper(array,0,array.length-1,auxilaryArray,animation);
    return animation;

}
function mergesortHelper(mainArray,startIdx,endIdx,auxilaryArray,animation)
{
    if(startIdx===endIdx)
    {
        return ;
    }
    const middle=Math.floor((startIdx+endIdx)/2);
    mergesortHelper(auxilaryArray,startIdx,middle,mainArray,animation);
    mergesortHelper(auxilaryArray,middle+1,endIdx,mainArray,animation);
    domerge(mainArray,startIdx,middle,endIdx,auxilaryArray,animation);
}
function domerge(mainArray,startIdx,middleIdx,endIdx,auxilaryArray,animation)
{
    let k=startIdx;
    let i=startIdx;
    let j=middleIdx+1;

   
    while(i<=middleIdx && j<=endIdx)
    {
            animation.push([i,j]);
            animation.push([i,j]);
            if(auxilaryArray[i]<auxilaryArray[j])
            {
                animation.push([k,auxilaryArray[i]]);
                mainArray[k++]=auxilaryArray[i++];
            }
            else{
                animation.push([k,auxilaryArray[j]]);
                mainArray[k++]=auxilaryArray[j++];
            }
    }
    while(i<=middleIdx)
    {
        animation.push([i,i]);
        animation.push([i,i]);
        animation.push([k,auxilaryArray[i]]);
        mainArray[k++]=auxilaryArray[i++];
    }
    while(j<=endIdx)
    {
        animation.push([j,j]);
        animation.push([j,j]);
        animation.push([k,auxilaryArray[j]]);
        mainArray[k++]=auxilaryArray[j++];
    }
    console.log("main Array:"+mainArray);
    console.log("aux array:"+auxilaryArray);
}