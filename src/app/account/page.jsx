import Form from "@/app/_components/account/Form";
export default function Account() {

    return (
        <div className="flex flex-col justify-center items-center w-[95%] mx-auto py-4 mt-20 mb-16">
            <p className="text-3xl font-bold text-center pt-4">Let us know how we did!</p>
            <div className="flex flex-col justify-center items-center w-[95%] mx-auto"><Form /></div>
        </div>
        
    );
}
