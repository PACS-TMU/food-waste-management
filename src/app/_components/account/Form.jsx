"use client";

export default function Form() {
    return (
        <form
            id="my-form"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyN2fz_tDlFd7uZgt1CDBRVW6J9ubMEVBbRva6YJs2fUYm8QXkW9if69R1S4viuVzQHig/exec"
            onSubmit={e => {
                document.getElementById('submit-button').innerHTML = 'Submitting...'
                e.preventDefault();
                setTimeout(() => {
                    const form = document.getElementById('my-form');
                    const data = new FormData(form);
                    const action = e.target.action;
                    document.getElementById('my-form').reset();
                    document.getElementById('submit-button').innerHTML = 'Submitted';
                    document.getElementById('submit-button').disabled = true;
                    document.getElementById('submit-button').style.backgroundColor = '#E5E5E5';
                    fetch(action, {
                        method: 'POST',
                        body: data,
                    })
                }, 1000);
                setTimeout(() => {
                    window.location.replace('/account/scavenger-hunt');
                }, 2000);
            }}
            className="flex flex-col justify-center items-center pt-4 w-full"
        >
            <input
                className='my-2 w-full h-9 p-2 rounded-md bg-[#FDFDFD] placeholder-gray-500'
                maxLength="30"
                name="First Name"
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                pattern="[A-Za-z]+"
                onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
                required
            />
            <input
                className='my-2 w-full h-9 p-2 rounded-md bg-[#FDFDFD] placeholder-gray-500'
                maxLength="30"
                name="Last Name"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                pattern="[A-Za-z]+"
                onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
                required
            />

            <input
                className='my-2 w-full h-9 p-2 rounded-md bg-[#FDFDFD] placeholder-gray-500'
                name="Email"
                type="email"
                placeholder="TMU Email (optional)"
                autoComplete="email"
                pattern=".+@torontomu\.ca"
                onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
            />

            <div className="flex flex-col text-left w-full p-2 bg-[#FDFDFD] rounded-md m-2">
                <p className="text-gray-500">Would you like to receive updates about the app through email?</p>
                <div className="flex flex-row w-full justify-evenly py-1">
                    <div>
                        <input type="radio" id="subscribe-yes" name="Subscription Preferences" value="Yes" required />
                        <label className="px-2" htmlFor="subscribe-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="subscribe-no" name="Subscription Preferences" value="No" />
                        <label className="px-2" htmlFor="subscribe-no">No</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-2 bg-[#FDFDFD] rounded-md m-2">
                <p className="text-gray-500">Were the instructions clear and helpful for getting started?</p>
                <div className="flex flex-row w-full justify-evenly py-1">
                    <div>
                        <input type="radio" id="clarity-yes" name="Clarity of Instructions" value="Yes" required />
                        <label className="px-2" htmlFor="clarity-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="clarity-no" name="Clarity of Instructions" value="No" />
                        <label className="px-2" htmlFor="clarity-no">No</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-2 bg-[#FDFDFD] rounded-md m-2">
                <p className="text-gray-500">Rate the concept of this app:</p>
                <div className="flex flex-row w-full justify-between py-1">
                    <div>
                        <input type="radio" id="concept-1" name="Concept Rating" value="1" required />
                        <label className="px-2" htmlFor="concept-1">1</label>
                    </div>
                    <div>
                        <input type="radio" id="concept-2" name="Concept Rating" value="2" />
                        <label className="px-2" htmlFor="concept-2">2</label>
                    </div>
                    <div>
                        <input type="radio" id="concept-3" name="Concept Rating" value="3" />
                        <label className="px-2" htmlFor="concept-3">3</label>
                    </div>
                    <div>
                        <input type="radio" id="concept-4" name="Concept Rating" value="4" />
                        <label className="px-2" htmlFor="concept-4">4</label>
                    </div>
                    <div>
                        <input type="radio" id="concept-5" name="Concept Rating" value="5" />
                        <label className="px-2" htmlFor="concept-5">5</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-2 bg-[#FDFDFD] rounded-md m-2">
                <p className="text-gray-500">How likely are you to use this app?</p>
                <div className="flex flex-row w-full justify-between py-1">
                    <div>
                        <input type="radio" id="usage-1" name="Likelihood of Usage" value="1" required />
                        <label className="px-2" htmlFor="usage-1">1</label>
                    </div>
                    <div>
                        <input type="radio" id="usage-2" name="Likelihood of Usage" value="2" />
                        <label className="px-2" htmlFor="usage-2">2</label>
                    </div>
                    <div>
                        <input type="radio" id="usage-3" name="Likelihood of Usage" value="3" />
                        <label className="px-2" htmlFor="usage-3">3</label>
                    </div>
                    <div>
                        <input type="radio" id="usage-4" name="Likelihood of Usage" value="4" />
                        <label className="px-2" htmlFor="usage-4">4</label>
                    </div>
                    <div>
                        <input type="radio" id="usage-5" name="Likelihood of Usage" value="5" />
                        <label className="px-2" htmlFor="usage-5">5</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-2 bg-[#FDFDFD] rounded-md m-2">
                <p className="text-gray-500">How likely are you to recommend this app to your friends?</p>
                <div className="flex flex-row w-full justify-between py-1">
                    <div>
                        <input type="radio" id="recommendation-1" name="Likelihood of Recommendation" value="1" required />
                        <label className="px-2" htmlFor="recommendation-1">1</label>
                    </div>
                    <div>
                        <input type="radio" id="recommendation-2" name="Likelihood of Recommendation" value="2" />
                        <label className="px-2" htmlFor="recommendation-2">2</label>
                    </div>
                    <div>
                        <input type="radio" id="recommendation-3" name="Likelihood of Recommendation" value="3" />
                        <label className="px-2" htmlFor="recommendation-3">3</label>
                    </div>
                    <div>
                        <input type="radio" id="recommendation-4" name="Likelihood of Recommendation" value="4" />
                        <label className="px-2" htmlFor="recommendation-4">4</label>
                    </div>
                    <div>
                        <input type="radio" id="recommendation-5" name="Likelihood of Recommendation" value="5" />
                        <label className="px-2" htmlFor="recommendation-5">5</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-2 bg-[#FDFDFD] rounded-md m-2">
                <p className="text-gray-500">Do you have any feedback about the app (optional, max 500 characters)</p>
                <textarea className="border-b w-full py-2" rows="4" type="text" id="Feedback" maxLength="500" name="Feedback" placeholder="Optional Feedback" />
            </div>

            <button
                id='submit-button'
                className='my-4 bg-blue-highlight w-3/4 lg:w-1/2 h-10 rounded-md shadow-md'
                type="submit"
            >
                Submit Feedback
            </button>
        </form>
    );
}