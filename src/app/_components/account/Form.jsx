export default function Form() {

    return (
        <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyN2fz_tDlFd7uZgt1CDBRVW6J9ubMEVBbRva6YJs2fUYm8QXkW9if69R1S4viuVzQHig/exec"
            className="flex flex-col justify-center items-center pt-4"
        >
            <input className='m-2' name="Email" type="email" placeholder="Email" required />
            <input className='m-2' name="Name" type="text" placeholder="Name" required />
            <button className='m-2 bg-blue-highlight w-[75%] rounded-md shadow-md' type="submit">Send</button>
        </form>
    );

}