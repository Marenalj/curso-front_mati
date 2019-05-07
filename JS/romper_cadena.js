
function breakString(stringChain) {

    const totalLength = stringChain.length;
    let lengthChain1 = totalLength/2;
    let lengthChain2 = totalLength/2;

    if (totalLength % 2 !==0) {
        lengthChain1 += 0.5;              ///lengthChain + lengthChain + 0.5
        lengthChain2 -= 0.5;              ///lengthChain + lengthChain - 0.5
    }
    const chain1 = stringChain.substring(0, lengthChain1 - 1);
    const chain2 = stringChain.substring(lengthChain1, totalLength - 1);    

    console.log(chain1);
    console.log(chain2);
    
}

breakString('zkldfhsdlkfhskt');