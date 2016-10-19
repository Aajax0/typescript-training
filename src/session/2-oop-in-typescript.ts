namespace TypeScriptDemo {

    interface ILabelService {
        getApplyButtonText(): string;
        getDaysUntilExpiryMessage(days: number): string;
        getDescriptionForFilm(crid: string): Promise<string>;
    }
    class EnglishLabelService implements ILabelService {
        // public getApplyButtonText(): string {
        //     return 'Apply Now';
        // }
        // public getDaysUntilExpiryMessage(days: number): string {
        //     const plural = days > 1 ? 's' : '';
        //     return `This expires in ${days} day${plural}`;
        // }
        // public getDescriptionForFilm(crid: string): Promise<string> {
        //     return new Promise<string>((resolve, reject) => {
        //         setTimeout(() => {
        //             return 'Truly a great film!';
        //         });
        //     });
        // }
    }
    class GermanLabelService implements ILabelService {

    }

    export function executeSession2() {
        console.warn('executing oop in typescript session');
    };  
}