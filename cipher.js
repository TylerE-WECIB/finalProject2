let user_input = document.getElementById("user_input") //textarea for where the user inputs the code
let data_mode = document.getElementById("data_mode") //user choice of encrypt/decrypt
let shift_dir = document.getElementById("shift_dir") //user choice of left or right encryption
let shift_index = document.getElementById("shift_index") //amount to decode by
let submit_button = document.getElementById("submit_button") //button clicked to encode/decode
let output = document.getElementById("output") //text area where new code appears

submit_button.addEventListener('click', function(){
    //debug alert
    //alert(`${user_input.value}  ${data_mode.value}  ${shift_dir.value}  ${shift_index.value}`)

    //decrypting is just negative shift direction
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split("") //array of all letters

    //reverse letters if decrypting right or encrypting left
    if((data_mode.value == "encrypt" && shift_dir.value == "left") || (data_mode.value == "decrypt" && shift_dir.value == "right")){
        letters.reverse()
    }
    //debug alert
    //alert(letters)

    //final string that will go in the output box
    let output_string = ""
    for(let char = 0; char < user_input.value.length; char++){
        //accounting for values that arent letters
        if (letters.includes(user_input.value[char].toLowerCase())){
            //console.log(letters.indexOf(user_input.value[char].toLowerCase()))
            
            //creates the new encrypted/decrypted letter by taking the char index, adding the value of the shift index, and using %26 to prevent overflow
            let new_letter = letters[(letters.indexOf(user_input.value[char].toLowerCase()) + parseInt(shift_index.value)) % 26]
            
            if(!letters.includes(user_input.value[char])){
                new_letter = new_letter.toUpperCase()
            }
            //console.log(new_letter)
            output_string += new_letter
        
        }else{
            //if it's a special character or something
            output_string += user_input.value[char]
        }
    }


    output.textContent = output_string
})
