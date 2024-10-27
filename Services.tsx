import Image from "next/image";

export function Services() {
    return (
        <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-16">
        <div>
            <div className="relative h-fit w-fit">
            <Image
                 src="/Mehndi7.jpeg"
                 alt="a picture of bride"
                  width={400} 
                  height={400} 
                  className="object-cover" 
                  />
                  <Image
                 src="/Webcover.jpeg"
                 alt="a picture of bride"
                  width={250} 
                  height={250}
                  className="absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block" 
                  /> 
            </div>
        </div>
        <div>
            <p className="font-bold text-5xl mb-1">Our Services</p>
            <p className="text-1xl mb-2">Sumiii has worked extensively in providing henna designs for brides and weddings, plus parties of all sizes, photo shoots, and editorial works, for both individuals and corporate organizations. Her creative and unique designs cut across modern Indo-Pak henna styles, Arabic and Moroccan styles, alongside Western tattoo style body art.</p>
            <p className="text-muted-foreground mb-4">At Sumiii Mehndi, we are dedicated to bringing your artistic visions to life with our exquisite mehndi designs. Our skilled artists specialize in a variety of styles, ensuring that each piece is a unique reflection of your personality and occasion.

Bridales Mehndi
Transform your special day with our stunning bridal mehndi. We offer intricate designs that tell a story, enhancing your beauty and complementing your wedding attire.

Occasional Mehndi
Whether it's a birthday, engagement, or festive celebration, our occasional mehndi services cater to all events. Choose from traditional patterns or modern styles to add a touch of elegance to your festivities.

Custom Designs
We understand that every client is unique. Our custom design service allows you to collaborate with our artists to create a personalized mehndi pattern that resonates with your individual style.

Party Packages
Planning a larger event? Our party packages are designed to accommodate groups, ensuring that everyone can enjoy beautiful mehndi designs. Perfect for henna parties, family gatherings, and corporate events.

Henna Tattoos
For those who prefer a more contemporary look, we also offer henna tattoos. These temporary designs are perfect for anyone looking to adorn their skin with beautiful art without the commitment.

At Sumiii Mehndi, we pride ourselves on using high-quality, natural henna that is safe for all skin types. Our commitment to excellence ensures that every application is not only beautiful but also lasts for days.

Explore the world of mehndi with us and let your hands tell a beautiful story.




</p>
            <button className="bg-black text-white">Read More</button>
        </div>
    </div>
    
    );
         
}