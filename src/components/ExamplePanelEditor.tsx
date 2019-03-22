import React, { PureComponent } from "react";
import {
    PanelEditorProps,
    PanelOptionsGrid,
} from "@grafana/ui";

import { TextOptions } from "./Text/TextOptions";

import {ValueOptions, ExampleOptions } from "../types";


export class ExamplePanelEditor extends PureComponent<PanelEditorProps<ExampleOptions>> {

    onValueOptionsChanged = (valueOptions: ValueOptions) =>
        this.props.onChange({
            ...this.props.options,
            valueOptions
        });

    render() {
        const {options, onChange} = this.props;
        const  {valueOptions} = options;

        return(
            <PanelOptionsGrid>
                <TextOptions
                options={valueOptions}
                onChange={valueOptions => this.onValueOptionsChanged(valueOptions)}
                />
            </PanelOptionsGrid>
        );
    }
}