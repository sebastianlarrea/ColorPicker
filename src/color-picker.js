import React, { useState } from 'react'
import './color-picker.scss'

const ColorPicker = ({ colorList }) => {
    const [selectedColor, setSelectedColor] = useState(colorList[0])

    const optionModifier = color =>
        selectedColor === color ? ' color-picker__option--selected' : ''

    return (
        <div className="color-picker">
            <h1 className="color-picker__title">Color Picker</h1>
            <section
                style={{ backgroundColor: selectedColor }}
                className="color-picker__main"
            ></section>
            <section className="color-picker__options">
                {colorList &&
                    colorList.map((color, index) => {
                        return (
                            <section
                                key={index}
                                className={`color-picker__option${optionModifier(
                                    color
                                )}`}
                                style={{
                                    backgroundColor: color
                                }}
                                onClick={() => setSelectedColor(color)}
                            ></section>
                        )
                    })}
            </section>
        </div>
    )
}

export default ColorPicker
