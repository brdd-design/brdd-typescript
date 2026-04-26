import { RULE_KEY } from "./decorators";

export abstract class MetadataValidator {
  validateAll(context: any, data: any): void {
    const rules = Reflect.getMetadata(RULE_KEY, this.constructor) || [];
    for (const rule of rules) {
      const result = (this as any)[rule.method](data);
      if (typeof result === "boolean" && !result) {
        context.addError(rule.id, rule.message);
      }
    }
  }
}

export function getUseCaseId(useCase: any): string {
  return Reflect.getMetadata("BrddUseCase", useCase.constructor) || "UNKNOWN";
}
