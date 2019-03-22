import React, { PureComponent } from "react";
import { ValueOptions } from "../../types";
import { FormField, PanelOptionsGroup } from "@grafana/ui";

interface Props {
    options: ValueOptions;
    onChange: (valueOptions: ValueOptions) => void;
}

const labelWidth = 6;

export class TextOptions extends PureComponent<Props> {
    onTextChange = event =>
        this.props.onChange({ ...this.props.options, text: event.target.value});

    render() {
        const { text } = this.props.options;

        return(
            <PanelOptionsGroup title="Text Options">
            <div className="gf-form">
                <FormField
                    label="Text"
                    labelWidth={labelWidth}
                    onChange={this.onTextChange}
                    value={text || ''}
                />
            </div>
            </PanelOptionsGroup>
        )
    }
        
}