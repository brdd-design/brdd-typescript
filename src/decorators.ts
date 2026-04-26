import "reflect-metadata";

export const USE_CASE_KEY = Symbol("BrddUseCase");
export const RULE_KEY = Symbol("BrddRule");
export const EFFECT_KEY = Symbol("BrddEffect");

export function UseCase(id: string): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata(USE_CASE_KEY, id, target);
  };
}

export function Rule(id: string, message: string = ""): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const rules = Reflect.getMetadata(RULE_KEY, target.constructor) || [];
    rules.push({ id, message, method: propertyKey });
    Reflect.defineMetadata(RULE_KEY, rules, target.constructor);
  };
}

export function Effect(id: string): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const effects = Reflect.getMetadata(EFFECT_KEY, target.constructor) || [];
    effects.push({ id, method: propertyKey });
    Reflect.defineMetadata(EFFECT_KEY, effects, target.constructor);
  };
}
