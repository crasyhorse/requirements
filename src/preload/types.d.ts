declare global {
    interface Window {
        api: { platform: NodeJS.Platform };
    }
}

export {};
