import Section from "./Section"

function HeroSection() {
    return(
        <Section customclass=" block md:flex h-[600px] pt-10">

            <article className="p-[10%]">

                <h1 className="text-5xl pt-10">
                    A melhor qualidade pelo menor preço
                </h1>

            </article>

            <aside>

                <div className=" absolute top-10 right-0 md:static w-full h-[560px] sm:size-[560px] bg-opacity-75 bg-black flex justify-center items-center
             ">

                    <button className=" bg-black w-10">

                        saiba mais
                    </button>
                </div>
                
            </aside>

        </Section>
    )
}

export default HeroSection