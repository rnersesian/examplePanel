import React, { PureComponent } from "react";
import { GrafanaTheme } from "@grafana/ui";


interface Props {
    theme: GrafanaTheme;
    style: React.CSSProperties;
    text: string;
}

export class Text extends PureComponent<Props> {
    
    render() {
        const {text} = this.props;
        return (
            <h1>{text}</h1>
        );
    }
}