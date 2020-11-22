export function getBubbleSort(array)
{
    const animations=[];
    const auxilaryArray=array.slice();
    bubblesort(animations,auxilaryArray);
    console.log("auxilaryArray:"+auxilaryArray);
    return animations;
}
function bubblesort(animations,auxilaryArray){
    for(let i=0;i<auxilaryArray.length-1;i++)
    {
        for(let j=0;j<auxilaryArray.length-i-1;j++)
        {
            animations.push(["compare1",j,j+1]);
            animations.push(["compare2",j,j+1]);
            if(auxilaryArray[j]>auxilaryArray[j+1])
            {
                animations.push(["swap",j,auxilaryArray[j+1]]);
                animations.push(["swap",j+1,auxilaryArray[j]]);
                swap(auxilaryArray,j,j+1);
            }
        }
    }
}
function swap(auxilaryArray,index1,index2)
{
    const temp=auxilaryArray[index1];
    auxilaryArray[index1]=auxilaryArray[index2];
    auxilaryArray[index2]=temp;

}