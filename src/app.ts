namespace TypeScriptDemo {

    export class App {

        private logger: Logger;

        constructor(logOutputElement: HTMLElement) {
            this.logger = new Logger(logOutputElement);
        }

        public boot(): void {
            console.log('test');
            console.warn('test');
            console.info('test');
            console.error('test');
        }
    }
}