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
            <Button customClass="absolute top-5 right-5" text="seta"></Button>
        </Section>
    )
}

export default CardSection