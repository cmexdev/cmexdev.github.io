//PiccoloTools PasswordVerify
//(c) Owen M. 2020

const nums = [0,1,2,3,4,5,6,7,8,9]
const spc = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=',':',';','\'','"',',','<','>','.','/','?']

function piccoloToolsPasswordVerify(password) {
    //Check to see if a password was provided
    if (password) {
        //Check length
        if (password.length >= 8) {
            //Password is long enough
            var arr = 0
            var len = nums.length
            while (arr < len) {
                if (password.includes(nums[arr])) {
                    //Password includes a number
                    var arr = 0
                    var len = spc.length
                    while (arr < len) {
                        if (password.includes(spc[arr])) {
                            //Password includes a spc
                            return [true, 'perfect']
                        }
                        arr++
                    }
                    return [false, 'nospc']
                }
                arr++
            }
            return [false, 'nonum']
        }
        else {
            return [false, 'tooshort']
        }
    }
    else {
        return [false, 'empty']
    }
}