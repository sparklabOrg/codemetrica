import { Language } from "./language";
import vscodeLangDetection from '@vscode/vscode-languagedetection';
const { ModelOperations } = vscodeLangDetection;

export class DetectLanguage {
    private static extensionToLanguageMap = new Map<string, Language>([
        ['c', Language.C],
        ['cpp', Language.CPP],
        ['cs', Language.CSharp],
        ['go', Language.GO],
        ['java', Language.JAVA],
        ['js', Language.JAVASCRIPT],
        ['php', Language.PHP],
        ['py', Language.PYTHON],
        ['rb', Language.RUBY],
        ['ts', Language.TYPESCRIPT]
    ]);

    static fromExtension(extension: string): Language {
        const language = this.extensionToLanguageMap.get(extension.toLowerCase());
        if (!language) {
            throw new Error(`Unsupported language extension: ${extension}`);
        }
        return language;
    }

    static async fromSourceCode(sourceCode: string): Promise<Language> {
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

    static fromAntlrContext(ctx: any): Language {
        const constructor_name = ctx.constructor.name.toLowerCase();
        if (constructor_name.includes('python')) {
            return Language.PYTHON;
        } else if (constructor_name.includes('java')) {
            return Language.JAVA;
        }

        throw new Error(`Unsupported language: ${constructor_name}`);
    }
}