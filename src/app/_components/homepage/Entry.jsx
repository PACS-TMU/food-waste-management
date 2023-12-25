export default function Entry( {foodItem} ) {
    return (
        <div className="entry px-2 py-2">
            Food Available: {foodItem.food}
        </div>
    );
}