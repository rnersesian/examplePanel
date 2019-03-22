import {
    GrafanaTheme,
} from "@grafana/ui";

export interface ExampleOptions{
    valueOptions: ValueOptions;
}

export const defaults: ExampleOptions = {
    valueOptions: {
        text: "Hello World"
    }
}

export interface ValueOptions {
    text: string;
}

export interface LayoutProps {
    width: number;
    height: number;
    options: ExampleOptions;
    onInterpolate: (value: string, format?: string) => string;
    theme: GrafanaTheme;
}