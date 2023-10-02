function pidCalculate(pid){
        
        console.log(pid)
        console.log(pid.length)
        let newPid = pid.replaceAll("-","")
        console.log(`new pid : ${newPid}`)
        let sum = 0
        let pidLength = 13
        let lastPidDigit = newPid[12]

        //console.log('lastDigit : ',lastPidDigit)
        for (let i=0 ; i < 12 ; i++){
            sum += newPid[i]*pidLength
            pidLength--
        }
        //console.log(sum)

        let resultBefore = 11 - (sum%11) 
        // console.log('resultBefore : ',resultBefore)
        if (resultBefore > 9){
            if (resultBefore % 10 == lastPidDigit){
                // console.log(true)
                return true
            }else{
                // console.log(false)
                return false
            }
        }else if (resultBefore == lastPidDigit){
            // console.log(true)
            return true
            
        }else{
            // console.log(false)
            return false
        }
        
}

export  { pidCalculate }