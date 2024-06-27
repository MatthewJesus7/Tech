import Section from "./Section"

import Card from "../layout/Card"
import Button from "../items/Button"

function CardSection() {
    return(
        <Section customClass="flex overflow-hidden">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Button customClass="absolute top-1/3 translate-y-1/2 right-10 bg-black rounded-full w-12 h-12 text-white " text="seta"></Button>
        </Section>
    )
}

export default CardSection