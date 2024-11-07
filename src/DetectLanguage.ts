import { LanguageEnum } from "./LanguageEnum";
import vscodeLangDetection from '@vscode/vscode-languagedetection';
const { ModelOperations } = vscodeLangDetection;

export class DetectLanguage {
    private static extensionToLanguageMap = new Map<string, LanguageEnum>([
        ['c', LanguageEnum.C],
        ['cpp', LanguageEnum.CPP],
        ['cs', LanguageEnum.CSharp],
        ['go', LanguageEnum.GO],
        ['java', LanguageEnum.JAVA],
        ['js', LanguageEnum.JAVASCRIPT],
        ['php', LanguageEnum.PHP],
        ['py', LanguageEnum.PYTHON],
        ['rb', LanguageEnum.RUBY],
        ['ts', LanguageEnum.TYPESCRIPT]
    ]);

    static fromExtension(extension: string): LanguageEnum {
        const language = this.extensionToLanguageMap.get(extension.toLowerCase());
        if (!language) {
            throw new Error(`Unsupported language extension: ${extension}`);
        }
        return language;
    }

    static async fromSourceCode(sourceCode: string): Promise<LanguageEnum> {
        const modelOperations = new ModelOperations();
        
        try {
            const result = await modelOperations.runModel(sourceCode);
            
            const mostConfidentLanguage = result.reduce((prev, current) => {
                return (prev.confidence > current.confidence) ? prev : current;
            });
            
            return this.fromExtension(mostConfidentLanguage.languageId);
            
        } catch (error) {
            console.error('Error running detector model:', error);
            throw new Error('Failed to detect language'); // Optionally throw an error if needed
        }
    }

    static fromAntlrContext(ctx: any): LanguageEnum {
        const constructor_name = ctx.constructor.name.toLowerCase();
        if (constructor_name.includes('python')) {
            return LanguageEnum.PYTHON;
        } else if (constructor_name.includes('java')) {
            return LanguageEnum.JAVA;
        }

        throw new Error(`Unsupported language: ${constructor_name}`);
    }
}