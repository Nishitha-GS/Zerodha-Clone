import React from "react"
import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import Hero from "../landingpage/home/Hero"

describe("Hero Component", ()=>{
    test("Renders Hero Image", ()=>{
        render(<Hero />)
        const heroImg = screen.getByAltText("HomeHeroImage");
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute('src','media/images/homeHero.png');
    })
})