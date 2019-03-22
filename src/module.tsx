import { ReactPanelPlugin } from "@grafana/ui";

import { ExamplePanel } from "./components/ExamplePanel";

import {defaults, ExampleOptions } from "./types";
import { ExamplePanelEditor } from "./components/ExamplePanelEditor";

export const reactPanel = new ReactPanelPlugin<ExampleOptions>(ExamplePanel);

reactPanel.setEditor(ExamplePanelEditor);
reactPanel.setDefaults(defaults);