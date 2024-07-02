import Section from "./Section"

function HeroSection() {
    return(
        <Section customclass="flex h-[600px] pt-10">

            <article className="p-[10%]">
                <h1 className="text-5xl pt-10">
                    A melhor qualidade pelo menor preço
                </h1>
            </article>

            <aside>
                <div className="size-[560px] bg-black ">
                    <button>saiba mais</button>
                </div>
                
            </aside>

        </Section>
    )
}

export default HeroSection