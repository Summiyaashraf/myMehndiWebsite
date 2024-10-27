import { designsList } from "./Features";
import Image from 'next/image';

type DesignsProps = (typeof designsList)[0];

export function Designs({
    name,
    id,
    image,
    price,
    description,
}: DesignsProps) {
    return (
        <div className="border-rounded-md overflow-hidden">
            <div>
                <Image 
                    src={image} 
                    alt={name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-150"
                />
            </div>
            <div className="p-4">
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-600">Price: {price} PKR</p>
                <p className="text-sm text-gray-500">{description}</p> {/* Description display karna */}
            </div>
        </div>
    );
}
