"use client";

export default function Code() {
    return (
        <div className="flex items-center justify-center p-4 h-[70vh] flex-col">
            <p className="text-3xl font-semibold text-center p-4">Enter the Code You Found!</p>
            <input
                className='my-2 w-[75%] h-12 p-2 rounded-md bg-[#FDFDFD] placeholder-gray-500'
                name="Code"
                type="text"
                placeholder="8-Digit Code"
                maxLength={8}
                pattern="[0-9]{8}"
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
                    if (code == "54781259") {
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