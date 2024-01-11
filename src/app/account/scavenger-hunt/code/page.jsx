"use client";

export default function Code() {
    return (
        <div className="flex items-center justify-center p-4 h-[70vh] flex-col w-[95%] mx-auto py-4 mt-20 mb-20">
            <p className="text-3xl font-semibold text-center p-4">Enter the Code You Found!</p>
            <p className="text-left py-4 pt-2">
                After you&apos;ve solved each hint, you will get a digit, just like the first hint. There will be 7 digits in total, and you will need to enter 
                them in the correct order to finish the scavenger hunt. Good luck!
            </p>
            <input
                className='my-2 w-[75%] h-12 p-2 rounded-md bg-[#FDFDFD] placeholder-gray-500'
                name="Code"
                type="text"
                placeholder="7-Digit Code"
                maxLength={7}
                pattern="[0-9]{7}"
                onKeyDown={(e) => {
                    var allowed = new RegExp("[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab|Enter")
                    allowed.test(e.key) ? "" : e.preventDefault()
                }}
            />
            <button 
                className="my-4 bg-blue-highlight w-3/4 lg:w-1/2 h-10 rounded-md shadow-md hover:scale-105"
                onClick={() => {
                    var code = document.getElementsByName("Code")[0].value
                    console.log(code)
                    if (code == "3425237") {
                        window.location.href = "/account/scavenger-hunt/code/thank-you"
                    } else {
                        alert("This is the wrong code!")
                    }
                }}
            >
                Submit
            </button>
        </div>
    )
}