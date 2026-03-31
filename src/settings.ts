import type { App} from "obsidian";
import { PluginSettingTab, Setting } from "obsidian";
import type Slyde from "./main";

export interface SlydeSettings {
    defaultRLL: number;
    currentRLL: number;
    persistentWidth: boolean;
}

export const DEFAULT_SETTINGS: SlydeSettings = {
    defaultRLL: 700,
    currentRLL: 700,
    persistentWidth: true,
}

export class SlydeSettingTab extends PluginSettingTab {
    plugin: Slyde;

    constructor(app: App, plugin: Slyde) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName("Default width")
            .setDesc("The default editor width (in pixels)")
            .addSlider(
                slider => { slider
                    .setLimits(200, 1000, 50)
                    .setValue(this.plugin.settings.defaultRLL)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        this.plugin.settings.defaultRLL = value;
                        await this.plugin.saveSettings();
                    });
                }
            );
        
        new Setting(containerEl)
            .setName("Persistent width?")
            .setDesc("Keep the editor width fixed, even when the window is resized smaller")
            .addToggle(
                toggle => { toggle
                    .setValue(this.plugin.settings.persistentWidth)
                    .onChange(async (value) => {
                        this.plugin.settings.persistentWidth = value;
                        await this.plugin.saveSettings();
                    });
                }
            )
    }
}