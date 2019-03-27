import React, { PureComponent } from "react";
import {
    NullValueMode,
    processTimeSeries,
    PanelProps,
    ThemeContext,
} from "@grafana/ui";


import { ExampleOptions } from "../types";
import { TextLayout } from "./Text/TextLayout";
 
interface Props extends PanelProps<ExampleOptions> {}

export class ExamplePanel extends PureComponent<Props> {

    render() {
        const {
            onInterpolate,
            options,
            width,
            height,
            panelData,
            timeRange
        } = this.props;
 
        if(panelData.timeSeries) {
            const timeSeries = processTimeSeries({
                timeSeries: panelData.timeSeries,
                nullValueMode: NullValueMode.Null,
              });
        
        
            return (
                <ThemeContext.Consumer>
                    {
                        theme => {
                            return(
                                <TextLayout
                                timeRange={timeRange}
                                timeSeries={timeSeries}
                                width={width}
                                height={height}
                                options={options}
                                onInterpolate={onInterpolate}
                                theme={theme}
                                />
                            );
                        }
                    }
                </ThemeContext.Consumer>
                
            );
        }
    }
}