import { IoClose } from "react-icons/io5";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export default function ExpandedEntry({ foodItem, setEntryExpanded }) {
    return (
        <div className="flex flex-col max-h-[80vh]">
            <button className="pt-1 ml-auto mr-2" onClick={() => { setEntryExpanded(false) }}><IoClose size={32} /></button>
            <div className="w-1/2 mx-2 -mt-8 inline-block">
                <p className=" pt-1 tracking-wider inline-block"><u>{foodItem.provider}</u> has food <span>To Go!</span></p>
                <p className=" pt-1 tracking-wider"><u>Pickup at:</u> <i>{foodItem.location}</i></p>
                <p className=" pt-1 tracking-wider"><u>Stock Left:</u></p>
            </div>
            <div className="details mx-2">
                <div className="flex w-full p-2 pb-0 justify-center items-center">
                    <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock > 0 ? 'bg-dark-green' : ''}`}></div>
                    <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock > 10 ? 'bg-dark-green' : ''}`}></div>
                    <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock > 25 ? 'bg-dark-green' : ''}`}></div>
                    <div className={`border border-gray-500 h-5 w-1/4 ${foodItem.stock > 50 ? 'bg-dark-green' : ''}`}></div>
                </div>
                <div className="flex w-full justify-center items-center">
                    <div className="text-sm w-1/4 text-center">1-10</div>
                    <div className="text-sm w-1/4 text-center">10-25</div>
                    <div className="text-sm w-1/4 text-center">25-50</div>
                    <div className="text-sm w-1/4 text-center">50+</div>
                </div>
                <p className="pt-1 tracking-wider"><u>Description:</u> {foodItem.description}</p>
                <div className="grid grid-cols-2 grid-rows-6 p-2 pb-0">
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.vegan ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Vegan</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.beef ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Beef</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.vegetarian ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Vegeterian</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.chicken ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Chicken</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.halal ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Halal</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.fish ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Fish</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.dairyFree ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Dairy Free</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.shellfish ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Shellfish</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.glutenFree ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Gluten Free</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.pork ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Pork</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.peanutFree ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Peanut Free</p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        {foodItem.otherMeat ? <MdOutlineCheckBox size={28} /> : <MdOutlineCheckBoxOutlineBlank size={28} />}
                        <p className="">Other Meat</p>
                    </div>
                </div>
                <p className="text-sm pt-1 pb-1 tracking-wider">{foodItem.provider} will be providing food {foodItem.availability}</p>
            </div>
        </div>

    );
}