import { DefaultExecutionContext } from '../src/index';

describe('DefaultExecutionContext', () => {
  it('should initialize with default values', () => {
    const ctx = new DefaultExecutionContext({ id: 1 });
    
    expect(ctx.data).toEqual({ id: 1 });
    expect(ctx.errors).toHaveLength(0);
    expect(ctx.setters).toHaveLength(0);
    expect(ctx.effects).toHaveLength(0);
    expect(ctx.status).toBe(200);
    expect(ctx.isValid()).toBe(true);
  });

  it('should add error and update status', () => {
    const ctx = new DefaultExecutionContext();
    ctx.addError('R001', 'Invalid stock');
    
    expect(ctx.errors).toHaveLength(1);
    expect(ctx.errors[0]).toEqual({ code: 'R001', message: 'Invalid stock' });
    expect(ctx.status).toBe(400);
    expect(ctx.isValid()).toBe(false);
  });

  it('should add effect and setter', () => {
    const ctx = new DefaultExecutionContext();
    ctx.addEffect('E001');
    ctx.addSetter('S001');
    
    expect(ctx.effects).toContain('E001');
    expect(ctx.setters).toContain('S001');
  });

  it('should update data and status', () => {
    const ctx = new DefaultExecutionContext();
    ctx.setData('new_data');
    ctx.setStatus(201);
    
    expect(ctx.data).toBe('new_data');
    expect(ctx.status).toBe(201);
  });
});
