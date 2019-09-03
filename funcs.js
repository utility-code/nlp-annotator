function GetSelectedText () {
    console.log(document.getElementById('tag').value);
            if (window.getSelection) {
                var selRange = window.getSelection();

                console.log(selRange.getRangeAt(0).startOffset);
                console.log(selRange.getRangeAt(0).endOffset);
            }
        }
