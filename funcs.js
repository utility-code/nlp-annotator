let count = -1;
let sente = new Array();
let finJson = {};
function GetTag()
{

    // console.log(document.getElementById('split').value);
    sente = document.getElementById('sent').value.trim().split("\n");
    let tag_name = document.getElementById('tag').value.trim();
    let max_li = sente.length;
    console.log(sente);
    console.log(tag_name);
    document.getElementById('Information').innerHTML = "We have split your text. Now Lets begin!";
    document.getElementById('startrun').innerHTML = "Click to continue";
    // let count = 0;



}


function GetSelectedText()
{
    if(count!=-1){
        document.getElementById('startrun').innerHTML = "Click to continue";
    }
    if (window.getSelection)
    {
        var selRange = window.getSelection();

        console.log(selRange.toString(),selRange.getRangeAt(0).startOffset,selRange.getRangeAt(0).endOffset);
        if (count!=-1){
            let sf = selRange.getRangeAt(0).startOffset-12;
            let ef = selRange.getRangeAt(0).endOffset-13;
            document.getElementById('textshow').innerHTML = "Prev selection: \t" + sente[count]+" "+selRange.toString()+" "+sf+" "+ef;
            finJson[sente[count]] = {"word":selRange.toString(), "start":sf, "end":ef};
        }

        count+=1;

        if(count<sente.length){

            document.getElementById('text').innerHTML = "Sentence "+(count+1)+": "+sente[count];

        }else if(count>=sente.length){
            document.getElementById('textshow').innerHTML = "Check below";
            document.getElementById('text').innerHTML = sente[count];
            document.getElementById('jsonnow').innerHTML = JSON.stringify( finJson);
            // console.log(finJson);
        }


    }
}
