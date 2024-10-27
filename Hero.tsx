import { SearchForm } from '../components/SearchForm';



export function Hero() {
    return (
    <div className="min-h-screen hero flex justify-center items-center">
        <div className="max-w-4xl flex flex-col gap-6 items-center pb-16">
            <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
                    Easy to Way Find Your Dream Henna Designs
                    </h1>
                    <p className="text-slate-300 font-bold text-center">
                    "Expert Mehndi Design for every Occasion. Adorn your moments with exquisite henna artistry."
                        </p>
            </div>
         <SearchForm />   
        </div>
    </div>
);
}