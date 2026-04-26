# 🤖 AI Guidelines for brdd-typescript

## 🏗 Core Components

### 1. `ExecutionContext<T>`
```typescript
export interface ExecutionContext<T = any> {
  data: T | null;
  errors: Array<{ code: string; message: string }>;
  setters: string[];
  effects: string[];
  status: number;
}
```

### 2. Implementation Rules
- **Functional Approach:** Favor stateless functions or classes with private constructors.
- **DTOs:** Always use classes with Decorators (like `class-validator`) for input data if using NestJS.
- **Response Pattern:** Ensure the final output matches the [Unified Response Pattern](https://github.com/brdd-design/brdd/tree/main/articles/EN/BRDD-STORY.md).
