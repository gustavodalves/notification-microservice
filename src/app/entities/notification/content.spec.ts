import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notofication content', () => {
    const content = new Content('Pedido foi despachado com sucesso');

    expect(content).toBeTruthy();
  });

  it('should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('Pedi')).toThrow();
  });

  it('should not be able to create a notification whth more then 240 characters', () => {
    expect(() => new Content('P'.repeat(241))).toThrow();
  });
});
