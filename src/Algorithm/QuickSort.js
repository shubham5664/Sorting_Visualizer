import { getMergeSortAnimations } from "./MergeSort"

export function getquicksort(array)
{
    const animations=[];
    const auxilaryArray=array.slice();
    quicksort(auxilaryArray,0,array.length-1,animations);
    return animations;
}
function quicksort(auxilaryArray,low,high,animations)
{
    if(low<high)
    {
        const pi=partition(auxilaryArray,low,high,animations);
        quicksort(auxilaryArray,low,pi-1,animations);
        quicksort(auxilaryArray,pi+1,high,animations);
    }
    
}
function partition(auxilaryArray,low,high,animations)
{
    let pivot=auxilaryArray[high];
    let i=low-1;

    for(let j=low;j<=high-1;j++)
    {
        animations.push(["compare1",j,high]);
        animations.push(["compare2",j,high]);
        if(auxilaryArray[j]<pivot)
        {
            i++;
            animations.push(["swap",i,auxilaryArray[j]]);
            animations.push(["swap",j,auxilaryArray[i]]);
            swap(auxilaryArray,i,j);
        }

    }
    animations.push(["swap",i+1,auxilaryArray[high]]);
    animations.push(["swap",high,auxilaryArray[i+1]]);
    swap(auxilaryArray,i+1,high);
    return (i+1);
}
function swap(auxilaryArray,index1,index2)
{
    const temp=auxilaryArray[index1];
    auxilaryArray[index1]=auxilaryArray[index2];
    auxilaryArray[index2]=temp; 
}