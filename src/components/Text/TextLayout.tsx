import React, { PureComponent } from "react";


import { Text } from "./Text";

import { LayoutProps } from "../../types"

interface Props extends LayoutProps {};

export class TextLayout extends PureComponent<Props> {
    render () {
        const {
            options,
            theme
        } = this.props;


        let value = options.valueOptions.text;
        return(
            <div 
            style= {{
                width: "100%",
                height: "100%",
            }}
            >
                <Text
                    text = {value}
                    theme = {theme}
                    style =  {{
                        fontSize: "60px",
                        textAlign: "center",
                        overflow: "hidden",
                        whitespace: "nowrap"
                    }}
                />
            </div>
        ) 
    }
}