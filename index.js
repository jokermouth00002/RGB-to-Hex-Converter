const inputR = document.getElementById('input-R')
const inputG = document.getElementById('input-G')
const inputB = document.getElementById('input-B')
const colorButton = document.getElementById('colorButton')
const colorCode = document.getElementById('colorCode')
const colorSquare = document.getElementById('colorSquare')



colorButton.addEventListener('click', (event) => {
    rCode = inputR.value
    gCode = inputG.value
    bCode = inputB.value



    if ((rCode.length !== 0) && (gCode.length !== 0) && (bCode.length !== 0) && (rCode >= 0) && (gCode >= 0) && (bCode >= 0) && (rCode <= 255) && (gCode <= 255) && (bCode <= 255)) {
        colorCode.value = '#'
        let colorCodeData = [rCode, gCode, bCode]
        rCode = Number(rCode)
        gCode = Number(gCode)
        bCode = Number(bCode)
        colorCodeData.forEach((element, index, arr) => {

            if (element > 9) {

                element = Number(element)
                arr[index] = element.toString(16)
            }
            else {
                arr[index] = '0' + element
            }

            colorCode.value += arr[index]
            colorSquare.style = `background:${colorCode.value}`
        });

    } else {
        alert('input is wrong plz type again')
    }

})