import { Plugin, MarkdownView } from "obsidian";
import type { SlydeSettings} from "./settings";
import { DEFAULT_SETTINGS, SlydeSettingTab } from "./settings";

export default class Slyde extends Plugin {
    settings!: SlydeSettings

    private status!: HTMLElement;
    private slider!: HTMLInputElement;
    private btnDiv!: HTMLElement;
    private button!: HTMLElement;
    
    maxRLL = 0;
    textPadding = 100;

    async onload() {
        await this.loadSettings();

        this.status = this.addStatusBarItem();

        this.slider = this.status.createEl("input", { type: "range" });
        this.btnDiv = this.status.createEl("div", { "cls": "default-btn-div" });
        this.button = this.btnDiv.createEl("span", { "cls": "default-btn" });

        this.slider.step = "10";
        this.slider.max = "700";
        this.slider.min = "100";

        this.registerEvent(
            this.app.workspace.on("file-open", () => {
                this.handleVisibility();
                this.updateRLL(this.settings.currentRLL);
            })
        );

        this.registerEvent(
            this.app.workspace.on("resize", () => {
                this.setMaximumRLL();
                
                if (this.settings.persistentWidth) return;

                if (this.settings.currentRLL > this.maxRLL) {
                    this.updateRLL(this.maxRLL)
                }
            })
        );

        this.slider.addEventListener("input", () => {
            this.updateRLL(Number(this.slider.value));
        });

        this.slider.addEventListener("change", async () => {
            await this.saveSettings();
        });

        this.button.addEventListener("click", () => {
            this.updateRLL(this.settings.defaultRLL);
        });

        this.handleVisibility();
        this.setMaximumRLL();
        this.updateRLL(this.settings.currentRLL);

        this.addSettingTab(new SlydeSettingTab(this.app, this));
    }

    handleVisibility() {
        const workspace = this.app.workspace;
        const view = workspace.getActiveViewOfType(MarkdownView);

        this.status.style.display = view ? "flex" : "none";
    }
    
    setCurrentRLL(value: number) {
        document.body.style.setProperty("--line-width", `${value}px`);
        document.body.style.setProperty("--file-line-width", `${value}px`);
    }

    setMaximumRLL() {
        const workspace = this.app.workspace;
        const view = workspace.getActiveViewOfType(MarkdownView);

        if (!view) return;

        this.maxRLL = Math.floor(
            (view.contentEl.clientWidth - this.textPadding) / 10
        ) * 10

        this.slider.max = String(this.maxRLL);
    }
    
    updateRLL(value: number) {
        this.settings.currentRLL = value;

        this.slider.value = `${value}`;
        this.button.textContent = `${value}px`;
        this.setCurrentRLL(value);
    }
    
    onunload() {
        document.body.style.removeProperty("--line-width");
        document.body.style.removeProperty("--file-line-width");
    }

    async loadSettings() {
        this.settings = Object.assign(
            {}, DEFAULT_SETTINGS, await this.loadData() as Partial<SlydeSettings>
        );
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}