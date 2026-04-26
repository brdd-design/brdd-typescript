/**
 * Standardized error object for BRDD.
 */
export interface BRDDError {
  code: string;
  message: string;
}

/**
 * A subset of the context that allows adding errors and checking validity.
 */
export interface ValidationContext {
  errors: BRDDError[];
  addError(code: string, message: string): void;
  isValid(): boolean;
}

/**
 * The central state object passed around and returned by UseCases.
 */
export interface ExecutionContext<T = any> extends ValidationContext {
  data: T | null;
  setters: string[];
  effects: string[];
  status: number;
  
  addEffect(code: string): void;
  addSetter(code: string): void;
  setData(data: T): void;
  setStatus(status: number): void;
}

/**
 * The default implementation of the ExecutionContext.
 */
export class DefaultExecutionContext<T = any> implements ExecutionContext<T> {
  public data: T | null;
  public errors: BRDDError[];
  public setters: string[];
  public effects: string[];
  public status: number;

  constructor(initialData: T | null = null) {
    this.data = initialData;
    this.errors = [];
    this.setters = [];
    this.effects = [];
    this.status = 200;
  }

  public addError(code: string, message: string): void {
    this.errors.push({ code, message });
    this.status = 400; // Default error status
  }

  public addEffect(code: string): void {
    this.effects.push(code);
  }

  public addSetter(code: string): void {
    this.setters.push(code);
  }

  public setData(data: T): void {
    this.data = data;
  }

  public setStatus(status: number): void {
    this.status = status;
  }

  public isValid(): boolean {
    return this.errors.length === 0;
  }
}

/**
 * Protocol for services dedicated to pure business logic validation.
 */
export interface ValidateService<I> {
  validate(context: ValidationContext, inputData: I): void | Promise<void>;
}

/**
 * Protocol for services that fetch additional data needed for the UseCase.
 */
export interface EnrichService<I, E> {
  enrich(context: ExecutionContext, inputData: I): E | Promise<E>;
}

/**
 * Protocol for external adapters (APIs, DBs) to perform side-effects.
 */
export interface ClientService<I> {
  execute(context: ExecutionContext, inputData: I): void | Promise<void>;
}


/**
 * The orchestrator.
 */
export interface UseCase<I, O> {
  execute(inputData: I): ExecutionContext<O> | Promise<ExecutionContext<O>>;
}

export * from "./decorators";
export * from "./base";
