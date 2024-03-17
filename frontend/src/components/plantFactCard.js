export default function PlantFactCard({
        property, value
}) {
    return <div className="bg-lightGreen border-2 border-darkGreen py-2 rounded-xl shadow-lg shadow-lightGreen/60">
        <p className="text-2xl text-brown font-bold">{property}</p>
        <p className="text-brown">{value}</p>
    </div>
}