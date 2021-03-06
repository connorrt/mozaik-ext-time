import React from 'react'
import Part, { partPropTypes } from './Part'

const VerticalPart = ({ height: _height, stroke, spacing, ...props }) => {
    const height = _height / 2 - stroke / 2 - spacing

    const pathInstructions = `
        M ${stroke / 2} ${0}
        L ${stroke} ${stroke / 2}
        V ${height - stroke / 2}
        L ${stroke / 2} ${height}
        L ${0} ${height - stroke / 2}
        V ${0} ${stroke / 2}
        L ${stroke / 2} ${0}
    `

    return <Part d={pathInstructions} {...props} />
}

VerticalPart.propTypes = partPropTypes

export default VerticalPart
