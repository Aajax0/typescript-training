namespace TypeScriptDemo {
    export function executeSession1() {
        console.warn('executing typescript basics session');

        function isNameOfGivenLength(name: string, length: number): boolean {
            // return name.length === length;
        }

        function generateRandomScoreForName(name: string): [string, number] {
            // let score = Math.random() * 5;
            // return [name, score];
        }

        type RandomScore = [string, number];
        function generateScoresForNames(...names: Array<string>): Array<RandomScore> {
            // return names.map(name => generateRandomScoreForName(name));
        }

        type NameApiResponse = {
            name: string,
            score: number,
            languages: {
                list: Array<string>
            }
        };
        function getPerson(): Promise<NameApiResponse> {
            // const response = {
            //     name: 'Rob',
            //     score: 5,
            //     languages: {
            //         list: ['TypeScript']
            //     }
            // }
            // return new Promise<NameApiResponse>((resolve, reject) => {
            //     setTimeout(() => {
            //         resolve(response);
            //     }, 1000);
            // });
        }

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
    };
}