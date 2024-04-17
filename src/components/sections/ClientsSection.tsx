import React from "react";

function ClientsSection() {
    const clients = [
        { logo: '/images/clients/electrosteel.jpg', name: 'Netflix' },
        { logo: '/images/clients/tatasteel.png', name: 'Stripe' },
        { logo: '/images/clients/HindustanUni.jpg', name: 'Netflix' },
        { logo: '/images/clients/schneider.png', name: 'Stripe' },
        { logo: '/images/clients/siemens.png', name: 'Netflix' },
        { logo: '/images/clients/vikramsolar.png', name: 'Stripe' },
        { logo: '/images/clients/wbsedcl.png', name: 'Netflix' },
        { logo: '/images/clients/tatachemicals.png', name: 'Stripe' },
        { logo: '/images/clients/tatametaliks.jpg', name: 'Stripe' },
        { logo: '/images/clients/indianoil.png', name: 'Netflix' },
        { logo: '/images/clients/waacker.jpg', name: 'Stripe' },
        { logo: '/images/clients/exide.png', name: 'Stripe' },
        // ... add the rest of the client logos and names here
    ];

    return (
        <section id="clients" className="flex flex-col md:flex-row items-center py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-customCream">
            {/* Heading Column */}
            <div className="flex flex-col items-center justify-center flex-basis-40 w-full md:w-2/5 text-center md:text-left md:mr-16 shadow-xs">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 font-montserrat text-primary">Strategic Partnerships with Global Industry Titans</h1>
                <p className="font-light text-sm md:text-xl font-karla text-primary">
                In an era where precision engineering meets innovation, Dakshineswar Electric stands at the forefront. With solutions spanning across the power and automation spectrum, we&apos;ve earned the trust of global giants, ensuring their infrastructure is not just powered, but empowered.
                </p>
            </div>
            {/* Logos Grid Column */}
            <div className="flex-basis-60 w-full md:w-3/5 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-4 mt-6 md:mt-0">
                {clients.map((client, index) => (
                    <div key={index} className="hover:shadow-primary flex items-center justify-center p-4 bg-white rounded-lg shadow-lg border-2 border-primary ring-2 ring-lightBlue hover:scale-105 transform transition ease-in-out duration-300 md:max-h-28 2xl:max-h-32">
                        <img src={client.logo} alt={client.name} className="max-h-12 md:max-h-20 2xl:max-h-28" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ClientsSection;
